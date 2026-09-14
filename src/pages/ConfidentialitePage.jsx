import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
      <SiteLayout>
        <PageHeader title={privacyPageTitle} subtitle={privacyPageUpdated} />

        {/* Document body */}
        <div className='px-[18px] md:px-16'>
          <ConfidentialiteSection />
        </div>
      </SiteLayout>
    </>
  );
};

export default ConfidentialitePage;
