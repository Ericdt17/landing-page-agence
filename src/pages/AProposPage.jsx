import { PageHeader, SEO, SiteFooter } from "../components";
import { LandingPublicProvider } from "../context/LandingPublicContext";
import APropos from "../sections/APropos";
import { aboutPageTagline, aboutPageTitle } from "../constants";

const AProposPage = () => {
    return (
        <LandingPublicProvider>
            <SEO
                title='À propos | Notre histoire à Yaoundé'
                description="LivSight est une agence de livraison basée à l'Hippodrome, Yaoundé. Fondée pour digitaliser et professionnaliser la livraison au Cameroun."
                canonical='/entreprise/a-propos'
            />
            <main className='min-h-[60vh] bg-white'>
                <PageHeader title={aboutPageTitle} subtitle={aboutPageTagline} />

                <div className='max-container padding-x'>
                    <APropos />
                </div>
            </main>
      <SiteFooter />
        </LandingPublicProvider>
    );
};

export default AProposPage;
