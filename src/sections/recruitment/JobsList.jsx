import { BriefcaseIcon, MapPinIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {
    EMPTY_JOBS_MESSAGE,
    JOB_TYPE_LABELS,
    RECRUITMENT_JOB_UI,
    STATUS_LABELS,
    recruitmentOfferDetailPath,
} from "../../constants";

const resolveJob = (job) => ({
    id: job.id ?? job.uuid ?? job.slug ?? job._id ?? job.job_offer_id,
    title: job.title ?? job.name ?? "Poste",
    location: job.location ?? job.city ?? job.zone ?? "Non précisé",
    positions:
        job.open_positions ??
        job.positions_count ??
        job.headcount ??
        job.slots ??
        null,
    typeKey: String(
        job.job_type ?? job.role_type ?? job.type ?? "",
    ).toLowerCase(),
});

const JobSkeleton = () => (
    <li className='flex flex-col rounded-3xl border border-ls-rule bg-ls-surface p-6 '>
        <div className='h-6 w-24 animate-pulse rounded-md bg-ls-fill' />
        <div className='mt-4 h-7 max-w-xs animate-pulse rounded-md bg-ls-fill' />
        <div className='mt-4 h-4 w-full animate-pulse rounded bg-ls-fill' />
        <div className='mt-2 h-4 w-2/3 animate-pulse rounded bg-ls-fill' />
        <div className='mt-6 h-12 w-full animate-pulse rounded-full bg-ls-fill' />
    </li>
);

const JobsList = ({ jobs, loading, error }) => {
    if (loading) {
        return (
            <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                <JobSkeleton />
                <JobSkeleton />
                <JobSkeleton />
            </ul>
        );
    }

    if (error) {
        return (
            <p className='mt-10 rounded-2xl border border-ls-rule bg-ls-fill px-5 py-4 text-center font-montserrat text-sm text-ls-muted'>
                {STATUS_LABELS.jobsLoadError}
            </p>
        );
    }

    if (!jobs.length) {
        return (
            <div className='mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-ls-rule bg-ls-fill px-6 py-14 text-center'>
                <BriefcaseIcon
                    className='h-14 w-14 text-ls-accent'
                    aria-hidden='true'
                />
                <p className='mt-6 max-w-md font-montserrat text-base leading-relaxed text-ls-muted'>
                    {EMPTY_JOBS_MESSAGE}
                </p>
            </div>
        );
    }

    return (
        <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
            {jobs.map((raw) => {
                const job = resolveJob(raw);
                const badgeLabel =
                    job.typeKey.includes("agent") || job.typeKey === "agent"
                        ? JOB_TYPE_LABELS.agent
                        : job.typeKey.includes("livreur") ||
                            job.typeKey === "livreur"
                          ? JOB_TYPE_LABELS.livreur
                          : JOB_TYPE_LABELS.default;
                const isAgent =
                    job.typeKey.includes("agent") || job.typeKey === "agent";
                const badgeClass = isAgent
                    ? "bg-ls-fill text-ls-accent"
                    : "bg-ls-select text-ls-accent";

                return (
                    <li
                        key={String(job.id)}
                        className='flex flex-col rounded-3xl border border-ls-rule bg-ls-surface px-6 py-7 '
                    >
                        <span
                            className={`inline-flex w-fit rounded-full px-3 py-1 font-montserrat text-xs font-bold ${badgeClass}`}
                        >
                            {badgeLabel}
                        </span>
                        <h3 className='mt-4 font-montserrat text-xl font-bold text-ls-text'>
                            {job.title}
                        </h3>
                        <div className='mt-4 flex flex-col gap-2 font-montserrat text-sm text-ls-muted'>
                            <span className='inline-flex items-center gap-2'>
                                <MapPinIcon
                                    className='h-5 w-5 shrink-0 text-ls-accent'
                                    aria-hidden='true'
                                />
                                {job.location}
                            </span>
                            {job.positions != null && (
                                <span className='inline-flex items-center gap-2'>
                                    <UserGroupIcon
                                        className='h-5 w-5 shrink-0 text-ls-accent'
                                        aria-hidden='true'
                                    />
                                    {job.positions} poste
                                    {job.positions > 1 ? "s" : ""} disponible
                                    {job.positions > 1 ? "s" : ""}
                                </span>
                            )}
                        </div>
                        <Link
                            to={recruitmentOfferDetailPath(job.id)}
                            className='mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-ls-text px-6 font-montserrat text-base font-bold text-ls-bg transition-colors hover:bg-ls-muted sm:w-auto sm:self-start'
                        >
                            {RECRUITMENT_JOB_UI.viewDetail}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default JobsList;
