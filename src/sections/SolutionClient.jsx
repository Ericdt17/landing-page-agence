import {
    BanknotesIcon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon,
    ClipboardDocumentListIcon,
    CubeIcon,
    TruckIcon,
} from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "../components";
import {
    heroCtaPrimaryLabel,
    solutionClientCtaBody,
    solutionClientCtaTitle,
    solutionClientFeatures,
    solutionClientFeaturesTitle,
    solutionClientHowTitle,
    solutionClientHowSubheadline,
    solutionClientIntroParagraphs,
    solutionClientPricingBody,
    solutionClientPricingTitle,
    solutionClientSteps,
    solutionClientStores,
    solutionClientStoresTitle,
    whatsappCtaHref,
} from "../constants";

const iconMap = {
    clipboard: ClipboardDocumentListIcon,
    truck: TruckIcon,
    cube: CubeIcon,
    chat: ChatBubbleLeftRightIcon,
    chart: ChartBarIcon,
    banknotes: BanknotesIcon,
};

const SolutionClient = () => {
    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {solutionClientIntroParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-gray-600 sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='solution-client-features-heading'
            >
                <h2
                    id='solution-client-features-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {solutionClientFeaturesTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {solutionClientFeatures.map(({ iconId, title, description }) => {
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
                aria-labelledby='solution-client-how-heading'
            >
                <h2
                    id='solution-client-how-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {solutionClientHowTitle}
                </h2>
                <p className='mt-3 font-montserrat text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
                    {solutionClientHowSubheadline}
                </p>
                <ol className='mt-8 list-none space-y-8'>
                    {solutionClientSteps.map(({ step, title, description }) => (
                        <li
                            key={step}
                            className='flex gap-4 sm:gap-6'
                        >
                            <span
                                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue font-montserrat text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base'
                                aria-hidden='true'
                            >
                                {step}
                            </span>
                            <div>
                                <h3 className='font-montserrat text-lg font-bold text-gray-900'>
                                    {title}
                                </h3>
                                <p className='mt-2 font-montserrat text-sm leading-relaxed text-gray-600 sm:text-base'>
                                    {description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='solution-client-stores-heading'
            >
                <h2
                    id='solution-client-stores-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {solutionClientStoresTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6'>
                    {solutionClientStores.map(({ platform, store, href }) => (
                        <li key={platform}>
                            {href ? (
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='block rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-5 shadow-soft-card transition-colors hover:border-brand-blue/30 hover:bg-pale-blue/40'
                                >
                                    <p className='font-montserrat text-base font-bold text-gray-900'>
                                        {platform}
                                    </p>
                                    <p className='mt-1 font-montserrat text-sm font-semibold text-brand-blue'>
                                        {store}
                                    </p>
                                </a>
                            ) : (
                                <div className='rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-5 shadow-soft-card'>
                                    <p className='font-montserrat text-base font-bold text-gray-900'>
                                        {platform}
                                    </p>
                                    <p className='mt-1 font-montserrat text-sm text-gray-600'>
                                        {store}
                                    </p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <div className='mt-10 rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-5 text-center shadow-soft-card sm:px-8'>
                <p className='font-montserrat text-lg font-bold text-brand-blue'>
                    {solutionClientPricingTitle}
                </p>
                <p className='mt-1 font-montserrat text-sm text-gray-600'>
                    {solutionClientPricingBody}
                </p>
            </div>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='solution-client-cta-heading'
            >
                <div className='overflow-hidden rounded-[32px] bg-brand-blue px-6 py-10 text-center sm:px-10 sm:py-14'>
                    <h2
                        id='solution-client-cta-heading'
                        className='font-montserrat text-2xl font-extrabold text-white sm:text-3xl'
                    >
                        {solutionClientCtaTitle}
                    </h2>
                    <p className='mx-auto mt-4 max-w-xl font-montserrat text-sm leading-relaxed text-blue-100 sm:text-base'>
                        {solutionClientCtaBody}
                    </p>
                    <a
                        href={whatsappCtaHref}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-8 inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-white px-8 font-montserrat text-base font-bold text-brand-blue shadow-lg transition-opacity hover:opacity-95 sm:min-h-[70px] sm:px-10 sm:text-lg'
                    >
                        <WhatsAppIcon className='h-5 w-5 shrink-0' />
                        {heroCtaPrimaryLabel}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SolutionClient;
