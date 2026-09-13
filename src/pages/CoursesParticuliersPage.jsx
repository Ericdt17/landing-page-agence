import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { links, routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";

const CoursesParticuliersPage = () => {
  const { seo, hero, highlightsLabel, highlights, services, steps, closing } = useCopy("courses");

  return (
    <>
      <SEO title={seo.title} description={seo.description} canonical={routes.courses} />
      <SiteLayout>
        <section aria-labelledby='courses-titre' className='px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px]'>
          <div className='flex max-w-[900px] flex-col gap-6 md:gap-[26px]'>
            <span className='ls-kicker text-ls-accent'>{hero.kicker}</span>
            <h1 id='courses-titre' className='ls-h ls-d1'>
              {hero.title}
            </h1>
            <p className='ls-lede ls-measure text-ls-muted'>{hero.lede}</p>
            <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid self-start max-sm:w-full'>
              {hero.cta}
            </a>
          </div>
        </section>

        <section aria-label={highlightsLabel} className='px-[18px] pb-16 md:px-16 md:pb-[76px]'>
          <dl className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule sm:grid-cols-3'>
            {highlights.map((item) => (
              <div key={item.value} className='flex flex-col-reverse gap-2 bg-ls-bg py-7 sm:px-6 sm:first:pl-0'>
                <dt className='ls-cap text-ls-muted'>{item.label}</dt>
                <dd className='ls-num text-[28px] leading-none'>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby='courses-services' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
          <div className='grid grid-cols-1 items-start gap-8 border-t border-ls-rule pt-11 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[72px]'>
            <div className='flex flex-col gap-4'>
              <span className='ls-kicker text-ls-accent'>{services.kicker}</span>
              <h2 id='courses-services' className='ls-h ls-d2'>
                {services.title}
              </h2>
            </div>
            <dl className='flex flex-col border-t border-ls-rule'>
              {services.rows.map((row) => (
                <div
                  key={row.title}
                  className='grid grid-cols-1 gap-2 border-b border-ls-rule py-6 md:grid-cols-[240px_minmax(0,1fr)] md:gap-10'
                >
                  <dt className='ls-h text-[19px]'>{row.title}</dt>
                  <dd className='ls-body text-ls-muted'>{row.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby='courses-etapes' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
          <div className='flex flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
            <span className='ls-kicker text-ls-accent'>{steps.kicker}</span>
            <h2 id='courses-etapes' className='ls-h ls-d2 max-w-[22ch]'>
              {steps.title}
            </h2>
          </div>
          <ol className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule md:grid-cols-3'>
            {steps.items.map((step) => (
              <li key={step.number} className='flex flex-col gap-3 bg-ls-bg py-7 md:px-8 md:first:pl-0 md:last:pr-0'>
                <span className='ls-num text-sm text-ls-accent'>{step.number}</span>
                <h3 className='ls-h ls-d3'>{step.title}</h3>
                <p className='ls-cap text-ls-muted'>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby='courses-fin' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[72px]'>
          <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
            <div className='flex flex-col gap-[18px]'>
              <h2 id='courses-fin' className='ls-h ls-d2 max-w-[24ch]'>
                {closing.title}
              </h2>
              <p className='ls-body max-w-[52ch] text-ls-ink-mute'>{closing.body}</p>
            </div>
            <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-ink'>
              {closing.cta}
            </a>
          </div>
        </section>
      </SiteLayout>
    </>
  );
};

export default CoursesParticuliersPage;
