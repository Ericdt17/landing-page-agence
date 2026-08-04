import { Link } from "react-router-dom";
import { SEO } from "../components";
import SecuriteSection from "../sections/Securite";
import { Footer } from "../sections";
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

      <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
        <div
          className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
          aria-hidden='true'
        />
        <div className='relative'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SecuritePage;
