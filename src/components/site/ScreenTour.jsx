import { useId, useRef, useState } from "react";

const SPACING = 322;

const placement = (offset) => {
  const distance = Math.abs(offset);
  if (distance === 0) return { scale: 1, opacity: 1, z: 3 };
  if (distance === 1) return { scale: 0.84, opacity: 0.34, z: 2 };
  return { scale: 0.76, opacity: 0, z: 1 };
};

/**
 * Visite d'écrans : des onglets en pastilles au-dessus, l'écran choisi au
 * centre, ses voisins estompés de part et d'autre (sur mobile, seul l'écran
 * choisi est affiché). Onglets conformes au motif ARIA : flèches, Début, Fin.
 *
 * `screens` associe l'`id` de chaque onglet à son composant d'écran.
 */
const ScreenTour = ({ label, tabs, screens, height = 440 }) => {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef([]);

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
    <div>
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
              className={`flex items-center gap-2.5 rounded-full border px-4 py-3 shadow-[0_6px_18px_rgba(0,0,0,.06)] transition-colors md:translate-y-[var(--lift)] md:px-[18px] md:py-[13px] ${
                selected ? "border-ls-primary bg-ls-select" : "border-ls-stroke bg-ls-surface hover:border-ls-faint"
              }`}
            >
              <span aria-hidden='true' className={`h-2 w-2 shrink-0 rounded-full ${selected ? "bg-ls-primary" : "bg-ls-stroke"}`} />
              <span className='ls-h whitespace-nowrap text-sm'>{tab.label}</span>
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

      <p className='ls-cap pt-[22px] text-center text-ls-faint' aria-live='polite'>
        {tabs[active].caption}
      </p>
    </div>
  );
};

export default ScreenTour;
