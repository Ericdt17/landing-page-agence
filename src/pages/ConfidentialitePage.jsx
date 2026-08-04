import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
import ConfidentialiteSection from "../sections/Confidentialite";
import { privacyPageTitle, privacyPageUpdated } from "../constants";

const ConfidentialitePage = () => {
  return (
    <>
      <SEO
        title='Politique de confidentialité'
        description='Politique de confidentialité de LivSight : agence de livraison à Yaoundé, Cameroun.'
        canonical='/legal/confidentialite'
      />
      <main className='min-h-[60vh] bg-white'>
        {/* Page header */}
        <div className='bg-brand-blue'>
          <div className='max-container padding-x py-12 sm:py-16'>
            <Link
              to='/'
              className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
            >
              ← Retour à l&apos;accueil
            </Link>
            <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
              {privacyPageTitle}
            </h1>
            <p className='mt-2 font-montserrat text-sm text-white/60'>
              {privacyPageUpdated}
            </p>
          </div>
        </div>

        {/* Document body */}
        <div className='max-container padding-x'>
          <ConfidentialiteSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ConfidentialitePage;
