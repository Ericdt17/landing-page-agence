import {
    ChatBubbleLeftRightIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import { BrandCtaCard, WhatsAppIcon } from "../components";
import {
    contactChannelsSectionTitle,
    contactCtaBody,
    contactCtaTitle,
    contactEmailChannel,
    contactIntroParagraphs,
    contactPhoneChannel,
    contactPhoneFallbackLine,
    contactPracticalAddress,
    contactPracticalCompany,
    contactPracticalLabelAddress,
    contactPracticalLabelCompany,
    contactPracticalLabelHours,
    contactPracticalLabelSunday,
    contactPracticalSunday,
    contactPracticalTitle,
    contactPracticalWeekHours,
    contactReasonsItems,
    contactReasonsTitle,
    contactResponsibleLine,
    contactResponsibleTitle,
    contactVisitChannel,
    contactWhatsAppChannel,
    footerSupportEmail,
    heroCtaPrimaryLabel,
    securityAgencyPhone,
    whatsappCtaHref,
} from "../constants";

const Contact = () => {
    const telHref =
        securityAgencyPhone &&
        `tel:${String(securityAgencyPhone).replace(/\s/g, "")}`;

    return (
        <div className='py-12 sm:py-16'>
            <div className='space-y-4'>
                {contactIntroParagraphs.map((p) => (
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
                aria-labelledby='contact-channels-heading'
            >
                <h2
                    id='contact-channels-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {contactChannelsSectionTitle}
                </h2>
                <ul className='mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
                    <li className='flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card'>
                        <p className='font-montserrat text-xs font-semibold uppercase tracking-wide text-brand-blue'>
                            {contactWhatsAppChannel.eyebrow}
                        </p>
                        <ChatBubbleLeftRightIcon
                            className='mt-3 h-6 w-6 text-brand-blue'
                            aria-hidden='true'
                        />
                        <h3 className='mt-4 font-montserrat text-lg font-bold text-gray-900'>
                            {contactWhatsAppChannel.title}
                        </h3>
                        <a
                            href={whatsappCtaHref}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-2 inline-flex w-fit items-center gap-2 font-montserrat text-base font-semibold text-brand-blue underline-offset-2 hover:underline'
                        >
                            <WhatsAppIcon className='h-5 w-5 shrink-0' />
                            WhatsApp
                        </a>
                        <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                            {contactWhatsAppChannel.description}
                        </p>
                    </li>

                    <li className='flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card'>
                        <p className='font-montserrat text-xs font-semibold uppercase tracking-wide text-brand-blue'>
                            {contactEmailChannel.eyebrow}
                        </p>
                        <EnvelopeIcon
                            className='mt-3 h-6 w-6 text-brand-blue'
                            aria-hidden='true'
                        />
                        <h3 className='mt-4 font-montserrat text-lg font-bold text-gray-900'>
                            {contactEmailChannel.title}
                        </h3>
                        <a
                            href={`mailto:${footerSupportEmail}`}
                            className='mt-2 w-fit font-montserrat text-base font-semibold text-brand-blue underline-offset-2 hover:underline'
                        >
                            {footerSupportEmail}
                        </a>
                        <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                            {contactEmailChannel.description}
                        </p>
                    </li>

                    <li className='flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card'>
                        <p className='font-montserrat text-xs font-semibold uppercase tracking-wide text-brand-blue'>
                            {contactVisitChannel.eyebrow}
                        </p>
                        <MapPinIcon
                            className='mt-3 h-6 w-6 text-brand-blue'
                            aria-hidden='true'
                        />
                        <h3 className='mt-4 font-montserrat text-lg font-bold text-gray-900'>
                            {contactVisitChannel.title}
                        </h3>
                        <p className='mt-2 font-montserrat text-base font-semibold text-gray-900'>
                            {contactVisitChannel.addressLine}
                        </p>
                        <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                            {contactVisitChannel.description}
                        </p>
                    </li>

                    <li className='flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card'>
                        <p className='font-montserrat text-xs font-semibold uppercase tracking-wide text-brand-blue'>
                            {contactPhoneChannel.eyebrow}
                        </p>
                        <PhoneIcon
                            className='mt-3 h-6 w-6 text-brand-blue'
                            aria-hidden='true'
                        />
                        <h3 className='mt-4 font-montserrat text-lg font-bold text-gray-900'>
                            {contactPhoneChannel.title}
                        </h3>
                        {telHref ? (
                            <a
                                href={telHref}
                                className='mt-2 w-fit font-montserrat text-base font-semibold text-brand-blue underline-offset-2 hover:underline'
                            >
                                {securityAgencyPhone}
                            </a>
                        ) : (
                            <p className='mt-2 font-montserrat text-sm leading-relaxed text-gray-600'>
                                {contactPhoneFallbackLine}
                            </p>
                        )}
                        <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                            {contactPhoneChannel.description}
                        </p>
                    </li>
                </ul>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='contact-practical-heading'
            >
                <h2
                    id='contact-practical-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {contactPracticalTitle}
                </h2>
                <dl className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {contactPracticalLabelAddress}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {contactPracticalAddress}
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {contactPracticalLabelHours}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {contactPracticalWeekHours}
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {contactPracticalLabelSunday}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {contactPracticalSunday}
                        </dd>
                    </div>
                    <div>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {contactPracticalLabelCompany}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {contactPracticalCompany}
                        </dd>
                    </div>
                    <div className='sm:col-span-2'>
                        <dt className='font-montserrat text-xs font-semibold uppercase tracking-wide text-gray-400'>
                            {contactResponsibleTitle}
                        </dt>
                        <dd className='mt-1 font-montserrat text-base text-gray-700'>
                            {contactResponsibleLine}
                        </dd>
                    </div>
                </dl>
            </section>

            <section
                className='mt-14 sm:mt-16'
                aria-labelledby='contact-reasons-heading'
            >
                <h2
                    id='contact-reasons-heading'
                    className='font-montserrat text-2xl font-bold text-gray-900 sm:text-3xl'
                >
                    {contactReasonsTitle}
                </h2>
                <ul className='mt-8 space-y-4'>
                    {contactReasonsItems.map(({ title, description }) => (
                        <li
                            key={title}
                            className='rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-5 shadow-soft-card sm:px-6'
                        >
                            <h3 className='font-montserrat text-base font-bold text-gray-900 sm:text-lg'>
                                {title}
                            </h3>
                            <p className='mt-2 font-montserrat text-sm leading-relaxed text-gray-600'>
                                {description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <BrandCtaCard
                className='mt-14 sm:mt-16'
                headingId='contact-cta-heading'
                title={contactCtaTitle}
                body={contactCtaBody}
                href={whatsappCtaHref}
                buttonLabel={heroCtaPrimaryLabel}
            />
        </div>
    );
};

export default Contact;
