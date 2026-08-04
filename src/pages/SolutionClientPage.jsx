import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
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
                description="Créez une livraison en 3 étapes, suivez vos colis en temps réel et recevez vos fonds en 3h. L'application LivSight pour commerçants à Yaoundé."
                canonical='/plateforme/solution-client'
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
                            {solutionClientPageTitle}
                        </h1>
                        <p className='mt-2 font-montserrat text-sm text-white/60'>
                            {solutionClientPageTagline}
                        </p>
                    </div>
                </div>

                <div className='max-container padding-x'>
                    <SolutionClient />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default SolutionClientPage;
