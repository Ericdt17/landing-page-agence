import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
      <SiteLayout>
        <PageHeader title={termsPageTitle} subtitle={termsPageUpdated} />

        <div className='px-[18px] md:px-16'>
          <ConditionsSection />
        </div>
      </SiteLayout>
    </>
  );
};

export default ConditionsPage;
