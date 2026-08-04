import { Link } from "react-router-dom";
import { SEO } from "../components";
import { Footer } from "../sections";
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

            <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
                <div
                    className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
                    aria-hidden='true'
                />
                <div className='relative'>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default PortailAgentPage;
