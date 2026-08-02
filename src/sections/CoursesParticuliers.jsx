import {
    ArrowPathRoundedSquareIcon,
    ChatBubbleLeftRightIcon,
    CubeIcon,
    DocumentTextIcon,
    GiftIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "../components";
import {
    coursesParticuliersCtaBody,
    coursesParticuliersCtaButtonLabel,
    coursesParticuliersCtaTitle,
    coursesParticuliersHighlights,
    coursesParticuliersHowTitle,
    coursesParticuliersIntroParagraphs,
    coursesParticuliersPricingBody,
    coursesParticuliersPricingTitle,
    coursesParticuliersServices,
    coursesParticuliersServicesTitle,
    coursesParticuliersSteps,
    coursesParticuliersWhatsAppHref,
} from "../constants";

const iconMap = {
    document: DocumentTextIcon,
    shopping: ShoppingBagIcon,
    cube: CubeIcon,
    gift: GiftIcon,
    arrow: ArrowPathRoundedSquareIcon,
    chat: ChatBubbleLeftRightIcon,
};

const CoursesParticuliers = () => {
    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {coursesParticuliersIntroParagraphs.map((p) => (
                    <p
                        key={p.slice(0, 48)}
                        className='font-montserrat text-base leading-relaxed text-gray-600 sm:text-lg'
                    >
                        {p}
                    </p>
                ))}
            </div>

            <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6'>
                {coursesParticuliersHighlights.map(({ title, body }) => (
                    <li
                        key={title}
                        className='rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-5 text-center shadow-soft-card sm:px-6'
                    >
                        <p className='font-montserrat text-lg font-bold text-brand-blue'>
                            {title}
                        </p>
                        <p className='mt-2 font-montserrat text-sm text-gray-600'>
                            {body}
                        </p>
                    </li>
                ))}
            </ul>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='courses-particuliers-services-heading'
            >
                <h2
                    id='courses-particuliers-services-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {coursesParticuliersServicesTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    {coursesParticuliersServices.map(({ iconId, title, description }) => {
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
                aria-labelledby='courses-particuliers-how-heading'
            >
                <h2
                    id='courses-particuliers-how-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {coursesParticuliersHowTitle}
                </h2>
                <ol className='mt-8 list-none space-y-8'>
                    {coursesParticuliersSteps.map(({ step, title, description }) => (
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

            <div className='mt-10 rounded-2xl border border-gray-100 bg-gray-50/80 px-6 py-5 text-center shadow-soft-card sm:px-8'>
                <p className='font-montserrat text-lg font-bold text-brand-blue'>
                    {coursesParticuliersPricingTitle}
                </p>
                <p className='mt-1 font-montserrat text-sm leading-relaxed text-gray-600 sm:text-base'>
                    {coursesParticuliersPricingBody}
                </p>
            </div>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='courses-particuliers-cta-heading'
            >
                <div className='relative overflow-hidden rounded-[32px] bg-brand-blue px-6 py-10 text-center sm:px-10 sm:py-14'>
                    <div
                        className='pointer-events-none absolute inset-0 bg-hero-grid opacity-10'
                        aria-hidden='true'
                    />
                    <div className='relative'>
                        <h2
                            id='courses-particuliers-cta-heading'
                            className='font-montserrat text-2xl font-extrabold text-white sm:text-3xl'
                        >
                            {coursesParticuliersCtaTitle}
                        </h2>
                        <p className='mx-auto mt-4 max-w-xl font-montserrat text-sm leading-relaxed text-blue-100 sm:text-base'>
                            {coursesParticuliersCtaBody}
                        </p>
                        <a
                            href={coursesParticuliersWhatsAppHref}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-8 inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-white px-8 font-montserrat text-base font-bold text-brand-blue shadow-lg transition-opacity hover:opacity-95 sm:min-h-[70px] sm:px-10 sm:text-lg'
                        >
                            <WhatsAppIcon className='h-5 w-5 shrink-0' />
                            {coursesParticuliersCtaButtonLabel}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesParticuliers;
