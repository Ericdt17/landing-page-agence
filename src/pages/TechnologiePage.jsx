import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import WhatsAppButton from "../components/site/WhatsAppButton";
import { routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";

const TechnologiePage = () => {
  const copy = useCopy("technologie");
  const { seo, hero, ecosystem, solutions, field, upcoming, start } = copy;

  return (
    <>
      <SEO title={seo.title} description={seo.description} canonical={routes.technologie} />
      <SiteLayout>
        <section aria-labelledby='technologie-titre' className='w-full px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px]'>
          <div className='flex w-full flex-col gap-6 md:gap-[26px]'>
            <h1 id='technologie-titre' className='ls-h ls-d1 w-full text-ls-primary'>
              {hero.title}
            </h1>
            <p className='ls-lede w-full text-ls-muted'>{hero.lede}</p>
            <p className='ls-body w-full text-ls-muted'>{hero.ownTech}</p>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid'>{hero.primary}</WhatsAppButton>
              <a href='#solutions' className='ls-btn ls-btn-lg ls-btn-line'>
                {hero.secondary}
              </a>
            </div>
          </div>
        </section>

        <Reveal>
          <section aria-labelledby='technologie-ecosysteme' className='w-full px-[18px] pb-16 md:px-16 md:pb-[84px]'>
            <div className='flex w-full flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
              <span className='ls-kicker text-ls-accent'>{ecosystem.kicker}</span>
              <h2 id='technologie-ecosysteme' className='ls-h ls-d2 w-full'>
                {ecosystem.title}
              </h2>
              <p className='ls-body w-full text-ls-muted'>{ecosystem.intro}</p>
            </div>
            <ul className='grid w-full grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8'>
              {ecosystem.roles.map((role) => (
                <li key={role.id} className='flex flex-col gap-4 border-t border-ls-rule pt-6'>
                  <h3 className='ls-h ls-d3'>{role.title}</h3>
                  <p className='text-[15px] font-semibold'>{role.subtitle}</p>
                  <p className='ls-body text-ls-muted'>{role.text}</p>
                  <p className='ls-cap font-semibold text-ls-text'>{role.closing}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section id='solutions' aria-labelledby='technologie-solutions' className='w-full scroll-mt-6 px-[18px] pb-16 md:px-16 md:pb-[84px]'>
            <div className='flex w-full flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
              <span className='ls-kicker text-ls-accent'>{solutions.kicker}</span>
              <h2 id='technologie-solutions' className='ls-h ls-d2 w-full'>
                {solutions.title}
              </h2>
            </div>
            <ol className='w-full'>
              {solutions.items.map((item) => (
                <li key={item.id} className='border-b border-ls-rule py-10 last:border-b-0 lg:py-12'>
                  <div className='flex w-full flex-col gap-3.5'>
                    <h3 className='ls-h ls-d3'>{item.title}</h3>
                    {item.lead && <p className='text-[15px] font-semibold'>{item.lead}</p>}
                    <p className='ls-body text-ls-muted'>{item.text}</p>
                    <p className='ls-cap font-semibold text-ls-text'>{item.closing}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby='technologie-terrain' className='w-full px-[18px] pb-16 md:px-16 md:pb-[84px]'>
            <div className='flex w-full flex-col gap-4 border-t border-ls-rule pt-11'>
              <span className='ls-kicker text-ls-accent'>{field.kicker}</span>
              <h2 id='technologie-terrain' className='ls-h ls-d2 w-full'>
                {field.title}
              </h2>
              <p className='ls-body w-full text-ls-muted'>{field.text}</p>
              <p className='ls-cap font-semibold text-ls-text'>{field.closing}</p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby='technologie-prochainement' className='w-full px-[18px] pb-16 md:px-16 md:pb-[84px]'>
            <div className='flex w-full flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
              <span className='ls-kicker text-ls-speed'>{upcoming.kicker}</span>
              <h2 id='technologie-prochainement' className='ls-h ls-d2 w-full'>
                {upcoming.title}
              </h2>
              <p className='ls-body w-full text-ls-muted'>{upcoming.intro}</p>
            </div>
            <ul className='grid w-full grid-cols-1 gap-5 md:grid-cols-2'>
              {upcoming.products.map((product) => (
                <li key={product.id} className='flex flex-col gap-4 rounded-[26px] border border-ls-rule p-7 md:p-9'>
                  <span className='ls-kicker text-ls-speed'>
                    {product.name}
                    {" "}
                    <sup className='ls-soon'>{upcoming.badge}</sup>
                  </span>
                  <h3 className='ls-h ls-d3'>{product.title}</h3>
                  <p className='ls-body text-ls-muted'>{product.text}</p>
                  <p className='ls-cap font-semibold text-ls-text'>{product.closing}</p>
                  <Link to={routes[product.to]} className='ls-link mt-auto inline-flex w-fit items-center gap-1.5 text-sm'>
                    {product.cta}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby='technologie-commencer' className='w-full bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[72px]'>
            <div className='grid w-full grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-[72px]'>
              <div className='flex w-full flex-col gap-[18px]'>
                <h2 id='technologie-commencer' className='ls-h ls-d2 w-full'>
                  {start.title}
                </h2>
                <p className='ls-body w-full text-ls-ink-mute'>{start.body}</p>
              </div>
              <div className='flex flex-col gap-3'>
                <WhatsAppButton className='ls-btn ls-btn-ink'>{start.whatsapp}</WhatsAppButton>
                <Link to={routes.tarifs} className='ls-btn ls-btn-ink-line'>
                  {start.offers}
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </SiteLayout>
    </>
  );
};

export default TechnologiePage;
