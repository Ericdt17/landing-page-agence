import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
import IntegrationsApi from "../sections/IntegrationsApi";
import {
    integrationsApiPageTagline,
    integrationsApiPageTitle,
} from "../constants";

const IntegrationsApiPage = () => {
    return (
        <>
            <SEO
                title='Intégration API | Connectez votre boutique'
                description='Bientôt disponible : connectez votre boutique en ligne ou votre système de gestion à LivSight via API. Import automatique des commandes.'
                canonical='/plateforme/integrations-api'
            />
            <SiteLayout>
                <PageHeader title={integrationsApiPageTitle} subtitle={integrationsApiPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <IntegrationsApi />
                </div>
            </SiteLayout>
        </>
    );
};

export default IntegrationsApiPage;
