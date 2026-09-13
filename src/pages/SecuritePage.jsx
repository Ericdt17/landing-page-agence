import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
      <SiteLayout>
        <PageHeader title={securityPageTitle} subtitle={securityPageUpdated} />

        <div className='px-[18px] md:px-16'>
          <SecuriteSection />
        </div>
      </SiteLayout>
    </>
  );
};

export default SecuritePage;
