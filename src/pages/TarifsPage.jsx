import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import {
  tarifsColumns,
  tarifsFallbackRange,
  tarifsHero,
  tarifsMarketplace,
  tarifsPath,
  tarifsSeo,
  tarifsVolumes,
  tarifsZones,
} from "../constants/offre";
import { siteWhatsappHref } from "../constants/site";
import { LandingPublicProvider, useLandingPublic } from "../context/LandingPublicContext";
import ReversementFormule from "../sections/offre/ReversementFormule";
import TarifsParZone from "../sections/offre/TarifsParZone";
import { deliveryFeeRange } from "../services/tarifs";

const formatAmount = (amount) => new Intl.NumberFormat("fr-FR").format(amount);

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
  const { landing } = useLandingPublic();
  const range = deliveryFeeRange(landing) ?? tarifsFallbackRange;
  const { livraison, stockage, reversement } = tarifsColumns;

  return (
    <section aria-label='Ce que vous payez' className='px-[18px] pb-16 md:px-16 md:pb-[76px]'>
      <div className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule md:grid-cols-3'>
        <Column
          kicker={livraison.kicker}
          value={formatAmount(range.min)}
          unit={range.max > range.min ? `à ${formatAmount(range.max)} FCFA` : "FCFA"}
          text={livraison.text}
          bullets={livraison.bullets}
        />
        <Column {...stockage} />
        <Column {...reversement} />
      </div>
    </section>
  );
};

const TarifsPage = () => (
  <LandingPublicProvider>
    <SEO title={tarifsSeo.title} description={tarifsSeo.description} canonical={tarifsPath} />
    <SiteLayout>
      <section aria-labelledby='tarifs-titre' className='px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px]'>
        <div className='flex max-w-[860px] flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{tarifsHero.kicker}</span>
          <h1 id='tarifs-titre' className='ls-h ls-d1'>
            {tarifsHero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{tarifsHero.lede}</p>
        </div>
      </section>

      <TarifsColumns />

      <section id='zones' aria-labelledby='tarifs-zones' className='scroll-mt-6 px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='grid grid-cols-1 items-end gap-5 pb-10 md:grid-cols-2 md:gap-[72px]'>
          <div className='flex flex-col gap-4'>
            <span className='ls-kicker text-ls-accent'>{tarifsZones.kicker}</span>
            <h2 id='tarifs-zones' className='ls-h ls-d2 max-w-[22ch]'>
              {tarifsZones.title}
            </h2>
          </div>
          <p className='ls-body max-w-[46ch] text-ls-muted'>{tarifsZones.body}</p>
        </div>
        <TarifsParZone />
      </section>

      <ReversementFormule id='tarifs-calcul' kicker='Le calcul' withExample />

      <section aria-label='Autres offres' className='grid grid-cols-1 gap-5 px-[18px] pb-16 md:grid-cols-2 md:px-16 md:pb-[88px]'>
        <div className='flex flex-col gap-4 rounded-[26px] border border-ls-rule p-7 md:p-8'>
          <h2 className='ls-h text-[22px]'>{tarifsVolumes.title}</h2>
          <p className='ls-body text-ls-muted'>{tarifsVolumes.body}</p>
          <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-line mt-auto self-start'>
            {tarifsVolumes.cta}
          </a>
        </div>
        <div className='flex flex-col gap-4 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-8'>
          <div className='flex items-center gap-2.5'>
            <span className='rounded-full bg-ls-ink-speed px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.06em] text-[#2A1D04]'>
              {tarifsMarketplace.badge}
            </span>
            <h2 className='ls-h text-[22px]'>{tarifsMarketplace.title}</h2>
          </div>
          <p className='ls-body text-ls-ink-mute'>{tarifsMarketplace.body}</p>
        </div>
      </section>
    </SiteLayout>
  </LandingPublicProvider>
);

export default TarifsPage;
