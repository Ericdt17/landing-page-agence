import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

/**
 * Coquille des pages du nouveau site : lien d'évitement, navigation, contenu,
 * pied de page. Le fond et la couleur de texte suivent les jetons `ls-*`, donc
 * le thème clair ou sombre de l'appareil.
 */
const SiteLayout = ({ children }) => (
  <div className='min-h-screen bg-ls-bg font-montserrat text-ls-text antialiased'>
    <a
      href='#contenu'
      className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ls-text focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-ls-bg'
    >
      Aller au contenu
    </a>
    <SiteNav />
    <main id='contenu' className='mx-auto max-w-[1440px]'>
      {children}
    </main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
