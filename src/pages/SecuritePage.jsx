import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
import SecuriteSection from "../sections/Securite";
import { securityPageTitle, securityPageUpdated } from "../constants";

const SecuritePage = () => {
  return (
    <>
      <SEO
        title='Sécurité'
        description='Politique de sécurité de LivSight : protection de vos données et de vos livraisons.'
        canonical='/legal/securite'
      />
      <main className='min-h-[60vh] bg-white'>
        <div className='bg-brand-blue'>
          <div className='max-container padding-x py-12 sm:py-16'>
            <Link
              to='/'
              className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
            >
              ← Retour à l&apos;accueil
            </Link>
            <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
              {securityPageTitle}
            </h1>
            <p className='mt-2 font-montserrat text-sm text-white/60'>
              {securityPageUpdated}
            </p>
          </div>
        </div>

        <div className='max-container padding-x'>
          <SecuriteSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default SecuritePage;
