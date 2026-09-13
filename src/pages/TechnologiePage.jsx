import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { plateformeIntegrationsApiPath } from "../constants/integrationsApi";
import { entrepriseRecrutementPath } from "../constants/recruitment";
import {
  technologieApi,
  technologieHero,
  technologiePath,
  technologieProblems,
  technologieRecrutement,
  technologieSeo,
} from "../constants/technologie";

/* ── Illustrations (décoratives, masquées aux lecteurs d'écran) ─────────── */

const RouteFigure = () => (
  <div aria-hidden='true' className='relative h-[220px] overflow-hidden rounded-[22px] border border-ls-rule bg-ls-fill'>
    <svg viewBox='0 0 420 220' className='absolute inset-0 h-full w-full'>
      <path
        d='M50 180 L 120 150 L 175 165 L 240 110 L 300 128 L 360 60'
        fill='none'
        strokeWidth='3'
        strokeLinecap='round'
        style={{ stroke: "var(--ls-primary)" }}
      />
      <circle cx='50' cy='180' r='9' style={{ fill: "var(--ls-primary)" }} />
      {[
        [120, 150],
        [175, 165],
        [240, 110],
        [300, 128],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r='5' style={{ fill: "var(--ls-text)" }} />
      ))}
      <circle cx='360' cy='60' r='7' style={{ fill: "var(--ls-speed)" }} />
    </svg>
    <span className='absolute bottom-3 left-3.5 rounded-full bg-ls-surface px-3 py-1.5 text-[10px] font-bold'>
      6 arrêts · une tournée
    </span>
    <span className='ls-num absolute right-3.5 top-3 rounded-full bg-ls-surface px-3 py-1.5 text-[10px] text-ls-ok'>
      −5 % de distance
    </span>
  </div>
);

