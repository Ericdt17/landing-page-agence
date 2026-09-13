import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
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
            <SiteLayout>
                <PageHeader title={coursesParticuliersPageTitle} subtitle={coursesParticuliersPageTagline} />

                <div className='px-[18px] md:px-16'>
                    <CoursesParticuliers />
                </div>
            </SiteLayout>
        </>
    );
};

export default CoursesParticuliersPage;
