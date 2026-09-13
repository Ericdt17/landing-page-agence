import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
import Contact from "../sections/Contact";
import { contactPageTagline, contactPageTitle } from "../constants";

const ContactPage = () => {
    return (
        <>
            <SEO
                title='Contactez-nous | Hippodrome Yaoundé'
                description="Contactez LivSight par WhatsApp ou email. Agence basée à l'Hippodrome, Yaoundé. On vous répond en moins de 30 minutes."
                canonical='/entreprise/contact'
            />
            <SiteLayout>
                <PageHeader title={contactPageTitle} subtitle={contactPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <Contact />
                </div>
            </SiteLayout>
        </>
    );
};

export default ContactPage;
