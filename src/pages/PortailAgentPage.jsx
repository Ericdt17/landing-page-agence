import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
import PortailAgent from "../sections/PortailAgent";
import {
    portailAgentPageTagline,
    portailAgentPageTitle,
} from "../constants";

const PortailAgentPage = () => {
    return (
        <>
            <SEO
                title='Portail Agent | Comment fonctionne votre agent'
                description='Votre agent dédié gère chaque livraison en temps réel depuis son application. Assignation intelligente, suivi GPS, gestion des incidents.'
                canonical='/plateforme/portail-agent'
            />
            <SiteLayout>
                <PageHeader title={portailAgentPageTitle} subtitle={portailAgentPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <PortailAgent />
                </div>
            </SiteLayout>
        </>
    );
};

export default PortailAgentPage;
