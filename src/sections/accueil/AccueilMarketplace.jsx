import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";
import WhatsAppButton from "../../components/site/WhatsAppButton";

/** Le seul moment sombre de la page. */
const AccueilMarketplace = () => {
  const { marketplace } = useCopy("accueil");
  return (
  <section aria-labelledby='accueil-marketplace' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[76px]'>
    <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
      <div className='flex flex-col gap-5'>
        <span className='ls-kicker text-ls-ink-speed'>{marketplace.kicker}</span>
        <h2 id='accueil-marketplace' className='ls-h ls-d2 max-w-[24ch]'>
          {marketplace.title}
        </h2>
        <p className='ls-body max-w-[54ch] text-ls-ink-mute'>{marketplace.body}</p>
      </div>
      <div className='flex flex-col gap-2.5'>
        <Link to={routes.marketplace} className='ls-btn ls-btn-ink'>
          {marketplace.link}
        </Link>
        <WhatsAppButton className='ls-btn ls-btn-ink-line'>
          {marketplace.cta}
        </WhatsAppButton>
      </div>
    </div>
  </section>
  );
};

export default AccueilMarketplace;
