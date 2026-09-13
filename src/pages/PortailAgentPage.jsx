import { PageHeader, SEO, SiteFooter } from "../components";
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
            <main className='min-h-[60vh] bg-white'>
                <PageHeader title={portailAgentPageTitle} subtitle={portailAgentPageTagline} />

                <div className='max-container padding-x'>
                    <PortailAgent />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default PortailAgentPage;
