import {
    BanknotesIcon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon,
    ClipboardDocumentListIcon,
    CubeIcon,
    TruckIcon,
} from "@heroicons/react/24/outline";
import { BrandCtaCard } from "../components";
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
                        className='font-montserrat text-base leading-relaxed text-ls-muted sm:text-lg'
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
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {solutionClientFeaturesTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {solutionClientFeatures.map(({ iconId, title, description }) => {
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
                aria-labelledby='solution-client-how-heading'
            >
                <h2
                    id='solution-client-how-heading'
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
                >
                    {solutionClientHowTitle}
                </h2>
                <p className='mt-3 font-montserrat text-base leading-7 text-ls-muted sm:text-lg sm:leading-8'>
                    {solutionClientHowSubheadline}
                </p>
                <ol className='mt-8 list-none space-y-8'>
                    {solutionClientSteps.map(({ step, title, description }) => (
                        <li
                            key={step}
                            className='flex gap-4 sm:gap-6'
                        >
                            <span
                                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ls-text font-montserrat text-sm font-bold text-ls-bg sm:h-12 sm:w-12 sm:text-base'
                                aria-hidden='true'
                            >
                                {step}
                            </span>
                            <div>
                                <h3 className='font-montserrat text-lg font-bold text-ls-text'>
                                    {title}
                                </h3>
                                <p className='mt-2 font-montserrat text-sm leading-relaxed text-ls-muted sm:text-base'>
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
                    className='font-montserrat text-2xl font-bold text-ls-text sm:text-3xl'
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
                                    className='block rounded-2xl border border-ls-rule bg-ls-fill px-6 py-5 transition-colors hover:border-ls-rule hover:bg-ls-select'
                                >
                                    <p className='font-montserrat text-base font-bold text-ls-text'>
                                        {platform}
                                    </p>
                                    <p className='mt-1 font-montserrat text-sm font-semibold text-ls-accent'>
                                        {store}
                                    </p>
                                </a>
                            ) : (
                                <div className='rounded-2xl border border-ls-rule bg-ls-fill px-6 py-5 '>
                                    <p className='font-montserrat text-base font-bold text-ls-text'>
                                        {platform}
                                    </p>
                                    <p className='mt-1 font-montserrat text-sm text-ls-muted'>
                                        {store}
                                    </p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <div className='mt-10 rounded-2xl border border-ls-rule bg-ls-fill px-6 py-5 text-center sm:px-8'>
                <p className='font-montserrat text-lg font-bold text-ls-accent'>
                    {solutionClientPricingTitle}
                </p>
                <p className='mt-1 font-montserrat text-sm text-ls-muted'>
                    {solutionClientPricingBody}
                </p>
            </div>

            <BrandCtaCard
                className='mt-14 sm:mt-16'
                headingId='solution-client-cta-heading'
                title={solutionClientCtaTitle}
                body={solutionClientCtaBody}
                href={whatsappCtaHref}
                buttonLabel={heroCtaPrimaryLabel}
            />
        </div>
    );
};

export default SolutionClient;
