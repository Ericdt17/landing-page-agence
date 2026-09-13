import { PageHeader, SEO, SiteFooter } from "../components";
import CoursesParticuliers from "../sections/CoursesParticuliers";
import {
    coursesParticuliersPageTagline,
    coursesParticuliersPageTitle,
} from "../constants";

const CoursesParticuliersPage = () => {
    return (
        <>
            <SEO
                title='Courses particuliers à Yaoundé | documents, commissions, livraisons'
                description="Commandez une course sans vous déplacer : documents, achats, colis, cadeaux. Même grille tarifaire que les livraisons standard. Contactez LivSight sur WhatsApp."
                canonical='/plateforme/courses-particuliers'
            />
            <main className='min-h-[60vh] bg-white'>
                <PageHeader title={coursesParticuliersPageTitle} subtitle={coursesParticuliersPageTagline} />

                <div className='max-container padding-x'>
                    <CoursesParticuliers />
                </div>
            </main>
      <SiteFooter />
        </>
    );
};

export default CoursesParticuliersPage;
