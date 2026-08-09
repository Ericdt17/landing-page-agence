import { Helmet } from "react-helmet-async";
import { Nav, SEO, SiteFooter } from "../components";
import { LandingPublicProvider } from "../context/LandingPublicContext";
import {
  CtaFinal,
  Faq,
  Hero,
  LeProbleme,
  MetriquesCles,
  Offre,
  SecuriteConfiance,
  Solution,
  TrustedBy,
} from "../sections";

const Landing = () => {
  return (
    <LandingPublicProvider>
      <SEO
        title="Agence de livraison pour commerçants à Yaoundé"
        description="Développez votre business en ligne avec LivSight. Livraison à Yaoundé, stockage gratuit à l’Hippodrome, suivi en temps réel et reversement en moins de 3 heures."
        canonical="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "LivSight",
            url: "https://www.livsight.com",
            description:
              "Agence de livraison pour commerçants et boutiques en ligne à Yaoundé.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Yaoundé",
              addressRegion: "Centre",
              addressCountry: "CM",
              streetAddress: "Hippodrome",
            },
            areaServed: {
              "@type": "City",
              name: "Yaoundé",
            },
          })}
        </script>
      </Helmet>
      <Nav />
      <main className='relative overflow-hidden bg-white'>
        <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
        <div className='relative'>
          <div className='xl:padding-l wide:padding-r padding-b'>
            <Hero />
          </div>
          <TrustedBy />
          <div className='padding'>
            <LeProbleme />
          </div>
          <div className='padding'>
            <Solution />
          </div>
          <div className='padding'>
            <Offre />
          </div>
          <SecuriteConfiance />
          <MetriquesCles />
          <Faq />
          <CtaFinal />
        </div>
      </main>
      <SiteFooter />
    </LandingPublicProvider>
  );
};

export default Landing;
