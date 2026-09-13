import { Link } from "react-router-dom";
import { links, routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";

const AccueilHero = () => {
  const { hero } = useCopy("accueil");
  return (
  <section aria-labelledby='accueil-titre' className='px-[18px] pb-14 pt-11 md:px-16 md:pb-[72px] md:pt-[88px]'>
    <div className='flex flex-col gap-6 pt-1.5 md:gap-[30px]'>
      <span className='ls-kicker text-ls-accent'>{hero.kicker}</span>
      <h1 id='accueil-titre' className='ls-h ls-d1 max-w-[15ch]'>
        {hero.title}
      </h1>
      <p className='ls-lede ls-measure text-ls-muted'>{hero.lede}</p>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid'>
          {hero.primary}
        </a>
        <Link to={routes.tarifs} className='ls-btn ls-btn-lg ls-btn-line'>
          {hero.secondary}
        </Link>
      </div>
      <p className='ls-num text-xs font-semibold tracking-[0.02em] text-ls-faint'>{hero.reassurance}</p>
    </div>
  </section>
  );
};

export default AccueilHero;
