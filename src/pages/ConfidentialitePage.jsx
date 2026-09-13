import { PageHeader, SEO, SiteFooter } from "../components";
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
        <PageHeader title={privacyPageTitle} subtitle={privacyPageUpdated} />

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
