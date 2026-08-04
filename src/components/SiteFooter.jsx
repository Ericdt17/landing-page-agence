import Footer from "../sections/Footer";

/**
 * Pied de page site : un seul fond (blanc + grille légère), sans superposition.
 */
const SiteFooter = () => {
  return (
    <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
      <div
        className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
        aria-hidden='true'
      />
      <div className='relative'>
        <Footer />
      </div>
    </div>
  );
};

export default SiteFooter;
