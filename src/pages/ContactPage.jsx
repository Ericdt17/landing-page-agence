import { PageHeader, SEO, SiteFooter } from "../components";
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
            <main className='min-h-[60vh] bg-white'>
                <PageHeader title={contactPageTitle} subtitle={contactPageTagline} />

                <div className='max-container padding-x'>
                    <Contact />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default ContactPage;
