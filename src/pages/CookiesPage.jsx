import { PageHeader, SEO, SiteFooter } from "../components";
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
        <PageHeader title={cookiesPageTitle} subtitle={cookiesPageUpdated} />

        <div className='max-container padding-x'>
          <CookiesSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
};

export default CookiesPage;
