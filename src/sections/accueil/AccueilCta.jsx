import { Link } from "react-router-dom";
import { links, routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";

const AccueilCta = () => {
  const { finalCta } = useCopy("accueil");
  return (
  <section aria-labelledby='accueil-cta' className='px-[18px] py-14 md:px-16 md:py-[84px]'>
    <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12'>
      <h2 id='accueil-cta' className='ls-h ls-d2 max-w-[24ch]'>
        {finalCta.title}
      </h2>
      <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center'>
        <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid'>
          {finalCta.primary}
        </a>
        <Link to={routes.contact} className='ls-btn ls-btn-lg ls-btn-line'>
          {finalCta.secondary}
        </Link>
      </div>
    </div>
  </section>
  );
};

export default AccueilCta;
