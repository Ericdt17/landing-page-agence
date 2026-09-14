import {
  footerSupportEmail,
  privacyPageIntro,
  privacySections,
  whatsappCtaHref,
} from "../constants";

const ConfidentialiteSection = () => {
  return (
    <div className='max-w-3xl pb-16 pt-2'>
      {/* Intro */}
      <p className='font-montserrat text-base leading-7 text-ls-muted sm:text-lg sm:leading-8'>
        {privacyPageIntro}
      </p>

      {/* Sections */}
      <div className='mt-12 flex flex-col gap-10'>
        {privacySections.map((section) => (
          <div key={section.number}>
            <div className='flex items-baseline gap-3'>
              <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-ls-accent'>
                {section.number}
              </span>
              <h2 className='font-montserrat text-lg font-bold text-ls-text sm:text-xl'>
                {section.title}
              </h2>
            </div>

            <p className='mt-3 font-montserrat text-sm leading-6 text-ls-muted sm:text-base sm:leading-7'>
              {section.body}
            </p>

            {section.items.length > 0 && (
              <ul className='mt-3 flex flex-col gap-2'>
                {section.items.map((item) => (
                  <li key={item} className='flex items-start gap-2.5'>
                    <span
                      className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ls-text'
                      aria-hidden='true'
                    />
                    <span className='font-montserrat text-sm leading-6 text-ls-muted sm:text-base sm:leading-7'>
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
      <div className='mt-14 rounded-2xl border border-ls-rule bg-ls-fill p-6 sm:p-8'>
        <h2 className='font-montserrat text-base font-bold text-ls-text sm:text-lg'>
          Nous contacter
        </h2>
        <p className='mt-2 font-montserrat text-sm leading-6 text-ls-muted sm:text-base sm:leading-7'>
          Pour toute question relative à cette politique ou pour exercer vos
          droits, notre équipe est disponible :
        </p>
        <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4'>
          <a
            href={`mailto:${footerSupportEmail}`}
            className='inline-flex items-center justify-center rounded-full border border-ls-rule px-6 py-3 font-montserrat text-sm font-bold text-ls-accent transition-colors hover:bg-ls-muted hover:text-ls-bg'
          >
            {footerSupportEmail}
          </a>
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-ls-text px-6 py-3 font-montserrat text-sm font-bold text-ls-bg transition-colors hover:bg-ls-muted'
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialiteSection;
