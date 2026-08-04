import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SEO } from "../components";
import { Footer } from "../sections";
import ApplicationForm from "../sections/recruitment/ApplicationForm";
import {
    JOB_TYPE_LABELS,
    RECRUITMENT_JOB_UI,
    RECRUITMENT_MODAL_TITLE,
    STATUS_LABELS,
    entrepriseRecrutementPath,
} from "../constants";
import { getJobDetail, getJobQuestions } from "../services/recruitmentApi";

const resolveJob = (job) => ({
    id: job.id ?? job.uuid ?? job.slug ?? job._id ?? job.job_offer_id,
    title: job.title ?? job.name ?? "Poste",
    location: job.location ?? job.city ?? job.zone ?? "Non précisé",
    typeKey: String(
        job.job_type ?? job.role_type ?? job.type ?? "",
    ).toLowerCase(),
});

const RecruitmentApplyPage = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadKind, setLoadKind] = useState(null);
    const [questionsFetchError, setQuestionsFetchError] = useState("");

    useEffect(() => {
        let cancelled = false;
        (async () => {
            if (jobId == null || jobId === "") {
                setJob(null);
                setQuestions([]);
                setLoading(false);
                setLoadKind("notfound");
                return;
            }
            setLoading(true);
            setLoadKind(null);
            setQuestionsFetchError("");
            setJob(null);
            setQuestions([]);

            const [jobResult, questionsResult] = await Promise.all([
                getJobDetail(jobId),
                getJobQuestions(jobId),
            ]);

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
                setQuestionsFetchError(STATUS_LABELS.questionsLoadError);
                return;
            }
            setQuestions(questionsResult.data);
        })();
        return () => {
            cancelled = true;
        };
    }, [jobId]);

    const meta = useMemo(() => (job ? resolveJob(job) : null), [job]);

    const badgeLabel = useMemo(() => {
        if (!meta) return JOB_TYPE_LABELS.default;
        if (meta.typeKey.includes("agent") || meta.typeKey === "agent")
            return JOB_TYPE_LABELS.agent;
        if (meta.typeKey.includes("livreur") || meta.typeKey === "livreur")
            return JOB_TYPE_LABELS.livreur;
        return JOB_TYPE_LABELS.default;
    }, [meta]);

    const isAgent =
        meta &&
        (meta.typeKey.includes("agent") || meta.typeKey === "agent");
    const badgeClass = isAgent
        ? "bg-primary text-brand-blue"
        : "bg-pale-blue text-brand-blue";

    const subtitle =
        meta &&
        [meta.location, badgeLabel].filter(Boolean).join(" · ");

    const offerTitle = meta?.title || "Offre d'emploi";

    return (
        <>
            <SEO
                title={`${RECRUITMENT_MODAL_TITLE} | ${offerTitle}`}
                canonical={`/entreprise/recrutement/offre/${jobId ?? ""}/postuler`}
            />
            <main className='min-h-[60vh] bg-white'>
                <div className='bg-brand-blue'>
                    <div className='max-container padding-x py-12 sm:py-16'>
                        <Link
                            to='..'
                            className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
                        >
                            {RECRUITMENT_JOB_UI.backToOffer}
                        </Link>
                        {loading ? (
                            <>
                                <div className='mt-6 h-9 max-w-md animate-pulse rounded-lg bg-white/20' />
                                <div className='mt-3 h-4 w-48 animate-pulse rounded bg-white/15' />
                            </>
                        ) : loadKind ? (
                            <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                                {loadKind === "notfound"
                                    ? STATUS_LABELS.jobNotFound
                                    : STATUS_LABELS.jobDetailLoadError}
                            </h1>
                        ) : meta ? (
                            <>
                                <span
                                    className={`mt-6 inline-flex w-fit rounded-full px-3 py-1 font-montserrat text-xs font-bold ${badgeClass}`}
                                >
                                    {badgeLabel}
                                </span>
                                <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                                    {RECRUITMENT_MODAL_TITLE}
                                </h1>
                                <p className='mt-2 font-montserrat text-sm text-white/60'>
                                    {meta.title}
                                    {subtitle ? ` · ${subtitle}` : ""}
                                </p>
                            </>
                        ) : null}
                    </div>
                </div>

                <div className='max-container padding-x pb-16'>
                    {loading && (
                        <div className='mt-10 space-y-3'>
                            <div className='h-4 w-full animate-pulse rounded bg-gray-100' />
                            <div className='h-4 w-full animate-pulse rounded bg-gray-100' />
                            <div className='h-4 w-2/3 animate-pulse rounded bg-gray-100' />
                        </div>
                    )}

                    {!loading && loadKind && (
                        <p className='mt-10 font-montserrat text-base text-gray-600'>
                            <Link
                                to={entrepriseRecrutementPath}
                                className='font-semibold text-brand-blue underline-offset-2 hover:underline'
                            >
                                {RECRUITMENT_JOB_UI.backToOffers}
                            </Link>
                        </p>
                    )}

                    {!loading && !loadKind && job && (
                        <section
                            className='mx-auto mt-10 w-full max-w-2xl'
                            aria-label={RECRUITMENT_MODAL_TITLE}
                        >
                            {questionsFetchError && (
                                <p
                                    className='mb-6 rounded-2xl border border-coral-red/30 bg-red-50/80 px-4 py-3 font-montserrat text-sm text-coral-red'
                                    role='alert'
                                >
                                    {questionsFetchError}
                                </p>
                            )}
                            <ApplicationForm
                                key={String(meta?.id ?? jobId ?? "")}
                                jobOffer={job}
                                questions={questions}
                                hideHeader
                                successHref={entrepriseRecrutementPath}
                            />
                        </section>
                    )}
                </div>
            </main>

            <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
                <div
                    className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
                    aria-hidden='true'
                />
                <div className='relative'>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default RecruitmentApplyPage;
