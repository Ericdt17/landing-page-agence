import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { plateformeCoursesParticuliersPath } from "../constants/coursesParticuliers";
import {
  livraisonAdresse,
  livraisonHero,
  livraisonPath,
  livraisonSeo,
  livraisonServices,
  tarifsPath,
} from "../constants/offre";
import { siteWhatsappHref } from "../constants/site";
import { LandingPublicProvider } from "../context/LandingPublicContext";
import ReversementFormule from "../sections/offre/ReversementFormule";

const LivraisonStockagePage = () => (
  <LandingPublicProvider>
    <SEO title={livraisonSeo.title} description={livraisonSeo.description} canonical={livraisonPath} />
    <SiteLayout>
      <section
        aria-labelledby='livraison-titre'
        className='grid grid-cols-1 items-end gap-10 px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[72px]'
      >
        <div className='flex flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{livraisonHero.kicker}</span>
          <h1 id='livraison-titre' className='ls-h ls-d1 max-w-[17ch]'>
            {livraisonHero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{livraisonHero.lede}</p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid'>
              {livraisonHero.primary}
            </a>
            <Link to={tarifsPath} className='ls-btn ls-btn-lg ls-btn-line'>
              {livraisonHero.secondary}
            </Link>
          </div>
        </div>
        <dl className='flex flex-col border-t border-ls-rule'>
          {livraisonHero.facts.map((fact) => (
            <div key={fact.label} className='flex items-baseline justify-between gap-6 border-b border-ls-rule py-4'>
              <dt className='ls-cap text-ls-muted'>{fact.label}</dt>
              <dd className='ls-num text-[13px] font-semibold'>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby='livraison-services' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='grid grid-cols-1 items-start gap-8 border-t border-ls-rule pt-11 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[72px]'>
          <div className='flex flex-col gap-4'>
            <span className='ls-kicker text-ls-accent'>{livraisonServices.kicker}</span>
            <h2 id='livraison-services' className='ls-h ls-d2'>
              {livraisonServices.title}
            </h2>
          </div>
          <dl className='flex flex-col border-t border-ls-rule'>
            {livraisonServices.rows.map((row) => (
              <div
                key={row.title}
                className='grid grid-cols-1 gap-2 border-b border-ls-rule py-6 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10 md:py-[30px]'
              >
                <dt className='ls-h ls-d3'>{row.title}</dt>
                <dd className='ls-body flex flex-col items-start gap-2 text-ls-muted'>
                  {row.text}
                  {row.link && (
                    <Link to={plateformeCoursesParticuliersPath} className='ls-link inline-flex items-center gap-1.5 text-sm'>
                      {row.link}
                      <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
                    </Link>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ReversementFormule id='livraison-reversement' />

      <section aria-label='Horaires et adresse' className='px-[18px] pb-16 md:px-16 md:pb-[88px]'>
        <div className='flex flex-col gap-4 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-9'>
          <span className='ls-kicker text-ls-ink-speed'>{livraisonAdresse.kicker}</span>
          <h2 className='ls-h ls-d3'>{livraisonAdresse.title}</h2>
          <ul className='flex flex-col gap-2 text-sm text-ls-ink-mute'>
            {livraisonAdresse.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a
            href={siteWhatsappHref}
            target='_blank'
            rel='noopener noreferrer'
            className='ls-btn ls-btn-ink mt-auto self-start'
          >
            {livraisonAdresse.cta}
          </a>
        </div>
      </section>
    </SiteLayout>
  </LandingPublicProvider>
);

export default LivraisonStockagePage;
