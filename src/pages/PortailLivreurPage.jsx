import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
import PortailLivreur from "../sections/PortailLivreur";
import {
    portailLivreurPageTagline,
    portailLivreurPageTitle,
} from "../constants";

const PortailLivreurPage = () => {
    return (
        <>
            <SEO
                title='Portail Livreur | Des livreurs guidés par algorithmes'
                description='Nos livreurs sont guidés par des algorithmes pour livrer vos colis plus vite. GPS actif, montant verrouillé, statuts en temps réel.'
                canonical='/plateforme/portail-livreur'
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
                            {portailLivreurPageTitle}
                        </h1>
                        <p className='mt-2 font-montserrat text-sm text-white/60'>
                            {portailLivreurPageTagline}
                        </p>
                    </div>
                </div>

                <div className='max-container padding-x'>
                    <PortailLivreur />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default PortailLivreurPage;
