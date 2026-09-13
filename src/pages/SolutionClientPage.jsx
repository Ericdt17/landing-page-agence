import { PageHeader, SEO, SiteFooter } from "../components";
import SolutionClient from "../sections/SolutionClient";
import {
    solutionClientPageTagline,
    solutionClientPageTitle,
} from "../constants";

const SolutionClientPage = () => {
    return (
        <>
            <SEO
                title='Gérez vos livraisons depuis votre téléphone'
                description="Créez une livraison en 3 étapes, suivez vos colis en temps réel et recevez vos fonds en fin de journée. L'application LivSight pour commerçants à Yaoundé."
                canonical='/plateforme/solution-client'
            />
            <main className='min-h-[60vh] bg-white'>
                <PageHeader title={solutionClientPageTitle} subtitle={solutionClientPageTagline} />

                <div className='max-container padding-x'>
                    <SolutionClient />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default SolutionClientPage;
