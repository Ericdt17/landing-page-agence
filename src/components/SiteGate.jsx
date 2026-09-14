import { useCallback, useEffect, useMemo, useState } from "react";

import { headerLogo } from "../assets/images";
import { fetchSiteConfig, gateIsActive, readEnv } from "../services/siteConfig";

const STORAGE_KEY = "livsight.gate";
const QUERY_KEY = "acces";

const readStored = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
};

const store = (value) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* navigation privée, stockage bloqué : on reste déverrouillé pour la session en cours */
  }
};

const SiteGate = ({ children }) => {
  const buildActive = useMemo(gateIsActive, []);
  const [active, setActive] = useState(buildActive);
  const [expected, setExpected] = useState(() => readEnv("VITE_SITE_GATE_CODE"));
  const [unlocked, setUnlocked] = useState(!buildActive);
  const [entry, setEntry] = useState("");
  const [error, setError] = useState(false);

  /* Le drapeau distant peut ouvrir le site sans redéploiement. On ne l'interroge
     que si la construction est verrouillée : en production, aucun appel. */
  useEffect(() => {
    if (!buildActive) return undefined;
    let cancelled = false;
    fetchSiteConfig().then((config) => {
      if (cancelled || !config) return;
      const remote = String(config.gate ?? "").toLowerCase();
      if (remote === "off" || remote === "false" || remote === "0") {
        setActive(false);
        setUnlocked(true);
        return;
      }
      if (typeof config.code === "string" && config.code.trim().length > 0) {
        setExpected(config.code.trim());
      }
    });
    return () => {
      cancelled = true;
    };
  }, [buildActive]);

  useEffect(() => {
    if (!active) return;
    if (readStored() === expected) {
      setUnlocked(true);
      return;
    }
    const fromUrl = new URLSearchParams(window.location.search).get(QUERY_KEY);
    if (fromUrl && fromUrl.trim() === expected) {
      store(expected);
      setUnlocked(true);
      const url = new URL(window.location.href);
      url.searchParams.delete(QUERY_KEY);
      window.history.replaceState({}, "", url.toString());
    }
  }, [active, expected]);

  useEffect(() => {
    if (!active || unlocked) return undefined;
    const tag = document.createElement("meta");
    tag.name = "robots";
    tag.content = "noindex, nofollow";
    document.head.appendChild(tag);
    return () => tag.remove();
  }, [active, unlocked]);

  const submit = useCallback(
    (event) => {
      event.preventDefault();
      if (entry.trim() === expected) {
        store(expected);
        setUnlocked(true);
        setError(false);
        return;
      }
      setError(true);
    },
    [entry, expected]
  );

  if (unlocked) return children;

  return (
    <main className='flex min-h-screen items-center justify-center bg-white px-6 py-16'>
      <div className='w-full max-w-sm'>
        <img src={headerLogo} alt='LivSight' className='h-9 w-auto' />
        <h1 className='mt-6 font-montserrat text-3xl font-bold leading-tight text-gray-900'>
          Le nouveau site arrive.
        </h1>
        <p className='mt-3 font-montserrat text-sm leading-6 text-gray-600'>
          Cette version est en cours de préparation. Entrez le code d&rsquo;accès pour la
          consulter.
        </p>

        <form onSubmit={submit} className='mt-8 flex flex-col gap-3'>
          <label htmlFor='gate-code' className='sr-only'>
            Code d&rsquo;accès
          </label>
          <input
            id='gate-code'
            type='password'
            autoComplete='off'
            value={entry}
            onChange={(event) => {
              setEntry(event.target.value);
              setError(false);
            }}
            aria-invalid={error}
            aria-describedby={error ? "gate-error" : undefined}
            placeholder='Code d&rsquo;accès'
            className='h-12 rounded-full border border-gray-200 px-5 font-montserrat text-sm text-gray-900 outline-none focus-visible:border-brand-ink focus-visible:ring-2 focus-visible:ring-brand-ink/30'
          />
          <button
            type='submit'
            className='h-12 rounded-full bg-brand-ink px-5 font-montserrat text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink'
          >
            Entrer
          </button>
          {error && (
            <p id='gate-error' role='alert' className='font-montserrat text-sm text-red-600'>
              Ce code ne correspond pas. Réessayez.
            </p>
          )}
        </form>

        <p className='mt-10 font-montserrat text-xs leading-5 text-gray-400'>
          Le site actuel reste disponible sur livsight.com.
        </p>
      </div>
    </main>
  );
};

export default SiteGate;
