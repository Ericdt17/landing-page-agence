import { useCallback, useEffect, useMemo, useState } from "react";

import { useCopy } from "../i18n/useCopy";
import { LanguageSwitch, SiteLogo } from "./site/SiteNav";
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
  const { gate } = useCopy("site");
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
    <main className='flex min-h-screen items-center justify-center bg-ls-bg px-6 py-16 font-montserrat text-ls-text'>
      <div className='w-full max-w-sm'>
        <div className='flex items-center justify-between gap-4'>
          <SiteLogo />
          <LanguageSwitch />
        </div>
        <h1 className='ls-h mt-8 text-3xl leading-tight'>{gate.title}</h1>
        <p className='mt-3 text-sm leading-6 text-ls-muted'>{gate.body}</p>

        <form onSubmit={submit} className='mt-8 flex flex-col gap-3'>
          <label htmlFor='gate-code' className='sr-only'>
            {gate.label}
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
            placeholder={gate.label}
            className='h-12 rounded-full border border-ls-stroke bg-ls-surface px-5 text-sm text-ls-text outline-none placeholder:text-ls-faint focus-visible:border-ls-accent focus-visible:ring-2 focus-visible:ring-ls-primary-soft'
          />
          <button type='submit' className='ls-btn ls-btn-lg ls-btn-solid'>
            {gate.submit}
          </button>
          {error && (
            <p id='gate-error' role='alert' className='text-sm text-ls-bad'>
              {gate.error}
            </p>
          )}
        </form>

        <p className='mt-10 text-xs leading-5 text-ls-faint'>{gate.note}</p>
      </div>
    </main>
  );
};

export default SiteGate;
