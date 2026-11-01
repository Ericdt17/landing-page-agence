import { Link } from "react-router-dom";
import { heroEntrepot } from "../../assets/images";
import { routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";
import WhatsAppButton from "../../components/site/WhatsAppButton";

/**
 * Le héros remonte sous la barre de navigation transparente (68 px mobile,
 * 84 px bureau). Mobile : photo de l'entrepôt en haut du plein écran, texte
 * ancré en bas. Bureau : split-screen, texte à gauche, photo bord à bord sur
 * la moitié droite, pleine hauteur. Photo décorative (le titre porte le
 * message), d'où alt=''.
 */
const AccueilHero = () => {
  const { hero } = useCopy("accueil");
  return (
  <section
    aria-labelledby='accueil-titre'
    className='relative -mt-[68px] flex min-h-[100svh] flex-col px-[18px] pb-10 pt-[84px] md:-mt-[84px] md:min-h-[640px] md:justify-center md:px-16 md:pb-16 md:pt-[120px]'
  >
    {/* Photo : bande haute sur mobile, moitié droite pleine hauteur sur
       bureau ; fondue vers --ls-bg (vers le bas sur mobile, vers la gauche
       sur bureau) pour laisser le texte lisible */}
    <div aria-hidden='true' className='absolute inset-x-0 top-0 h-[62%] md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[46%]'>
      <img
        src={heroEntrepot}
        alt=''
        width='765'
        height='510'
        className='h-full w-full object-cover object-[60%_center]'
      />
      <div className='absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-ls-bg to-transparent md:hidden' />
      <div className='absolute inset-y-0 left-0 hidden w-[45%] bg-gradient-to-r from-ls-bg to-transparent md:block' />
    </div>
    <div className='relative mt-auto flex flex-col gap-5 md:mt-0 md:max-w-[560px] md:gap-[30px]'>
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
