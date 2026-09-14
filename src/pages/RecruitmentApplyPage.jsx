import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
        ? "bg-ls-fill text-ls-accent"
        : "bg-ls-select text-ls-accent";

    const subtitle =
        meta &&
        [meta.location, badgeLabel].filter(Boolean).join(" · ");

    const offerTitle = meta?.title || "Offre d'emploi";

    const seoDescription = (() => {
        const location = meta?.location;
        const bits = [
            `Candidature : ${offerTitle}`,
            location && location !== "Non précisé" ? location : null,
            badgeLabel || null,
            "Postulez en ligne chez LivSight à Yaoundé.",
        ].filter(Boolean);
        const full = bits.join(" · ");
        return full.length > 160 ? `${full.slice(0, 157).trim()}…` : full;
    })();

    return (
        <>
            <SEO
                title={`${RECRUITMENT_MODAL_TITLE} | ${offerTitle}`}
                description={seoDescription}
                canonical={`/entreprise/recrutement/offre/${jobId ?? ""}/postuler`}
            />
            <SiteLayout>
                <PageHeader backTo={'..'} backLabel={RECRUITMENT_JOB_UI.backToOffer}>
                {loading ? (
                    <>
                        <div className='mt-6 h-9 max-w-md animate-pulse rounded-lg bg-ls-fill' />
                        <div className='mt-3 h-4 w-48 animate-pulse rounded bg-ls-fill' />
                    </>
                ) : loadKind ? (
                    <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-ls-text sm:text-4xl'>
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
                        <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-ls-text sm:text-4xl'>
                            {RECRUITMENT_MODAL_TITLE}
                        </h1>
                        <p className='mt-2 font-montserrat text-sm font-medium text-ls-text'>
                            {meta.title}
                            {subtitle ? ` · ${subtitle}` : ""}
                        </p>
                    </>
                ) : null}
                </PageHeader>

                <div className='px-[18px] md:px-16 pb-16'>
                    {loading && (
                        <div className='mt-10 space-y-3'>
                            <div className='h-4 w-full animate-pulse rounded bg-ls-fill' />
                            <div className='h-4 w-full animate-pulse rounded bg-ls-fill' />
                            <div className='h-4 w-2/3 animate-pulse rounded bg-ls-fill' />
                        </div>
                    )}

                    {!loading && loadKind && (
                        <p className='mt-10 font-montserrat text-base text-ls-muted'>
                            <Link
                                to={entrepriseRecrutementPath}
                                className='inline-flex items-center gap-1.5 font-semibold text-ls-accent underline-offset-2 hover:underline'
                            >
                                <ArrowLeftIcon
                                    className='h-4 w-4 shrink-0'
                                    aria-hidden='true'
                                />
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
                                    className='mb-6 rounded-2xl border border-ls-bad bg-ls-fill px-4 py-3 font-montserrat text-sm text-ls-bad'
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
            </SiteLayout>
        </>
    );
};

export default RecruitmentApplyPage;