const WhatsAppFigure = () => (
  <div aria-hidden='true' className='flex flex-col gap-3'>
    <div className='rounded-[18px] rounded-bl-md bg-ls-fill p-4 text-[13px] leading-relaxed text-ls-muted'>
      bonjour 2 robes + 1 sac bastos près de la pharmacie 690 12 34 56 encaisser 18500 merci
    </div>
    <div className='flex justify-center text-ls-faint'>
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
        <path d='M12 5v14M6 13l6 6 6-6' />
      </svg>
    </div>
    <dl className='grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-[18px] border border-ls-rule bg-ls-surface p-4 text-[13px]'>
      {[
        ["Téléphone", "690 12 34 56"],
        ["Quartier", "Bastos, près de la pharmacie"],
        ["Produits", "2 robes, 1 sac"],
        ["À encaisser", "18 500 FCFA"],
      ].map(([label, value]) => (
        <div key={label} className='contents'>
          <dt className='text-ls-muted'>{label}</dt>
          <dd className='font-semibold'>{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const FieldFigure = () => (
  <ul aria-hidden='true' className='flex flex-col gap-2.5'>
    {[
      ["bg-ls-warn", "Positions gardées sur le téléphone · hors réseau", false],
      ["bg-ls-ok", "Réseau revenu · 12 positions envoyées", true],
      ["bg-ls-bad", "Adresse hors zone de service · refusée", false],
    ].map(([dot, label, ok]) => (
      <li key={label} className={`flex items-center gap-3 rounded-[18px] px-[18px] py-[15px] ${ok ? "bg-ls-ok-bg" : "bg-ls-fill"}`}>
        <span className={`h-[9px] w-[9px] shrink-0 rounded-full ${dot}`} />
        <span className={`text-[13px] ${ok ? "font-semibold text-ls-ok" : ""}`}>{label}</span>
      </li>
    ))}
  </ul>
);

const figures = { tournees: RouteFigure, whatsapp: WhatsAppFigure, terrain: FieldFigure };

const TechnologiePage = () => (
  <>
    <SEO title={technologieSeo.title} description={technologieSeo.description} canonical={technologiePath} />
    <SiteLayout>
      <section
        aria-labelledby='technologie-titre'
        className='grid grid-cols-1 items-end gap-10 px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-[72px]'
      >
        <div className='flex flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{technologieHero.kicker}</span>
          <h1 id='technologie-titre' className='ls-h ls-d1 max-w-[17ch]'>
            {technologieHero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{technologieHero.lede}</p>
        </div>
        <div className='flex flex-col gap-4 border-t border-ls-rule pt-5'>
          <h2 className='ls-kicker text-ls-faint'>{technologieHero.stackTitle}</h2>
          <ul className='flex flex-wrap gap-2'>
            {technologieHero.stack.map((item) => (
              <li key={item} className='rounded-full border border-ls-rule px-3 py-1.5 text-xs font-semibold'>
                {item}
              </li>
            ))}
          </ul>
          <p className='ls-cap text-ls-muted'>{technologieHero.stackNote}</p>
        </div>
      </section>

      <section aria-labelledby='technologie-problemes' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='flex flex-col gap-4 border-t border-ls-rule pb-4 pt-11'>
          <span className='ls-kicker text-ls-accent'>{technologieProblems.kicker}</span>
          <h2 id='technologie-problemes' className='ls-h ls-d2 max-w-[24ch]'>
            {technologieProblems.title}
          </h2>
        </div>
        <ol>
          {technologieProblems.items.map((item) => {
            const Figure = figures[item.id];
            return (
              <li
                key={item.id}
                className='grid grid-cols-1 items-center gap-8 border-b border-ls-rule py-10 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-[72px] lg:py-12'
              >
                <div className='flex flex-col gap-3.5'>
                  <span className='ls-kicker text-ls-accent'>{item.kicker}</span>
                  <h3 className='ls-h ls-d3 max-w-[28ch]'>{item.title}</h3>
                  <p className='ls-body max-w-[62ch] text-ls-muted'>{item.text}</p>
                  {item.limit && <p className='ls-cap max-w-[62ch] text-ls-faint'>{item.limit}</p>}
                </div>
                <Figure />
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-label='API et recrutement' className='grid grid-cols-1 gap-5 px-[18px] pb-16 md:grid-cols-2 md:px-16 md:pb-[88px]'>
        <div className='flex flex-col gap-4 rounded-[26px] border border-ls-rule p-7 md:p-9'>
          <div className='flex items-center gap-2.5'>
            <span className='rounded-full border border-ls-speed px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.06em] text-ls-speed'>
              {technologieApi.badge}
            </span>
            <h2 className='ls-h text-[22px]'>{technologieApi.title}</h2>
          </div>
          <p className='ls-body text-ls-muted'>{technologieApi.body}</p>
          <figure className='flex flex-col gap-2'>
            <pre className='overflow-x-auto rounded-2xl bg-ls-ink-bg p-4 text-[12px] leading-relaxed text-ls-ink-mute'>
              <code>
                <span className='text-ls-ink-speed'>POST</span> /v1/deliveries{"\n"}
                {"  "}pickup, dropoff, amount_to_collect{"\n\n"}
                <span className='text-ls-ink-fg'>→ 201</span> delivery_id, tracking_url
              </code>
            </pre>
            <figcaption className='text-[11px] text-ls-faint'>{technologieApi.sampleLabel}</figcaption>
          </figure>
          <Link to={plateformeIntegrationsApiPath} className='ls-link mt-auto inline-flex w-fit items-center gap-1.5 text-sm'>
            {technologieApi.link}
            <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
          </Link>
        </div>
        <div className='flex flex-col gap-4 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-9'>
          <h2 className='ls-h text-[22px]'>{technologieRecrutement.title}</h2>
          <p className='ls-body text-ls-ink-mute'>{technologieRecrutement.body}</p>
          <Link to={entrepriseRecrutementPath} className='ls-btn ls-btn-ink mt-auto self-start'>
            {technologieRecrutement.cta}
          </Link>
        </div>
      </section>
    </SiteLayout>
  </>
);

export default TechnologiePage;
