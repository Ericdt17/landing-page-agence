import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import InkHero from "../components/site/InkHero";
import SiteLayout from "../components/site/SiteLayout";
import { routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";
import JobsList from "../sections/recruitment/JobsList";
import { getOpenJobs } from "../services/recruitmentApi";

const RecruitmentPage = () => {
  const { seo, hero, valuesLabel, values, jobs: jobsCopy, process } = useCopy("recrutement");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listError, setListError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setListError(false);
      const result = await getOpenJobs();
      if (cancelled) return;
      setJobs(result.success ? result.data : []);
      setListError(!result.success);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <SEO title={seo.title} description={seo.description} canonical={routes.recrutement} />
      <SiteLayout>
        <InkHero id='recrutement-titre' kicker={hero.kicker} title={hero.title} lede={hero.lede}>
          <a href='#postes' className='ls-btn ls-btn-lg ls-btn-ink mt-2 self-start'>
            {hero.cta}
          </a>
        </InkHero>

        <section aria-label={valuesLabel} className='px-[18px] pt-12 md:px-16 md:pt-[68px]'>
          <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
            {values.map((value) => (
              <li key={value.title} className='flex flex-col gap-2.5 rounded-[26px] border border-ls-rule p-7'>
                <h2 className='ls-h text-[19px]'>{value.title}</h2>
                <p className='ls-cap text-ls-muted'>{value.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id='postes' aria-labelledby='recrutement-postes' className='scroll-mt-6 px-[18px] pt-14 md:px-16 md:pt-[76px]'>
          <div className='flex flex-col gap-4 pb-8'>
            <span className='ls-kicker text-ls-accent'>{jobsCopy.kicker}</span>
            <h2 id='recrutement-postes' className='ls-h ls-d2 max-w-[22ch]'>
              {jobsCopy.title}
            </h2>
            {jobsCopy.languageNote && <p className='ls-cap text-ls-faint'>{jobsCopy.languageNote}</p>}
          </div>
          <JobsList jobs={jobs} loading={loading} error={listError} />
        </section>

        <section aria-labelledby='recrutement-etapes' className='px-[18px] pb-16 pt-14 md:px-16 md:pb-[88px] md:pt-[76px]'>
          <div className='flex flex-col gap-4 border-t border-ls-rule pb-10 pt-11'>
            <span className='ls-kicker text-ls-accent'>{process.kicker}</span>
            <h2 id='recrutement-etapes' className='ls-h ls-d2 max-w-[22ch]'>
              {process.title}
            </h2>
          </div>
          <ol className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule sm:grid-cols-2 lg:grid-cols-3'>
            {process.steps.map((step, index) => (
              <li key={step.title} className='flex flex-col gap-2 bg-ls-bg py-7 sm:px-6'>
                <span className='ls-num text-sm text-ls-accent'>{String(index + 1).padStart(2, "0")}</span>
                <h3 className='ls-h text-[19px]'>{step.title}</h3>
                <p className='ls-cap text-ls-muted'>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </SiteLayout>
    </>
  );
};

export default RecruitmentPage;
