import { Link } from "react-router-dom";
import { accueilMarketplace } from "../../constants/accueil";
import { marketplacePath } from "../../constants/marketplace";
import { siteWhatsappHref } from "../../constants/site";

/** Le seul moment sombre de la page. */
const AccueilMarketplace = () => (
  <section aria-labelledby='accueil-marketplace' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[76px]'>
    <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
      <div className='flex flex-col gap-5'>
        <span className='ls-kicker text-ls-ink-speed'>{accueilMarketplace.kicker}</span>
        <h2 id='accueil-marketplace' className='ls-h ls-d2 max-w-[24ch]'>
          {accueilMarketplace.title}
        </h2>
        <p className='ls-body max-w-[54ch] text-ls-ink-mute'>{accueilMarketplace.body}</p>
      </div>
      <div className='flex flex-col gap-2.5'>
        <Link to={marketplacePath} className='ls-btn ls-btn-ink'>
          {accueilMarketplace.link}
        </Link>
        <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-ink-line'>
          {accueilMarketplace.cta}
        </a>
      </div>
    </div>
  </section>
);

export default AccueilMarketplace;
