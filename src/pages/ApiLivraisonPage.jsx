import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";
import WhatsAppButton from "../components/site/WhatsAppButton";

const ApiLivraisonPage = () => {
  const { seo, hero, steps, audience, contact } = useCopy("apiLivraison");
  return (
  <>
    <SEO title={seo.title} description={seo.description} canonical={routes.apiLivraison} />
    <SiteLayout>
      <section aria-labelledby='api-titre' className='px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px]'>
        <div className='flex max-w-[900px] flex-col gap-6 md:gap-[26px]'>
          <div className='flex items-center gap-2.5'>
            <span className='rounded-full border border-ls-speed px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-ls-speed'>
              {hero.badge}
            </span>
            <span className='ls-kicker text-ls-accent'>{hero.kicker}</span>
          </div>
          <h1 id='api-titre' className='ls-h ls-d1'>
            {hero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{hero.lede}</p>
          <div className='flex flex-col items-start gap-3'>
            <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid max-sm:w-full'>
              {hero.cta}
            </WhatsAppButton>
            <p className='ls-cap text-ls-muted'>{hero.note}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby='api-etapes' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='flex flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
          <span className='ls-kicker text-ls-accent'>{steps.kicker}</span>
          <h2 id='api-etapes' className='ls-h ls-d2 max-w-[22ch]'>
            {steps.title}
          </h2>
        </div>
        <ol className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule md:grid-cols-3'>
          {steps.steps.map((step) => (
            <li key={step.number} className='flex flex-col gap-3 bg-ls-bg py-7 md:px-8 md:first:pl-0 md:last:pr-0'>
              <span className='ls-num text-sm text-ls-accent'>{step.number}</span>
              <h3 className='ls-h ls-d3'>{step.title}</h3>
              <p className='ls-cap text-ls-muted'>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby='api-public' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='grid grid-cols-1 items-start gap-8 border-t border-ls-rule pt-11 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[72px]'>
          <h2 id='api-public' className='ls-kicker text-ls-accent'>
            {audience.kicker}
          </h2>
          <dl className='flex flex-col border-t border-ls-rule'>
            {audience.rows.map((row) => (
              <div
                key={row.title}
                className='grid grid-cols-1 gap-2 border-b border-ls-rule py-6 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10 md:py-[30px]'
              >
                <dt className='ls-h ls-d3'>{row.title}</dt>
                <dd className='ls-body text-ls-muted'>{row.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby='api-contact' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[72px]'>
        <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
          <div className='flex flex-col gap-[18px]'>
            <h2 id='api-contact' className='ls-h ls-d2 max-w-[24ch]'>
              {contact.title}
            </h2>
            <p className='ls-body max-w-[52ch] text-ls-ink-mute'>{contact.body}</p>
          </div>
          <WhatsAppButton className='ls-btn ls-btn-ink'>
            {contact.cta}
          </WhatsAppButton>
        </div>
      </section>
    </SiteLayout>
  </>
  );
};

export default ApiLivraisonPage;
