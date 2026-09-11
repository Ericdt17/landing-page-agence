import {
  footerSupportEmail,
  securityAgencyAddress,
  securityAgencyPhone,
  securityContactIntro,
  securityGroups,
  securityPageIntro,
  whatsappCtaHref,
} from "../constants";

const AgencyContactLines = () => {
  const phone = securityAgencyPhone?.trim() ?? "";
  const telHref = phone ? `tel:${phone.replace(/\s/g, "")}` : "";

  return (
    <ul className='mt-4 flex list-none flex-col gap-3 border-l-2 border-brand-blue/30 pl-4 font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'>
      <li>
        <span className='font-bold text-gray-900'>WhatsApp / Téléphone :</span>{" "}
        {phone ? (
          <>
            <a
              href={whatsappCtaHref}
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-brand-ink underline decoration-brand-blue/30 underline-offset-2 hover:opacity-90'
            >
              WhatsApp
            </a>
            {" · "}
            <a
              href={telHref}
              className='font-semibold text-brand-ink underline decoration-brand-blue/30 underline-offset-2 hover:opacity-90'
            >
              {phone}
            </a>
          </>
        ) : (
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-brand-ink underline decoration-brand-blue/30 underline-offset-2 hover:opacity-90'
          >
            Ouvrir le WhatsApp officiel LivSight
          </a>
        )}
      </li>
      <li>
        <span className='font-bold text-gray-900'>Email :</span>{" "}
        <a
          href={`mailto:${footerSupportEmail}`}
          className='font-semibold text-brand-ink underline decoration-brand-blue/30 underline-offset-2 hover:opacity-90'
        >
          {footerSupportEmail}
        </a>
      </li>
      <li>
        <span className='font-bold text-gray-900'>Adresse :</span>{" "}
        {securityAgencyAddress}
      </li>
    </ul>
  );
};

const SecuriteSection = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'>
      <p className='font-montserrat text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
        {securityPageIntro}
      </p>

      <div className='mt-12 flex flex-col gap-12'>
        {securityGroups.map((group) => (
          <div key={group.groupTitle}>
            <h2 className='font-montserrat text-sm font-bold uppercase tracking-[0.14em] text-brand-ink'>
              {group.groupTitle}
            </h2>
            <div className='mt-8 flex flex-col gap-10'>
              {group.articles.map((article) => (
                <div key={article.art}>
                  <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                    <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-brand-ink'>
                      Art. {article.art}
                    </span>
                    <h3 className='font-montserrat text-lg font-bold text-gray-900 sm:text-xl'>
                      {article.title}
                    </h3>
                  </div>
                  <div className='mt-3 flex flex-col gap-3'>
                    {article.paragraphs.map((para, idx) => (
                      <p
                        key={`${article.art}-${idx}`}
                        className='font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {article.highlightLine ? (
                    <p className='mt-4 rounded-xl border border-brand-blue/20 bg-brand-blue/5 px-4 py-3 font-montserrat text-sm font-semibold leading-6 text-gray-800 sm:text-base'>
                      {article.highlightLine}
                    </p>
                  ) : null}
                  {article.showAgencyContactLines ? (
                    <AgencyContactLines />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-14 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8'>
        <h2 className='font-montserrat text-base font-bold text-gray-900 sm:text-lg'>
          Nous contacter
        </h2>
        <p className='mt-2 font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'>
          {securityContactIntro}
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

export default SecuriteSection;
