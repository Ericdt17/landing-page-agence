import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import { useEffect, useId, useRef, useState } from "react";

const SPACING = 322;
const AUTOPLAY_MS = 5000;

const placement = (offset) => {
  const distance = Math.abs(offset);
  if (distance === 0) return { scale: 1, opacity: 1, z: 3 };
  if (distance === 1) return { scale: 0.84, opacity: 0.34, z: 2 };
  return { scale: 0.76, opacity: 0, z: 1 };
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Visite d'écrans : des onglets en pastilles au-dessus, l'écran choisi au
 * centre, ses voisins estompés de part et d'autre (sur mobile, seul l'écran
 * choisi est affiché). Onglets conformes au motif ARIA : flèches, Début, Fin.
 *
 * Défilement automatique toutes les 5 secondes, avec un bouton pause (un
 * contenu qui bouge plus de 5 s doit pouvoir être arrêté). Il s'interrompt
 * au survol, quand un onglet a le focus clavier ou quand l'onglet du
 * navigateur est caché, et ne démarre pas si l'appareil demande moins de
 * mouvement.
 *
 * `screens` associe l'`id` de chaque onglet à son composant d'écran.
 */
const ScreenTour = ({ label, tabs, screens, height = 440 }) => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const baseId = useId();
  const tabRefs = useRef([]);

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const running = playing && !hovered && !focusWithin && !pageHidden;

  useEffect(() => {
    if (!running) return undefined;
    /* `active` en dépendance : un choix manuel repart pour 5 secondes pleines */
    const timer = setTimeout(() => setActive((index) => (index + 1) % tabs.length), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [running, active, tabs.length]);

  const select = (index, focus = false) => {
    setActive(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event, index) => {
    const last = tabs.length - 1;
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next, true);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
      }}
    >
      <div
        role='tablist'
        aria-label={label}
        className='flex flex-wrap items-start justify-center gap-2.5 pb-8 md:gap-3.5 md:pb-[76px]'
      >
        {tabs.map((tab, index) => {
          const selected = index === active;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type='button'
              role='tab'
              id={`${baseId}-onglet-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-ecran`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              style={{ "--lift": `${tab.lift ?? 0}px` }}
              className={`relative flex items-center gap-2.5 overflow-hidden rounded-full border px-4 py-3 shadow-[0_6px_18px_rgba(0,0,0,.06)] transition-colors md:translate-y-[var(--lift)] md:px-[18px] md:py-[13px] ${
                selected ? "border-ls-primary bg-ls-select" : "border-ls-stroke bg-ls-surface hover:border-ls-faint"
              }`}
            >
              <span aria-hidden='true' className={`h-2 w-2 shrink-0 rounded-full ${selected ? "bg-ls-primary" : "bg-ls-stroke"}`} />
              <span className='ls-h whitespace-nowrap text-sm'>{tab.label}</span>
              {selected && running && (
                /* Barre de progression : montre quand l'écran suivant arrive */
                <span
                  key={`progress-${active}`}
                  aria-hidden='true'
                  className='ls-tour-progress absolute inset-x-0 bottom-0 h-[2px] origin-left bg-ls-primary'
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-ecran`}
        role='tabpanel'
        aria-labelledby={`${baseId}-onglet-${active}`}
        className='relative overflow-hidden'
        style={{ height }}
      >
        {tabs.map((tab, index) => {
          const offset = index - active;
          const { scale, opacity, z } = placement(offset);
          const Screen = screens[tab.id];
          return (
            <div
              key={tab.id}
              aria-hidden={offset !== 0}
              /* Voisins estompés : aperçu décoratif (WCAG 1.4.3 l'exempte), jamais atteignable */
              inert={offset !== 0 ? "" : undefined}
              className={`absolute left-1/2 top-0 -ml-[150px] w-[300px] transition-[transform,opacity] duration-[380ms] ease-[cubic-bezier(.22,.61,.36,1)] motion-reduce:transition-none ${
                offset !== 0 ? "pointer-events-none max-md:hidden" : ""
              }`}
              style={{ transform: `translateX(${offset * SPACING}px) scale(${scale})`, opacity, zIndex: z }}
            >
              <Screen />
            </div>
          );
        })}
      </div>

      <div className='flex items-center justify-center gap-3 pt-[22px]'>
        {/* Lu seulement quand la visite est arrêtée : pas d'annonce toutes les 5 s */}
        <p className='ls-cap text-center text-ls-faint' aria-live={running ? "off" : "polite"}>
          {tabs[active].caption}
        </p>
        <button
          type='button'
          onClick={() => setPlaying((value) => !value)}
          aria-label={playing ? "Mettre en pause le défilement des écrans" : "Faire défiler les écrans automatiquement"}
          className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ls-stroke text-ls-muted transition-colors hover:border-ls-text hover:text-ls-text'
        >
          {playing ? <PauseIcon className='h-4 w-4' aria-hidden='true' /> : <PlayIcon className='h-4 w-4' aria-hidden='true' />}
        </button>
      </div>
    </div>
  );
};

export default ScreenTour;
