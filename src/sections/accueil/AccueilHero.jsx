import { accueilHero } from "../../constants/accueil";
import { siteWhatsappHref } from "../../constants/site";

const AccueilHero = () => (
  <section aria-labelledby='accueil-titre' className='px-[18px] pb-14 pt-11 md:px-16 md:pb-[72px] md:pt-[88px]'>
    <div className='flex flex-col gap-6 pt-1.5 md:gap-[30px]'>
      <span className='ls-kicker text-ls-accent'>{accueilHero.kicker}</span>
      <h1 id='accueil-titre' className='ls-h ls-d1 max-w-[15ch]'>
        {accueilHero.title}
      </h1>
      <p className='ls-lede ls-measure text-ls-muted'>{accueilHero.lede}</p>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid'>
          {accueilHero.primary}
        </a>
        <a href='#demarrer' className='ls-btn ls-btn-lg ls-btn-line'>
          {accueilHero.secondary}
        </a>
      </div>
      <p className='ls-num text-xs font-semibold tracking-[0.02em] text-ls-faint'>{accueilHero.reassurance}</p>
    </div>
  </section>
);

export default AccueilHero;
