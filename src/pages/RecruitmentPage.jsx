import {
    AcademicCapIcon,
    ShieldCheckIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../sections";
import JobsList from "../sections/recruitment/JobsList";
import ProcessSection from "../sections/recruitment/ProcessSection";
import { SEO } from "../components";
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
                            {RECRUITMENT_HERO.title}
                        </h1>
                        <p className='mt-2 font-montserrat text-sm text-white/60'>
                            {RECRUITMENT_HERO.subtitle}
                        </p>
                    </div>
                </div>

                <div className='max-container padding-x pb-16'>
                    <div className='mt-8 space-y-4'>
                        {!loading && jobs.length > 0 && (
                            <span className='inline-flex rounded-full bg-pale-blue px-3 py-1 font-montserrat text-xs font-bold uppercase tracking-wide text-brand-blue'>
                                {RECRUITMENT_OPEN_BADGE}
                            </span>
                        )}
                        <p className='max-w-3xl font-montserrat text-base leading-relaxed text-gray-600 sm:text-lg'>
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
                            className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
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
                                            className='flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card'
                                        >
                                            <Icon
                                                className='h-6 w-6 text-brand-blue'
                                                aria-hidden='true'
                                            />
                                            <h3 className='mt-5 font-montserrat text-lg font-bold text-gray-900'>
                                                {title}
                                            </h3>
                                            <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                                                {description}
                                            </p>
                                        </li>
                                    );
                                },
                            )}
                        </ul>
                    </section>
                </div>
            </main>

            <div className='relative overflow-hidden border-t border-gray-100 bg-white padding-x padding-t pb-8'>
                <div
                    className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
                    aria-hidden='true'
                />
                <div className='relative'>
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default RecruitmentPage;
