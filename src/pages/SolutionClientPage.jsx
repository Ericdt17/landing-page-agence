import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
            <SiteLayout>
                <PageHeader title={solutionClientPageTitle} subtitle={solutionClientPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <SolutionClient />
                </div>
            </SiteLayout>
        </>
    );
};

export default SolutionClientPage;
