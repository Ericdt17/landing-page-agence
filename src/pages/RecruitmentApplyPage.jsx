import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import InkHero from "../components/site/InkHero";
import SiteLayout from "../components/site/SiteLayout";
import { recruitmentApplyPath, recruitmentOfferPath, routes } from "../constants/routes";
import { fill, useCopy } from "../i18n/useCopy";
import ApplicationForm from "../sections/recruitment/ApplicationForm";
import { getJobDetail, getJobQuestions } from "../services/recruitmentApi";
import { jobType, resolveJob } from "../services/jobs";

/** Colonne d'étapes de la candidature, comme dans la maquette. */
const StepRail = ({ steps, current, label, note }) => (
  <aside className='flex flex-col gap-6 lg:sticky lg:top-10'>
    <ol aria-label={label} className='flex flex-col gap-3.5'>
      {steps.map((step, index) => {
        const isCurrent = index + 1 === current;
        const done = index + 1 < current;
        return (
          <li key={step} aria-current={isCurrent ? "step" : undefined} className='flex items-center gap-3'>
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                isCurrent ? "bg-ls-text text-ls-bg" : done ? "bg-ls-ok-bg text-ls-ok" : "text-ls-faint"
              }`}
            >
              {index + 1}
            </span>
            <span className={`text-sm ${isCurrent ? "font-bold text-ls-text" : "text-ls-muted"}`}>{step}</span>
          </li>
        );
      })}
    </ol>
    <p className='ls-cap border-t border-ls-rule pt-5 text-ls-faint'>{note}</p>
  </aside>
);

const RecruitmentApplyPage = () => {
  const { jobId } = useParams();
  const { apply, offer, jobs: jobsCopy, status } = useCopy("recrutement");
  const [job, setJob] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadKind, setLoadKind] = useState(null);
  const [questionsError, setQuestionsError] = useState(false);
  const [step, setStep] = useState(1);

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
      setQuestionsError(false);
      setJob(null);
      setQuestions([]);
      const [jobResult, questionsResult] = await Promise.all([getJobDetail(jobId), getJobQuestions(jobId)]);
      if (cancelled) return;
      setLoading(false);
      if (!jobResult.success) {
        setLoadKind(jobResult.status === 404 ? "notfound" : "error");
        return;
      }
      if (!jobResult.data) {
        setLoadKind("notfound");
        return;
      }
      setJob(jobResult.data);
      if (!questionsResult.success) {
        setQuestionsError(true);
        return;
      }
      setQuestions(questionsResult.data);
    })();
    return () => {
      cancelled = true;
    };
  }, [jobId]);

  const meta = useMemo(() => (job ? resolveJob(job, jobsCopy) : null), [job, jobsCopy]);
  const hasQuestions = questions.length > 0;
  const steps = hasQuestions
    ? [apply.steps.profile, apply.steps.questions, apply.steps.sent]
    : [apply.steps.profile, apply.steps.sent];
  /* Sans questions, l'envoi est la deuxième étape */
  const currentStep = !hasQuestions && step === 3 ? 2 : step;
  const subtitle = meta ? [meta.location, jobsCopy.types[jobType(meta.typeKey)]].filter(Boolean).join(" · ") : "";

  return (
    <>
      <SEO
        title={`${apply.kicker} | ${meta?.title || offer.kicker}`}
        description={fill(apply.seoDescription, { title: meta?.title || offer.kicker })}
        canonical={recruitmentApplyPath(jobId ?? "")}
        noindex
      />
      <SiteLayout>
        <InkHero
          id='candidature-titre'
          kicker={apply.kicker}
          backTo={jobId ? recruitmentOfferPath(jobId) : routes.recrutement}
          backLabel={apply.backToOffer}
        >
          {loading ? (
            <div aria-busy='true' className='h-12 max-w-md animate-pulse rounded-lg bg-ls-ink-line' />
          ) : loadKind ? (
            <h1 id='candidature-titre' className='ls-h ls-d1 max-w-[18ch]'>
              {loadKind === "notfound" ? offer.notFound : offer.loadError}
            </h1>
          ) : (
            <>
              <h1 id='candidature-titre' className='ls-h ls-d1 max-w-[20ch]' lang='fr'>
                {meta?.title}
              </h1>
              {subtitle && <p className='ls-h text-lg text-ls-ink-fg'>{subtitle}</p>}
              <p className='ls-lede max-w-[56ch] text-ls-ink-mute'>{apply.lede}</p>
            </>
          )}
        </InkHero>

        <div className='px-[18px] pb-16 pt-12 md:px-16 md:pb-[88px] md:pt-[68px]'>
          {!loading && loadKind && (
            <Link to={routes.recrutement} className='ls-btn ls-btn-line'>
              {offer.backToOffers}
            </Link>
          )}

          {!loading && !loadKind && job && (
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-[64px]'>
              <StepRail steps={steps} current={currentStep} label={apply.stepsLabel} note={apply.note} />
              <section aria-labelledby='candidature-titre' className='w-full max-w-3xl'>
                {questionsError && (
                  <p className='mb-6 rounded-2xl border border-ls-bad bg-ls-fill px-4 py-3 text-sm text-ls-bad' role='alert'>
                    {status.questionsLoadError}
                  </p>
                )}
                <ApplicationForm
                  key={String(meta?.id ?? jobId ?? "")}
                  jobOffer={job}
                  questions={questions}
                  hideHeader
                  successHref={routes.recrutement}
                  onStepChange={setStep}
                  consent={
                    <p className='ls-cap text-ls-faint'>
                      {apply.consent}{" "}
                      <Link to={routes.confidentialite} className='font-semibold text-ls-accent underline underline-offset-2'>
                        {apply.privacyLink}
                      </Link>
                    </p>
                  }
                />
              </section>
            </div>
          )}
        </div>
      </SiteLayout>
    </>
  );
};

export default RecruitmentApplyPage;
