import {
  footerSupportEmail,
  termsContactIntro,
  termsGroups,
  termsPageIntro,
  whatsappCtaHref,
} from "../constants";

const ConditionsSection = () => {
  return (
    <div className='max-w-3xl pb-16 pt-2'>
      <p className='font-montserrat text-base leading-7 text-ls-muted sm:text-lg sm:leading-8'>
        {termsPageIntro}
      </p>

      <div className='mt-12 flex flex-col gap-12'>
        {termsGroups.map((group) => (
          <div key={group.groupTitle}>
            <h2 className='font-montserrat text-sm font-bold uppercase tracking-[0.14em] text-ls-accent'>
              {group.groupTitle}
            </h2>
            <div className='mt-8 flex flex-col gap-10'>
              {group.articles.map((article) => (
                <div key={article.art}>
                  <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                    <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-ls-accent'>
                      Art. {article.art}
                    </span>
                    <h3 className='font-montserrat text-lg font-bold text-ls-text sm:text-xl'>
                      {article.title}
                    </h3>
                  </div>
                  <div className='mt-3 flex flex-col gap-3'>
                    {article.paragraphs.map((para, idx) => (
                      <p
                        key={`${article.art}-${idx}`}
                        className='font-montserrat text-sm leading-6 text-ls-muted sm:text-base sm:leading-7'
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  {article.highlightLine ? (
                    <p className='mt-4 rounded-xl border border-ls-rule bg-ls-fill px-4 py-3 font-montserrat text-sm font-semibold leading-6 text-ls-text sm:text-base'>
                      {article.highlightLine}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-14 rounded-2xl border border-ls-rule bg-ls-fill p-6 sm:p-8'>
        <h2 className='font-montserrat text-base font-bold text-ls-text sm:text-lg'>
          Nous contacter
        </h2>
        <p className='mt-2 font-montserrat text-sm leading-6 text-ls-muted sm:text-base sm:leading-7'>
          {termsContactIntro}
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

export default ConditionsSection;
