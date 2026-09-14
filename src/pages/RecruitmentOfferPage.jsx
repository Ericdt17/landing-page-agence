import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import InkHero from "../components/site/InkHero";
import SiteLayout from "../components/site/SiteLayout";
import { recruitmentApplyPath, recruitmentOfferPath, routes } from "../constants/routes";
import { fill, useCopy } from "../i18n/useCopy";
import { getJobDetail } from "../services/recruitmentApi";
import { jobDescription, jobType, resolveJob } from "../services/jobs";

const RecruitmentOfferPage = () => {
  const { jobId } = useParams();
  const { offer, jobs: jobsCopy } = useCopy("recrutement");
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadKind, setLoadKind] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!jobId) {
        setLoading(false);
        setLoadKind("notfound");
        return;
      }
      setLoading(true);
      setLoadKind(null);
      setJob(null);
      const result = await getJobDetail(jobId);
      if (cancelled) return;
      setLoading(false);
      if (!result.success) {
        setLoadKind(result.status === 404 ? "notfound" : "error");
        return;
      }
      if (!result.data) {
        setLoadKind("notfound");
        return;
      }
      setJob(result.data);
    })();
    return () => {
      cancelled = true;
    };
  }, [jobId]);

  const meta = useMemo(() => (job ? resolveJob(job, jobsCopy) : null), [job, jobsCopy]);
  const description = jobDescription(job);
  const subtitle = meta
    ? [
        meta.location,
        jobsCopy.types[jobType(meta.typeKey)],
        meta.positions != null
          ? fill(meta.positions > 1 ? jobsCopy.positionsOther : jobsCopy.positionsOne, { count: meta.positions })
          : null,
      ]
        .filter(Boolean)
        .join(" · ")
    : "";

  const seoTitle = meta?.title || offer.kicker;
  const seoDescription = (() => {
    const full = `${[meta?.title, meta?.hasLocation ? meta.location : null].filter(Boolean).join(", ")}. ${
      description ? description.replace(/\s+/g, " ") : offer.seoFallback
    }`;
    return full.length > 160 ? `${full.slice(0, 157).trim()}…` : full;
  })();

  const title = loading ? null : loadKind ? (loadKind === "notfound" ? offer.notFound : offer.loadError) : meta?.title;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} canonical={recruitmentOfferPath(jobId ?? "")} noindex={Boolean(loadKind)} />
      <SiteLayout>
        <InkHero id='offre-titre' kicker={offer.kicker} backTo={routes.recrutement} backLabel={offer.backToOffers}>
          {loading ? (
            <div aria-busy='true' className='flex flex-col gap-3'>
              <div className='h-12 max-w-md animate-pulse rounded-lg bg-ls-ink-line' />
              <div className='h-4 w-48 animate-pulse rounded bg-ls-ink-line' />
            </div>
          ) : (
            <>
              <h1 id='offre-titre' className='ls-h ls-d1 max-w-[18ch]' lang={loadKind ? undefined : "fr"}>
                {title}
              </h1>
              {subtitle && <p className='ls-lede text-ls-ink-mute'>{subtitle}</p>}
            </>
          )}
        </InkHero>

        <div className='px-[18px] pb-16 pt-12 md:px-16 md:pb-[88px] md:pt-[68px]'>
          {!loading && loadKind && (
            <Link to={routes.recrutement} className='ls-btn ls-btn-line'>
              {offer.backToOffers}
            </Link>
          )}

          {!loading && !loadKind && meta && (
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-[72px]'>
              <section aria-labelledby='offre-description' className='flex flex-col gap-4'>
                <h2 id='offre-description' className='ls-kicker text-ls-accent'>
                  {offer.descriptionHeading}
                </h2>
                <div className='ls-body max-w-[68ch] whitespace-pre-wrap text-ls-muted' lang={description ? "fr" : undefined}>
                  {description || offer.noDescription}
                </div>
              </section>
              <div className='flex flex-col gap-3 self-start rounded-[26px] border border-ls-rule p-7'>
                <p className='ls-h text-[19px]' lang='fr'>
                  {meta.title}
                </p>
                {subtitle && <p className='ls-cap text-ls-faint'>{subtitle}</p>}
                <Link to={recruitmentApplyPath(jobId)} className='ls-btn ls-btn-lg ls-btn-solid mt-2'>
                  {offer.apply}
                </Link>
              </div>
            </div>
          )}
        </div>
      </SiteLayout>
    </>
  );
};

export default RecruitmentOfferPage;
