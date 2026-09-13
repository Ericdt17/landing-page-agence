import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
            <SiteLayout>
                <PageHeader title={aboutPageTitle} subtitle={aboutPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <APropos />
                </div>
            </SiteLayout>
        </LandingPublicProvider>
    );
};

export default AProposPage;
