import { PageHeader, SEO, SiteFooter } from "../components";
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
        <PageHeader title={securityPageTitle} subtitle={securityPageUpdated} />

        <div className='max-container padding-x'>
          <SecuriteSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default SecuritePage;
