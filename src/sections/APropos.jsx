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
import { useLandingPublic } from "../context/LandingPublicContext";

const iconMap = {
    shield: ShieldCheckIcon,
    clock: ClockIcon,
    archive: ArchiveBoxIcon,
    chart: ChartBarIcon,
};

const formatCount = (count) => new Intl.NumberFormat("fr-FR").format(count);

const buildAboutStats = (clientsCount) => {
    /* Sans réponse de l'API, le tiret de `aboutStats` reste affiché : pas de
       chiffre inventé à la place du vrai. */
    if (clientsCount == null) return aboutStats;

    return aboutStats.map((stat) => {
        if (stat.id !== "clients") return stat;
        return {
            ...stat,
            value: formatCount(clientsCount),
            label: "commerçants partenaires",
        };
    });
};

const APropos = () => {
    const { clientsCount } = useLandingPublic();
    const stats = buildAboutStats(clientsCount);

    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {aboutIntroParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>

            <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6'>
                {stats.map(({ id, value, label }) => (
                    <li
                        key={id ?? label}
                        className='rounded-2xl border border-ls-rule bg-ls-fill px-5 py-6 text-center '
                    >
                        <p className='font-montserrat text-2xl font-extrabold text-ls-accent sm:text-3xl'>
                            {value}
                        </p>
                        <p className='mt-2 font-montserrat text-sm leading-snug text-ls-muted'>
                            {label}
                        </p>
                    </li>
                ))}
            </ul>

            <section className='mt-14 sm:mt-16' aria-labelledby='about-story-heading'>
                <h2
                    id='about-story-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {aboutStoryTitle}
                </h2>
                <div className='mt-6 space-y-4'>
                    {aboutStoryParagraphs.map((p) => (
                        <p
                            key={p.slice(0, 48)}
                            className='font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'
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
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {aboutDifferentiatorsTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {aboutDifferentiators.map(({ iconId, title, description }) => {
                        const Icon = iconMap[iconId];
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
                    })}
                </ul>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='about-contact-heading'
            >
                <h2
                    id='about-contact-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {aboutContactTitle}
                </h2>
                <dl className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-ls-faint'>
                            {aboutContactLabels.address}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-ls-muted'>
                            {aboutContactAddress}
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-ls-faint'>
                            {aboutContactLabels.whatsapp}
                        </dt>
                        <dd className='mt-1'>
                            <a
                                href={whatsappCtaHref}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-montserrat text-base font-semibold text-ls-accent underline-offset-2 hover:underline'
                            >
                                {footerPrivacyWhatsAppLabel}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-ls-faint'>
                            {aboutContactLabels.email}
                        </dt>
                        <dd className='mt-1'>
                            <a
                                href={`mailto:${footerSupportEmail}`}
                                className='font-montserrat text-base font-semibold text-ls-accent underline-offset-2 hover:underline'
                            >
                                {footerSupportEmail}
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-ls-faint'>
                            {aboutContactLabels.hours}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-ls-muted'>
                            {aboutContactHours}
                        </dd>
                    </div>
                    <div className='sm:col-span-2'>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-ls-faint'>
                            {aboutContactLabels.company}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-ls-muted'>
                            {aboutLegalLine}
                        </dd>
                    </div>
                </dl>
            </section>
        </div>
    );
};

export default APropos;
