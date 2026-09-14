import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ApiTeaser from "../components/site/ApiTeaser";
import SiteLayout from "../components/site/SiteLayout";
import { routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";

/* ── Illustrations (décoratives, masquées aux lecteurs d'écran) ─────────── */

const RouteFigure = ({ copy }) => (
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
      {copy.stops}
    </span>
    <span className='ls-num absolute right-3.5 top-3 rounded-full bg-ls-surface px-3 py-1.5 text-[10px] text-ls-ok'>
      {copy.saving}
    </span>
  </div>
);

const WhatsAppFigure = ({ copy }) => (
  <div aria-hidden='true' className='flex flex-col gap-3'>
    <div className='rounded-[18px] rounded-bl-md bg-ls-fill p-4 text-[13px] leading-relaxed text-ls-muted'>
      {copy.message}
    </div>
    <div className='flex justify-center text-ls-faint'>
      <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
        <path d='M12 5v14M6 13l6 6 6-6' />
      </svg>
    </div>
    <dl className='grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-[18px] border border-ls-rule bg-ls-surface p-4 text-[13px]'>
      {copy.fields.map(([label, value]) => (
        <div key={label} className='contents'>
          <dt className='text-ls-muted'>{label}</dt>
          <dd className='font-semibold'>{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const FieldFigure = ({ copy }) => (
  <ul aria-hidden='true' className='flex flex-col gap-2.5'>
    {[
      ["bg-ls-warn", copy[0], false],
      ["bg-ls-ok", copy[1], true],
      ["bg-ls-bad", copy[2], false],
    ].map(([dot, label, ok]) => (
      <li key={label} className={`flex items-center gap-3 rounded-[18px] px-[18px] py-[15px] ${ok ? "bg-ls-ok-bg" : "bg-ls-fill"}`}>
        <span className={`h-[9px] w-[9px] shrink-0 rounded-full ${dot}`} />
        <span className={`text-[13px] ${ok ? "font-semibold text-ls-ok" : ""}`}>{label}</span>
      </li>
    ))}
  </ul>
);

const figures = {
  tournees: [RouteFigure, "route"],
  whatsapp: [WhatsAppFigure, "whatsapp"],
  terrain: [FieldFigure, "field"],
};

const TechnologiePage = () => {
  const copy = useCopy("technologie");
  const { seo, hero, problems, recrutement } = copy;
  return (
  <>
    <SEO title={seo.title} description={seo.description} canonical={routes.technologie} />
    <SiteLayout>
      <section
        aria-labelledby='technologie-titre'
        className='grid grid-cols-1 items-end gap-10 px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px] lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-[72px]'
      >
        <div className='flex flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{hero.kicker}</span>
          <h1 id='technologie-titre' className='ls-h ls-d1 max-w-[17ch]'>
            {hero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{hero.lede}</p>
        </div>
        <div className='flex flex-col gap-4 border-t border-ls-rule pt-5'>
          <h2 className='ls-kicker text-ls-faint'>{hero.stackTitle}</h2>
          <ul className='flex flex-wrap gap-2'>
            {hero.stack.map((item) => (
              <li key={item} className='rounded-full border border-ls-rule px-3 py-1.5 text-xs font-semibold'>
                {item}
              </li>
            ))}
          </ul>
          <p className='ls-cap text-ls-muted'>{hero.stackNote}</p>
        </div>
      </section>

      <section aria-labelledby='technologie-problemes' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='flex flex-col gap-4 border-t border-ls-rule pb-4 pt-11'>
          <span className='ls-kicker text-ls-accent'>{problems.kicker}</span>
          <h2 id='technologie-problemes' className='ls-h ls-d2 max-w-[24ch]'>
            {problems.title}
          </h2>
        </div>
        <ol>
          {problems.items.map((item) => {
            const [Figure, figureKey] = figures[item.id];
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
                <Figure copy={copy.figures[figureKey]} />
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-label={copy.asideLabel} className='grid grid-cols-1 gap-5 px-[18px] pb-16 md:grid-cols-2 md:px-16 md:pb-[88px]'>
        <ApiTeaser />
        <div className='flex flex-col gap-4 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-9'>
          <h2 className='ls-h text-[22px]'>{recrutement.title}</h2>
          <p className='ls-body text-ls-ink-mute'>{recrutement.body}</p>
          <Link to={routes.recrutement} className='ls-btn ls-btn-ink mt-auto self-start'>
            {recrutement.cta}
          </Link>
        </div>
      </section>
    </SiteLayout>
  </>
  );
};

export default TechnologiePage;
