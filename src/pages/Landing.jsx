import { Nav, SEO } from "../components";
import { LandingPublicProvider } from "../context/LandingPublicContext";
import {
  CtaFinal,
  Faq,
  Footer,
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
        title='Agence de livraison rapide à Yaoundé'
        description="LivSight est l'agence de livraison de Yaoundé. Stockage gratuit, suivi en temps réel, reversement en 3h. Confiez vos livraisons à une équipe sérieuse."
        canonical='/'
      />
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
      <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
        <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
        <div className='relative'>
          <Footer />
        </div>
      </div>
    </LandingPublicProvider>
  );
};

export default Landing;
