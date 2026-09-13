import {
    AcademicCapIcon,
    ShieldCheckIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import JobsList from "../sections/recruitment/JobsList";
import ProcessSection from "../sections/recruitment/ProcessSection";
import { PageHeader, SEO } from "../components";
import SiteLayout from "../components/site/SiteLayout";
import {
    RECRUITMENT_HERO,
    RECRUITMENT_OPEN_BADGE,
    RECRUITMENT_VALUES,
    RECRUITMENT_VALUES_TITLE,
} from "../constants";
import { getOpenJobs } from "../services/recruitmentApi";

const valueIconMap = {
    shield: ShieldCheckIcon,
    academic: AcademicCapIcon,
    users: UserGroupIcon,
};

const RecruitmentPage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [listError, setListError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            setLoading(true);
            setListError(false);
            const result = await getOpenJobs();
            if (cancelled) return;
            if (result.success) {
                setJobs(result.data);
            } else {
                setJobs([]);
                setListError(true);
            }
            setLoading(false);
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
            <SEO
                title="Rejoindre notre équipe | Livreur et Agent à Yaoundé"
                description='LivSight recrute des livreurs et agents à Yaoundé. Moto fournie, formation assurée, bénéfices. Postulez en ligne en moins de 5 minutes.'
                canonical='/entreprise/recrutement'
            />
            <SiteLayout>
                <PageHeader title={RECRUITMENT_HERO.title} subtitle={RECRUITMENT_HERO.subtitle} />

                <div className='px-[18px] md:px-16 pb-16'>
                    <div className='mt-8 space-y-4'>
                        {!loading && jobs.length > 0 && (
                            <span className='inline-flex rounded-full bg-ls-select px-3 py-1 font-montserrat text-xs font-bold uppercase tracking-wide text-ls-accent'>
                                {RECRUITMENT_OPEN_BADGE}
                            </span>
                        )}
                        <p className='max-w-3xl font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'>
                            {RECRUITMENT_HERO.description}
                        </p>
                    </div>

                    <JobsList
                        jobs={jobs}
                        loading={loading}
                        error={listError}
                    />

                    <ProcessSection />

                    <section
                        className='mt-16 sm:mt-20'
                        aria-labelledby='recruitment-values-heading'
                    >
                        <h2
                            id='recruitment-values-heading'
                            className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                        >
                            {RECRUITMENT_VALUES_TITLE}
                        </h2>
                        <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6'>
                            {RECRUITMENT_VALUES.map(
                                ({ iconId, title, description }) => {
                                    const Icon = valueIconMap[iconId];
                                    return (
                                        <li
                                            key={title}
                                            className='flex flex-col rounded-3xl border border-ls-rule bg-ls-surface px-6 py-7 '
                                        >
                                            <Icon
                                                className='h-6 w-6 text-ls-accent'
                                                aria-hidden='true'
                                            />
                                            <h3 className='mt-5 font-montserrat text-lg font-bold text-ls-text'>
                                                {title}
                                            </h3>
                                            <p className='mt-3 font-montserrat text-sm leading-relaxed text-ls-muted'>
                                                {description}
                                            </p>
                                        </li>
                                    );
                                },
                            )}
                        </ul>
                    </section>
                </div>
            </SiteLayout>

        </>
    );
};

export default RecruitmentPage;
