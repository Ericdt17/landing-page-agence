import { PageHeader, SEO, SiteFooter } from "../components";
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
                <PageHeader title={portailLivreurPageTitle} subtitle={portailLivreurPageTagline} />

                <div className='max-container padding-x'>
                    <PortailLivreur />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default PortailLivreurPage;
