import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { links, recruitmentOfferPath } from "../../constants/routes";
import { fill, useCopy } from "../../i18n/useCopy";
import { jobType, resolveJob } from "../../services/jobs";

const JobSkeleton = () => (
  <li aria-hidden='true' className='flex flex-col gap-3 rounded-[26px] border border-ls-rule bg-ls-surface p-7'>
    <div className='h-6 w-40 animate-pulse rounded-md bg-ls-fill' />
    <div className='h-4 w-56 animate-pulse rounded bg-ls-fill' />
  </li>
);

/** Postes ouverts lus depuis l'API de recrutement : chargement, erreur, vide ou liste. */
const JobsList = ({ jobs, loading, error }) => {
  const { jobs: copy } = useCopy("recrutement");

  if (loading) {
    return (
      <ul className='flex flex-col gap-4' aria-busy='true'>
        <JobSkeleton />
        <JobSkeleton />
      </ul>
    );
  }

  if (error || !jobs.length) {
    return (
      <div className='flex flex-col items-start gap-5 rounded-[26px] border border-ls-rule p-7 md:p-9'>
        <p className='ls-body max-w-[60ch] text-ls-muted'>{error ? copy.loadError : copy.empty}</p>
        <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-line'>
          {copy.emptyCta}
        </a>
      </div>
    );
  }

  return (
    <ul className='flex flex-col gap-4'>
      {jobs.map((raw) => {
        const job = resolveJob(raw, copy);
        const meta = [
          job.location,
          copy.types[jobType(job.typeKey)],
          job.positions != null
            ? fill(job.positions > 1 ? copy.positionsOther : copy.positionsOne, { count: job.positions })
            : null,
        ].filter(Boolean);

        return (
          <li
            key={String(job.id)}
            className='flex flex-col gap-5 rounded-[26px] border border-ls-rule bg-ls-surface p-7 md:flex-row md:items-center md:justify-between md:p-8'
          >
            <div className='flex flex-col gap-2'>
              <div className='flex flex-wrap items-center gap-3'>
                <h3 className='ls-h ls-d3' lang='fr'>
                  {job.title}
                </h3>
                <span className='rounded-full bg-ls-ok-bg px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-ls-ok'>
                  {copy.open}
                </span>
              </div>
              <p className='ls-cap text-ls-faint'>{meta.join(" · ")}</p>
            </div>
            <Link
              to={recruitmentOfferPath(job.id)}
              className='ls-btn ls-btn-solid shrink-0 gap-1.5 self-start md:self-auto'
              aria-label={fill(copy.viewDetailLabel, { title: job.title })}
            >
              {copy.viewDetail}
              <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default JobsList;
