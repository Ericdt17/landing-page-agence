import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { routes } from "../constants/routes";
import { fill, useCopy, useLanguage } from "../i18n/useCopy";
import { LandingPublicProvider, useLandingPublic } from "../context/LandingPublicContext";
import ReversementFormule from "../sections/offre/ReversementFormule";
import TarifsParZone from "../sections/offre/TarifsParZone";
import { deliveryFeeRange } from "../services/tarifs";
import WhatsAppButton from "../components/site/WhatsAppButton";

/** Fourchette confirmée, utilisée tant que l'API ne répond pas. */
const FALLBACK_RANGE = { min: 1000, max: 5000 };

const formatAmount = (amount, language) => new Intl.NumberFormat(language === "en" ? "en-GB" : "fr-FR").format(amount);

const Column = ({ kicker, value, unit, text, bullets }) => (
  <div className='flex flex-col gap-4 bg-ls-bg py-8 md:px-8 md:first:pl-0 md:last:pr-0'>
    <span className='ls-kicker text-ls-accent'>{kicker}</span>
    <p className='flex flex-wrap items-baseline gap-2'>
      <span className='ls-num text-[34px] leading-none md:text-[38px]'>{value}</span>
      {unit && <span className='text-[15px] text-ls-muted'>{unit}</span>}
    </p>
    <p className='ls-cap text-ls-muted'>{text}</p>
    <ul className='mt-auto flex flex-col gap-2 pt-2 text-xs text-ls-muted'>
      {bullets.map((bullet) => (
        <li key={bullet} className='flex gap-2'>
          <span aria-hidden='true'>·</span>
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

const TarifsColumns = () => {
  const { tarifs } = useCopy("offre");
  const { language } = useLanguage();
  const { landing } = useLandingPublic();
  const range = deliveryFeeRange(landing) ?? FALLBACK_RANGE;
  const { livraison, stockage, reversement } = tarifs.columns;

  return (
    <section aria-label={tarifs.columnsLabel} className='px-[18px] pb-16 md:px-16 md:pb-[76px]'>
      <div className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule md:grid-cols-3'>
        <Column
          kicker={livraison.kicker}
          value={formatAmount(range.min, language)}
          unit={range.max > range.min ? fill(tarifs.rangeUnit, { max: formatAmount(range.max, language) }) : tarifs.currency}
          text={livraison.text}
          bullets={livraison.bullets}
        />
        <Column {...stockage} />
        <Column {...reversement} />
      </div>
    </section>
  );
};

const TarifsPage = () => {
  const { tarifs } = useCopy("offre");
  const { seo, hero, zones, volumes, marketplace } = tarifs;
  return (
  <LandingPublicProvider>
    <SEO title={seo.title} description={seo.description} canonical={routes.tarifs} />
    <SiteLayout>
      <section aria-labelledby='tarifs-titre' className='px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px]'>
        <div className='flex max-w-[860px] flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{hero.kicker}</span>
          <h1 id='tarifs-titre' className='ls-h ls-d1'>
            {hero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{hero.lede}</p>
        </div>
      </section>

      <TarifsColumns />

      <section id='zones' aria-labelledby='tarifs-zones' className='scroll-mt-6 px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='grid grid-cols-1 items-end gap-5 pb-10 md:grid-cols-2 md:gap-[72px]'>
          <div className='flex flex-col gap-4'>
            <span className='ls-kicker text-ls-accent'>{zones.kicker}</span>
            <h2 id='tarifs-zones' className='ls-h ls-d2 max-w-[22ch]'>
              {zones.title}
            </h2>
          </div>
          <p className='ls-body max-w-[46ch] text-ls-muted'>{zones.body}</p>
        </div>
        <TarifsParZone />
      </section>

      <ReversementFormule id='tarifs-calcul' kicker={tarifs.calculKicker} withExample />

      <section aria-label={tarifs.othersLabel} className='grid grid-cols-1 gap-5 px-[18px] pb-16 md:grid-cols-2 md:px-16 md:pb-[88px]'>
        <div className='flex flex-col gap-4 rounded-[26px] border border-ls-rule p-7 md:p-8'>
          <h2 className='ls-h text-[22px]'>{volumes.title}</h2>
          <p className='ls-body text-ls-muted'>{volumes.body}</p>
          <WhatsAppButton className='ls-btn ls-btn-line mt-auto self-start'>
            {volumes.cta}
          </WhatsAppButton>
        </div>
        <div className='flex flex-col gap-4 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-8'>
          <div className='flex items-center gap-2.5'>
            <span className='rounded-full bg-ls-ink-speed px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.06em] text-[#2A1D04]'>
              {marketplace.badge}
            </span>
            <h2 className='ls-h text-[22px]'>{marketplace.title}</h2>
          </div>
          <p className='ls-body text-ls-ink-mute'>{marketplace.body}</p>
          <Link to={routes.marketplace} className='ls-btn ls-btn-ink-line mt-auto self-start'>
            {marketplace.link}
          </Link>
        </div>
      </section>
    </SiteLayout>
  </LandingPublicProvider>
  );
};

export default TarifsPage;
