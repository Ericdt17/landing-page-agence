import {
    ArchiveBoxIcon,
    ChartBarIcon,
    ClockIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
    aboutContactAddress,
    aboutContactHours,
    aboutContactLabels,
    aboutContactTitle,
    aboutDifferentiators,
    aboutDifferentiatorsTitle,
    aboutIntroParagraphs,
    aboutLegalLine,
    aboutStats,
    aboutStoryParagraphs,
    aboutStoryTitle,
    footerPrivacyWhatsAppLabel,
    footerSupportEmail,
    whatsappCtaHref,
} from "../constants";

const iconMap = {
    shield: ShieldCheckIcon,
    clock: ClockIcon,
    archive: ArchiveBoxIcon,
    chart: ChartBarIcon,
};

const APropos = () => {
    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {aboutIntroParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-gray-600 sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>

            <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6'>
                {aboutStats.map(({ value, label }) => (
                    <li
                        key={label}
                        className='rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-6 text-center shadow-soft-card'
                    >
                        <p className='font-montserrat text-2xl font-extrabold text-brand-blue sm:text-3xl'>
                            {value}
                        </p>
                        <p className='mt-2 font-montserrat text-sm leading-snug text-gray-600'>
                            {label}
                        </p>
                    </li>
                ))}
            </ul>

            <section className='mt-14 sm:mt-16' aria-labelledby='about-story-heading'>
                <h2
                    id='about-story-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {aboutStoryTitle}
                </h2>
                <div className='mt-6 space-y-4'>
                    {aboutStoryParagraphs.map((p) => (
                        <p
                            key={p.slice(0, 48)}
                            className='font-montserrat text-base leading-relaxed text-gray-600 sm:text-lg'
                        >
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='about-diff-heading'
            >
                <h2
                    id='about-diff-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {aboutDifferentiatorsTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {aboutDifferentiators.map(({ iconId, title, description }) => {
                        const Icon = iconMap[iconId];
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
                    })}
                </ul>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='about-contact-heading'
            >
                <h2
                    id='about-contact-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {aboutContactTitle}
                </h2>
                <dl className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {aboutContactLabels.address}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {aboutContactAddress}
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {aboutContactLabels.whatsapp}
                        </dt>
                        <dd className='mt-1'>
                            <a
                                href={whatsappCtaHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-montserrat text-base font-semibold text-brand-blue underline-offset-2 hover:underline'
                            >
                                {footerPrivacyWhatsAppLabel}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {aboutContactLabels.email}
                        </dt>
                        <dd className='mt-1'>
                            <a
                                href={`mailto:${footerSupportEmail}`}
                                className='font-montserrat text-base font-semibold text-brand-blue underline-offset-2 hover:underline'
                            >
                                {footerSupportEmail}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {aboutContactLabels.hours}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {aboutContactHours}
                        </dd>
                    </div>
                    <div className='sm:col-span-2'>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {aboutContactLabels.company}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {aboutLegalLine}
                        </dd>
                    </div>
                </dl>
            </section>
        </div>
    );
};

export default APropos;
