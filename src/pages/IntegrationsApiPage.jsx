import { PageHeader, SEO, SiteFooter } from "../components";
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
                description='Bientôt disponible : connectez votre boutique Shopify ou votre système de gestion à LivSight via API. Import automatique des commandes.'
                canonical='/plateforme/integrations-api'
            />
            <main className='min-h-[60vh] bg-white'>
                <PageHeader title={integrationsApiPageTitle} subtitle={integrationsApiPageTagline} />

                <div className='max-container padding-x'>
                    <IntegrationsApi />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default IntegrationsApiPage;
