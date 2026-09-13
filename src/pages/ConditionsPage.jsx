import { PageHeader, SEO, SiteFooter } from "../components";
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
        <PageHeader title={termsPageTitle} subtitle={termsPageUpdated} />

        <div className='max-container padding-x'>
          <ConditionsSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default ConditionsPage;
