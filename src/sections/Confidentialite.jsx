import {
  footerSupportEmail,
  privacyPageIntro,
  privacySections,
  whatsappCtaHref,
} from "../constants";

const ConfidentialiteSection = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'>
      {/* Intro */}
      <p className='font-montserrat text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
        {privacyPageIntro}
      </p>

      {/* Sections */}
      <div className='mt-12 flex flex-col gap-10'>
        {privacySections.map((section) => (
          <div key={section.number}>
            <div className='flex items-baseline gap-3'>
              <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-brand-ink'>
                {section.number}
              </span>
              <h2 className='font-montserrat text-lg font-bold text-gray-900 sm:text-xl'>
                {section.title}
              </h2>
            </div>

            <p className='mt-3 font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'>
              {section.body}
            </p>

            {section.items.length > 0 && (
              <ul className='mt-3 flex flex-col gap-2'>
                {section.items.map((item) => (
                  <li key={item} className='flex items-start gap-2.5'>
                    <span
                      className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink'
                      aria-hidden='true'
                    />
                    <span className='font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Contact card */}
      <div className='mt-14 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8'>
        <h2 className='font-montserrat text-base font-bold text-gray-900 sm:text-lg'>
          Nous contacter
        </h2>
        <p className='mt-2 font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'>
          Pour toute question relative à cette politique ou pour exercer vos
          droits, notre équipe est disponible :
        </p>
        <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4'>
          <a
            href={`mailto:${footerSupportEmail}`}
            className='inline-flex items-center justify-center rounded-full border border-brand-blue px-6 py-3 font-montserrat text-sm font-bold text-brand-ink transition-colors hover:bg-brand-ink hover:text-white'
          >
            {footerSupportEmail}
          </a>
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-brand-ink px-6 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-brand-blue/90'
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialiteSection;
