import { Link } from "react-router-dom";
import { accueilFinalCta } from "../../constants/accueil";
import { entrepriseContactPath } from "../../constants/contact";
import { siteWhatsappHref } from "../../constants/site";

const AccueilCta = () => (
  <section aria-labelledby='accueil-cta' className='px-[18px] py-14 md:px-16 md:py-[84px]'>
    <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12'>
      <h2 id='accueil-cta' className='ls-h ls-d2 max-w-[24ch]'>
        {accueilFinalCta.title}
      </h2>
      <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center'>
        <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid'>
          {accueilFinalCta.primary}
        </a>
        <Link to={entrepriseContactPath} className='ls-btn ls-btn-lg ls-btn-line'>
          {accueilFinalCta.secondary}
        </Link>
      </div>
    </div>
  </section>
);

export default AccueilCta;
