import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
      <SiteLayout>
        <PageHeader title={cookiesPageTitle} subtitle={cookiesPageUpdated} />

        <div className='px-[18px] md:px-16'>
          <CookiesSection />
        </div>
      </SiteLayout>
    </>
  );
};

export default CookiesPage;
