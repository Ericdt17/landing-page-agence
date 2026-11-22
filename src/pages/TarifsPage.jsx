import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
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

/* Comme sur l'accueil : numérotation et séparation par le blanc, sans filets */
/* En bureau, chaque colonne partage les mêmes pistes de lignes (subgrid) :
   libellés, montants, textes et puces restent alignés d'une colonne à l'autre */
const Column = ({ number, kicker, value, unit, text, bullets }) => (
  <div className='flex flex-col gap-4 md:grid md:row-span-4 md:[grid-template-rows:subgrid]'>
    <div className='flex items-baseline gap-2.5'>
      <span aria-hidden='true' className='ls-num text-xs font-semibold text-ls-accent'>{number}</span>
      <span className='ls-kicker text-ls-accent'>{kicker}</span>
    </div>
    <p className='flex flex-wrap items-baseline gap-2'>
      <span className='ls-num text-[34px] leading-none md:text-[38px]'>{value}</span>
      {unit && <span className='text-[15px] text-ls-muted'>{unit}</span>}
    </p>
    <p className='ls-cap text-ls-muted'>{text}</p>
    <ul className='ls-cap flex flex-col gap-2.5 border-t border-ls-rule pt-5 text-ls-muted'>
      {bullets.map((bullet) => (
        <li key={bullet} className='flex gap-2.5'>
          <span aria-hidden='true' className='text-ls-accent'>·</span>
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
      <div className='grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-x-10 md:gap-y-4'>
        <Column
          number='01'
          kicker={livraison.kicker}
          value={formatAmount(range.min, language)}
          unit={range.max > range.min ? fill(tarifs.rangeUnit, { max: formatAmount(range.max, language) }) : tarifs.currency}
          text={livraison.text}
          bullets={livraison.bullets}
        />
        <Column number='02' {...stockage} />
        <Column number='03' {...reversement} />
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
        <div className='flex w-full flex-col gap-6 md:gap-[26px]'>
          <h1 id='tarifs-titre' className='ls-h ls-d1 w-full text-ls-primary'>
            {hero.title}
          </h1>
          <p className='ls-lede w-full text-ls-muted'>{hero.lede}</p>
        </div>
      </section>

      <Reveal>
        <TarifsColumns />
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <ReversementFormule id='tarifs-calcul' kicker={tarifs.calculKicker} withExample />
      </Reveal>

      {/* Comme sur l'accueil : bande simple titre + CTA, puis bande ink pleine
         largeur, au lieu de deux cartes arrondies */}
      <Reveal>
        <section aria-labelledby='tarifs-volumes' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
          <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12'>
            <div className='flex flex-col gap-4'>
              <h2 id='tarifs-volumes' className='ls-h ls-d2 max-w-[24ch]'>{volumes.title}</h2>
              <p className='ls-body max-w-[54ch] text-ls-muted'>{volumes.body}</p>
            </div>
            <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-line'>
              {volumes.cta}
            </WhatsAppButton>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section aria-labelledby='tarifs-marketplace' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[76px]'>
          <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
            <div className='flex flex-col gap-5'>
              <h2 id='tarifs-marketplace' className='ls-h ls-d2 max-w-[24ch]'>
                {marketplace.title}
                {" "}
                <sup className='ls-soon !text-ls-ink-speed'>{marketplace.badge}</sup>
              </h2>
              <p className='ls-body max-w-[54ch] text-ls-ink-mute'>{marketplace.body}</p>
            </div>
            <div className='flex flex-col gap-2.5'>
              <Link to={routes.marketplace} className='ls-btn ls-btn-ink'>
                {marketplace.link}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </SiteLayout>
  </LandingPublicProvider>
  );
};

export default TarifsPage;
