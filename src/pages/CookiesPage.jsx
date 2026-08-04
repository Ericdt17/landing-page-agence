import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
import CookiesSection from "../sections/Cookies";
import { cookiesPageTitle, cookiesPageUpdated } from "../constants";

const CookiesPage = () => {
  return (
    <>
      <SEO
        title='Politique des cookies'
        description='Politique des cookies de LivSight : agence de livraison à Yaoundé, Cameroun.'
        canonical='/legal/cookies'
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
              {cookiesPageTitle}
            </h1>
            <p className='mt-2 font-montserrat text-sm text-white/60'>
              {cookiesPageUpdated}
            </p>
          </div>
        </div>

        <div className='max-container padding-x'>
          <CookiesSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default CookiesPage;
