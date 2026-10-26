import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";

/** Une liste numérotée (01 à 07) séparée par le blanc, sans filets ni cartes. */
const AccueilDifferences = () => {
  const { differences } = useCopy("accueil");
  return (
  <section aria-labelledby='accueil-differences' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
    <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[72px]'>
      <div className='flex flex-col gap-[18px] lg:sticky lg:top-10'>
        <span className='ls-kicker text-ls-accent'>{differences.kicker}</span>
        <h2 id='accueil-differences' className='ls-h ls-d2'>
          {differences.title}
        </h2>
        <p className='ls-body text-ls-muted'>{differences.body}</p>
        <p className='ls-body text-ls-muted'>{differences.body2}</p>
        <p className='ls-body font-semibold'>{differences.body3}</p>
      </div>
      <div className='flex flex-col'>
        {/* Sans filets : chaque point est numéroté et la séparation se fait
           par le blanc */}
        <dl className='flex flex-col gap-9 md:gap-11'>
          {differences.rows.map((row, index) => (
            <div
              key={row.title}
              className='grid grid-cols-1 gap-2 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10'
            >
              <dt className='flex flex-col gap-2'>
                <span aria-hidden='true' className='ls-num text-xs font-semibold text-ls-accent'>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className='ls-h ls-d3'>{row.title}</span>
              </dt>
              <dd className='ls-body text-ls-muted'>{row.text}</dd>
            </div>
          ))}
        </dl>
        <Link to={routes.tarifs} className='ls-link inline-flex w-fit items-center gap-1.5 pt-9 text-sm'>
          {differences.link}
          <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
        </Link>
      </div>
    </div>
  </section>
  );
};

export default AccueilDifferences;
