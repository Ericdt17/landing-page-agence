import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { accueilSeo } from "../constants/accueil";
import { LandingPublicProvider } from "../context/LandingPublicContext";
import AccueilApplication from "../sections/accueil/AccueilApplication";
import AccueilCta from "../sections/accueil/AccueilCta";
import AccueilDemarrer from "../sections/accueil/AccueilDemarrer";
import AccueilDifferences from "../sections/accueil/AccueilDifferences";
import AccueilHero from "../sections/accueil/AccueilHero";
import AccueilMarketplace from "../sections/accueil/AccueilMarketplace";
import AccueilPreuve from "../sections/accueil/AccueilPreuve";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LivSight",
  url: "https://www.livsight.com",
  description: "Agence de livraison pour commerçants et boutiques en ligne à Yaoundé.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yaoundé",
    addressRegion: "Centre",
    addressCountry: "CM",
    streetAddress: "Hippodrome",
  },
  areaServed: { "@type": "City", name: "Yaoundé" },
};

const Accueil = () => (
  <LandingPublicProvider>
    <SEO title={accueilSeo.title} description={accueilSeo.description} canonical='/' />
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(localBusiness)}</script>
    </Helmet>
    <SiteLayout>
      <AccueilHero />
      <AccueilPreuve />
      <AccueilApplication />
      <AccueilDifferences />
      <AccueilDemarrer />
      <AccueilMarketplace />
      <AccueilCta />
    </SiteLayout>
  </LandingPublicProvider>
);

export default Accueil;
