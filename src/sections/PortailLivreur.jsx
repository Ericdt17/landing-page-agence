import {
    CpuChipIcon,
    ExclamationTriangleIcon,
    LockClosedIcon,
    MapPinIcon,
    QueueListIcon,
    StarIcon,
} from "@heroicons/react/24/outline";
import {
    portailLivreurAppSectionTitle,
    portailLivreurFeatures,
    portailLivreurImpactItems,
    portailLivreurImpactTitle,
    portailLivreurIntroParagraphs,
    portailLivreurLeadParagraph,
    portailLivreurLeadQuote,
    portailLivreurStats,
} from "../constants";

const iconMap = {
    cpu: CpuChipIcon,
    mappin: MapPinIcon,
    lock: LockClosedIcon,
    queue: QueueListIcon,
    alert: ExclamationTriangleIcon,
    star: StarIcon,
};

const PortailLivreur = () => {
    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {portailLivreurIntroParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>

            <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6'>
                {portailLivreurStats.map(({ value, label }) => (
                    <li
                        key={label}
                        className='rounded-2xl border border-ls-rule bg-ls-fill px-5 py-6 text-center '
                    >
                        <p className='font-montserrat text-xl font-extrabold text-ls-accent sm:text-2xl'>
                            {value}
                        </p>
                        <p className='mt-2 font-montserrat text-sm leading-snug text-ls-muted'>
                            {label}
                        </p>
                    </li>
                ))}
            </ul>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='portail-livreur-app-heading'
            >
                <h2
                    id='portail-livreur-app-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {portailLivreurAppSectionTitle}
                </h2>

                <blockquote className='mt-8 rounded-2xl border border-ls-rule bg-ls-select px-6 py-6 sm:px-8 sm:py-8'>
                    <p className='font-montserrat text-lg font-bold leading-snug text-ls-accent sm:text-xl'>
                        {portailLivreurLeadQuote}
                    </p>
                    <p className='mt-4 font-montserrat text-sm leading-relaxed text-ls-muted sm:text-base'>
                        {portailLivreurLeadParagraph}
                    </p>
                </blockquote>

                <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {portailLivreurFeatures.map(({ iconId, title, description }) => {
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
                aria-labelledby='portail-livreur-impact-heading'
            >
                <h2
                    id='portail-livreur-impact-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {portailLivreurImpactTitle}
                </h2>
                <ul className='mt-8 space-y-5'>
                    {portailLivreurImpactItems.map(({ title, description }) => (
                        <li
                            key={title}
                            className='rounded-2xl border border-ls-rule bg-ls-fill px-5 py-5 sm:px-6 sm:py-6'
                        >
                            <h3 className='font-montserrat text-base font-bold text-ls-text sm:text-lg'>
                                {title}
                            </h3>
                            <p className='mt-2 font-montserrat text-sm leading-relaxed text-ls-muted'>
                                {description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default PortailLivreur;
