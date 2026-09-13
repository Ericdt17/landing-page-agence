import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
            <SiteLayout>
                <PageHeader title={portailLivreurPageTitle} subtitle={portailLivreurPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <PortailLivreur />
                </div>
            </SiteLayout>
        </>
    );
};

export default PortailLivreurPage;
