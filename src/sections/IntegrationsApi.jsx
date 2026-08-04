import {
    ArrowsRightLeftIcon,
    BoltIcon,
    BookOpenIcon,
    ChartBarIcon,
    CubeIcon,
    DocumentArrowUpIcon,
    ServerStackIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { BrandCtaCard } from "../components";
import {
    integrationsApiAudienceItems,
    integrationsApiAudienceTitle,
    integrationsApiBadge,
    integrationsApiCodeSample,
    integrationsApiCodeTitle,
    integrationsApiFeatures,
    integrationsApiFeaturesTitle,
    integrationsApiIntroParagraphs,
    integrationsApiVersionLabel,
    integrationsApiWaitlistBody,
    integrationsApiWaitlistButtonLabel,
    integrationsApiWaitlistTitle,
    whatsappCtaHref,
} from "../constants";

const featureIconMap = {
    bolt: BoltIcon,
    webhook: ArrowsRightLeftIcon,
    cube: CubeIcon,
    document: DocumentArrowUpIcon,
    shop: ShoppingBagIcon,
    book: BookOpenIcon,
};

const audienceIconMap = {
    shop: ShoppingBagIcon,
    server: ServerStackIcon,
    chart: ChartBarIcon,
};

const IntegrationsApi = () => {
    return (
        <div className='py-12 sm:py-16'>
            <p className='inline-flex rounded-full bg-pale-blue px-4 py-1.5 font-montserrat text-xs font-bold uppercase tracking-wide text-brand-blue'>
                {integrationsApiBadge}
            </p>

            <div className='mt-6 space-y-4'>
                {integrationsApiIntroParagraphs.map((p) => (
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
                aria-labelledby='integrations-api-features-heading'
            >
                <h2
                    id='integrations-api-features-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {integrationsApiFeaturesTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {integrationsApiFeatures.map(({ iconId, title, description }) => {
                        const Icon = featureIconMap[iconId];
                        return (
                            <li
                                key={title}
                                className='relative flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 pt-10 shadow-soft-card'
                            >
                                <span className='absolute right-5 top-5 rounded-md bg-pale-blue px-2 py-0.5 font-montserrat text-xs font-bold text-brand-blue'>
                                    {integrationsApiVersionLabel}
                                </span>
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
                aria-labelledby='integrations-api-audience-heading'
            >
                <h2
                    id='integrations-api-audience-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {integrationsApiAudienceTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3 lg:gap-6'>
                    {integrationsApiAudienceItems.map(({ iconId, title, description }) => {
                        const Icon = audienceIconMap[iconId];
                        return (
                            <li
                                key={title}
                                className='flex flex-col rounded-3xl border border-gray-100 bg-gray-50/80 px-6 py-7 shadow-soft-card'
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
                aria-labelledby='integrations-api-code-heading'
            >
                <h2
                    id='integrations-api-code-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {integrationsApiCodeTitle}
                </h2>
                <pre className='mt-6 overflow-x-auto rounded-2xl bg-security-ink p-5 font-montserrat text-xs leading-relaxed text-gray-200 shadow-soft-card sm:p-6 sm:text-sm'>
                    <code>{integrationsApiCodeSample}</code>
                </pre>
            </section>

            <BrandCtaCard
                className='mt-14 sm:mt-16'
                headingId='integrations-api-waitlist-heading'
                title={integrationsApiWaitlistTitle}
                body={integrationsApiWaitlistBody}
                href={whatsappCtaHref}
                buttonLabel={integrationsApiWaitlistButtonLabel}
            />
        </div>
    );
};

export default IntegrationsApi;
