import { Link } from "react-router-dom";
import { SEO, SiteFooter } from "../components";
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
                <div className='bg-brand-blue'>
                    <div className='max-container padding-x py-12 sm:py-16'>
                        <Link
                            to='/'
                            className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
                        >
                            ← Retour à l&apos;accueil
                        </Link>
                        <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                            {contactPageTitle}
                        </h1>
                        <p className='mt-2 font-montserrat text-sm text-white/60'>
                            {contactPageTagline}
                        </p>
                    </div>
                </div>

                <div className='max-container padding-x'>
                    <Contact />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default ContactPage;
