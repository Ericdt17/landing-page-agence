import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";
import WhatsAppButton from "../../components/site/WhatsAppButton";
import AccueilHeroMap from "./AccueilHeroMap";

/**
 * Sur mobile, le héros occupe tout le premier écran (100svh) et remonte de
 * 68 px sous la barre de navigation transparente : la carte dessinée couvre
 * l'écran entier derrière le texte, ancré en bas ; un dégradé vers --ls-bg
 * garde le texte lisible. Sur bureau, texte à gauche et carte paysage à droite.
 */
const AccueilHero = () => {
  const { hero } = useCopy("accueil");
  return (
  <section
    aria-labelledby='accueil-titre'
    className='relative -mt-[68px] flex min-h-[100svh] flex-col px-[18px] pb-10 pt-[84px] md:mt-0 md:grid md:min-h-0 md:grid-cols-[minmax(0,1fr)_400px] md:items-center md:gap-[72px] md:px-16 md:pb-[72px] md:pt-12 lg:grid-cols-[minmax(0,1fr)_460px]'
  >
    <div aria-hidden='true' className='absolute inset-0 md:hidden'>
      <AccueilHeroMap portrait />
      <div className='absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-ls-bg to-transparent' />
    </div>
    <div className='relative hidden md:order-2 md:block md:h-[460px]'>
      <AccueilHeroMap />
    </div>
    <div className='relative mt-auto flex flex-col gap-5 md:order-1 md:mt-0 md:gap-[30px]'>
      <span className='ls-kicker text-ls-primary'>{hero.kicker}</span>
      <h1 id='accueil-titre' className='ls-h ls-d1 max-w-[15ch] text-ls-primary'>
        {hero.title}
      </h1>
      {/* Sur mobile, le héros reste minimal (titre + actions) : le détail est
         porté par la bande de repères juste sous le pli */}
      <p className='ls-lede ls-measure hidden text-ls-muted md:block'>{hero.lede}</p>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
        <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid'>
          {hero.primary}
        </WhatsAppButton>
        <Link to={routes.livraison} className='ls-btn ls-btn-lg ls-btn-line'>
          {hero.secondary}
        </Link>
      </div>
      <p className='ls-cap hidden font-semibold text-ls-faint md:block'>{hero.reassurance}</p>
    </div>
  </section>
  );
};

export default AccueilHero;
