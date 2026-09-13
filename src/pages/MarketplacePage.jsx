import {
  marketplaceAccueilMobile,
  marketplaceAccueilWeb,
  marketplaceProduitMobile,
  marketplaceSuiviMobile,
  produitCasque,
} from "../assets/images";
import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { marketplacePhotoCredits } from "../constants/photoCredits";
import { links, routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";

/* Aperçus d'écrans : données d'exemple, masquées aux lecteurs d'écran */
const Card = ({ children }) => (
  <div aria-hidden='true' className='flex flex-col gap-2.5 rounded-[28px] bg-ls-surface p-3.5 shadow-[0_2px_8px_rgba(0,0,0,.06)]'>
    {children}
  </div>
);

const ProductCard = () => (
  <Card>
    <img src={produitCasque} alt='' width='160' height='108' className='h-[108px] w-full rounded-[20px] object-cover' />
    <span className='text-[11px] leading-snug'>Casque Bluetooth sans fil</span>
    <span className='ls-h text-[15px]'>12 900 FCFA</span>
    <span className='text-[9px] font-bold text-ls-ok'>Livraison aujourd&apos;hui</span>
  </Card>
);

const OrderCard = () => (
  <Card>
    <div className='flex items-center justify-between'>
      <span className='text-[9px] text-ls-muted'>Courses · nouvelle</span>
      <span className='rounded-full bg-ls-primary-soft px-2 py-1 text-[8px] font-bold tracking-[.6px] text-ls-accent'>MARKETPLACE</span>
    </div>
    <span className='ls-h text-[13px]'>Bastos · M. Tchoumi</span>
    <div className='flex items-baseline justify-between'>
      <span className='text-[10px] text-ls-muted'>Déjà payé</span>
      <span className='ls-h text-sm'>12 900</span>
    </div>
    <span className='ls-btn ls-btn-solid min-h-8 text-[10px]'>Accepter</span>
  </Card>
);

const PayoutCard = () => (
  <Card>
    <span className='text-[9px] font-bold tracking-[.8px] text-ls-muted'>REVERSEMENT</span>
    <span className='ls-h text-lg'>Même relevé</span>
    <div className='h-px bg-ls-stroke' />
    <div className='flex justify-between text-[10px]'>
      <span className='text-ls-muted'>Vente</span>
      <span className='ls-num'>12 900</span>
    </div>
    <div className='flex justify-between text-[10px]'>
      <span className='text-ls-muted'>Frais</span>
      <span>à fixer avec vous</span>
    </div>
  </Card>
);

const previews = [ProductCard, OrderCard, PayoutCard];

const MarketplacePage = () => {
  const copy = useCopy("marketplace");
  const { seo, hero, preview, steps, changes, same, open } = copy;
  return (
  <>
    <SEO title={seo.title} description={seo.description} canonical={routes.marketplace} />
    <SiteLayout>
      <section aria-labelledby='marketplace-titre' className='px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px]'>
        <div className='flex max-w-[900px] flex-col gap-6 md:gap-[26px]'>
          <div className='flex items-center gap-2.5'>
            <span className='rounded-full border border-ls-speed px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-ls-speed'>
              {hero.badge}
            </span>
            <span className='ls-kicker text-ls-speed'>{hero.kicker}</span>
          </div>
          <h1 id='marketplace-titre' className='ls-h ls-d1'>
            {hero.title}
          </h1>
          <p className='ls-lede max-w-[62ch] text-ls-muted'>{hero.lede}</p>
          <div className='flex flex-col items-start gap-3'>
            <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid max-sm:w-full'>
              {hero.cta}
            </a>
            <p className='ls-cap text-ls-muted'>{hero.note}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby='marketplace-apercu' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='flex flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
          <span className='ls-kicker text-ls-accent'>{preview.kicker}</span>
          <h2 id='marketplace-apercu' className='ls-h ls-d2 max-w-[24ch]'>
            {preview.title}
          </h2>
          <p className='ls-body text-ls-muted'>{preview.body}</p>
        </div>

        <figure className='overflow-hidden rounded-[18px] border border-ls-rule bg-ls-surface shadow-[0_18px_44px_rgba(0,0,0,.08)]'>
          <div aria-hidden='true' className='flex items-center gap-1.5 border-b border-ls-rule px-4 py-2.5'>
            <span className='h-2.5 w-2.5 rounded-full bg-ls-stroke' />
            <span className='h-2.5 w-2.5 rounded-full bg-ls-stroke' />
            <span className='h-2.5 w-2.5 rounded-full bg-ls-stroke' />
          </div>
          <img
            src={marketplaceAccueilWeb}
            alt={preview.webAlt}
            width='1200'
            height='750'
            loading='lazy'
            className='block h-auto w-full'
          />
        </figure>

        <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3'>
          {preview.mobile.map((screen) => (
            <figure key={screen.key} className='flex flex-col items-center gap-3'>
              <img
                src={{ accueil: marketplaceAccueilMobile, produit: marketplaceProduitMobile, suivi: marketplaceSuiviMobile }[screen.key]}
                alt={screen.alt}
                width='260'
                height='563'
                loading='lazy'
                className='h-auto w-full max-w-[260px] rounded-[30px] border border-ls-rule shadow-[0_18px_44px_rgba(0,0,0,.08)]'
              />
              <figcaption className='text-sm font-bold'>{screen.caption}</figcaption>
            </figure>
          ))}
        </div>

        <details className='mt-8 text-xs text-ls-muted'>
          <summary className='cursor-pointer font-semibold'>{preview.creditsLabel}</summary>
          <p className='mt-2'>{preview.creditsIntro}</p>
          <ul className='mt-2 flex flex-col gap-1'>
            {marketplacePhotoCredits.map((credit) => (
              <li key={credit.url}>
                <a href={credit.url} target='_blank' rel='noopener noreferrer' className='underline underline-offset-2'>
                  {credit.work}
                </a>{" "}
                · {preview.creditBy} {credit.creator} · {credit.license}
              </li>
            ))}
          </ul>
        </details>
      </section>

      <section aria-labelledby='marketplace-etapes' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='flex flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
          <span className='ls-kicker text-ls-accent'>{steps.kicker}</span>
          <h2 id='marketplace-etapes' className='ls-h ls-d2 max-w-[22ch]'>
            {steps.title}
          </h2>
        </div>
        <ol className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule sm:grid-cols-2 lg:grid-cols-4'>
          {steps.steps.map((step) => (
            <li key={step.number} className='flex flex-col gap-3 bg-ls-bg py-7 sm:px-6 lg:first:pl-0 lg:last:pr-0'>
              <span className='ls-num text-sm text-ls-accent'>{step.number}</span>
              <h3 className='ls-h text-[19px]'>{step.title}</h3>
              <p className='ls-cap text-ls-muted'>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='marketplace-change' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='grid grid-cols-1 items-center gap-10 rounded-[30px] border border-ls-rule bg-ls-fill p-6 md:p-11 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-12'>
          <div className='flex flex-col gap-3.5'>
            <span className='ls-kicker text-ls-accent'>{changes.kicker}</span>
            <h2 id='marketplace-change' className='ls-h ls-d3'>
              {changes.title}
            </h2>
            <p className='ls-body text-ls-muted'>{changes.body}</p>
          </div>
          <div className='grid grid-cols-1 items-start gap-5 sm:grid-cols-3'>
            {changes.figures.map((figure, index) => {
              const Preview = previews[index];
              return (
                <figure key={figure.title} className='flex flex-col gap-3'>
                  <Preview />
                  <figcaption className='flex flex-col gap-1'>
                    <span className='text-xs font-bold'>{figure.title}</span>
                    <span className='text-[11px] leading-snug text-ls-muted'>{figure.text}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label={copy.closingLabel} className='grid grid-cols-1 gap-5 px-[18px] pb-16 md:grid-cols-2 md:px-16 md:pb-[88px]'>
        <div className='flex flex-col gap-5 rounded-[26px] border border-ls-rule p-7 md:p-8'>
          <h2 className='ls-kicker text-ls-accent'>{same.kicker}</h2>
          <ul className='flex flex-col gap-3 text-sm'>
            {same.items.map((item) => (
              <li key={item} className='flex gap-2'>
                <span aria-hidden='true' className='text-ls-faint'>
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-4 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-8'>
          <h2 className='ls-kicker text-ls-ink-speed'>{open.kicker}</h2>
          {open.body.map((paragraph) => (
            <p key={paragraph} className='ls-body text-ls-ink-mute'>
              {paragraph}
            </p>
          ))}
          <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-ink mt-auto self-start'>
            {open.cta}
          </a>
        </div>
      </section>
    </SiteLayout>
  </>
  );
};

export default MarketplacePage;
