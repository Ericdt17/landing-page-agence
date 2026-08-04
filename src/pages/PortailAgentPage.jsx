import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
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
                <div className='bg-brand-blue'>
                    <div className='max-container padding-x py-12 sm:py-16'>
                        <Link
                            to='/'
                            className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
                        >
                            ← Retour à l&apos;accueil
                        </Link>
                        <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                            {portailAgentPageTitle}
                        </h1>
                        <p className='mt-2 font-montserrat text-sm text-white/60'>
                            {portailAgentPageTagline}
                        </p>
                    </div>
                </div>

                <div className='max-container padding-x'>
                    <PortailAgent />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default PortailAgentPage;
