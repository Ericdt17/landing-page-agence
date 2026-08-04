import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
import ConditionsSection from "../sections/Conditions";
import { termsPageTitle, termsPageUpdated } from "../constants";

const ConditionsPage = () => {
  return (
    <>
      <SEO
        title="Conditions générales d'utilisation"
        description="Conditions générales d'utilisation du service LivSight : agence de livraison à Yaoundé, Cameroun."
        canonical='/legal/conditions'
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
              {termsPageTitle}
            </h1>
            <p className='mt-2 font-montserrat text-sm text-white/60'>
              {termsPageUpdated}
            </p>
          </div>
        </div>

        <div className='max-container padding-x'>
          <ConditionsSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ConditionsPage;
