import {
  cookieBrowserHints,
  cookieGroups,
  cookieRecapColumnLabels,
  cookieRecapRows,
  cookiesContactIntro,
  cookiesPageIntro,
  footerSupportEmail,
  whatsappCtaHref,
} from "../constants";

const CookieRecapTable = () => {
  const { type, name, role, duration, active } = cookieRecapColumnLabels;

  return (
    <div className='mt-4 overflow-x-auto rounded-xl border border-gray-200'>
      <table className='w-full min-w-[640px] border-collapse text-left font-montserrat text-sm text-gray-600'>
        <thead>
          <tr className='border-b border-gray-200 bg-gray-50'>
            <th className='px-3 py-3 font-bold text-gray-900 sm:px-4' scope='col'>
              {type}
            </th>
            <th className='px-3 py-3 font-bold text-gray-900 sm:px-4' scope='col'>
              {name}
            </th>
            <th className='px-3 py-3 font-bold text-gray-900 sm:px-4' scope='col'>
              {role}
            </th>
            <th className='px-3 py-3 font-bold text-gray-900 sm:px-4' scope='col'>
              {duration}
            </th>
            <th className='px-3 py-3 font-bold text-gray-900 sm:px-4' scope='col'>
              {active}
            </th>
          </tr>
        </thead>
        <tbody>
          {cookieRecapRows.map((row) => (
            <tr
              key={`${row.type}-${row.name}`}
              className='border-b border-gray-100 last:border-b-0'
            >
              <td className='px-3 py-3 align-top sm:px-4'>{row.type}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.name}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.role}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.duration}</td>
              <td className='px-3 py-3 align-top sm:px-4'>{row.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BrowserHintsList = () => (
  <ul className='mt-4 flex list-none flex-col gap-3 border-l-2 border-brand-blue/30 pl-4'>
    {cookieBrowserHints.map((item) => (
      <li
        key={item.browser}
        className='font-montserrat text-sm leading-6 text-gray-600 sm:text-base sm:leading-7'
      >
        <span className='font-bold text-gray-900'>{item.browser}</span>
        {" · "}
        {item.steps}
      </li>
    ))}
  </ul>
);

const CookiesSection = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16'>
      <p className='font-montserrat text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
        {cookiesPageIntro}
      </p>

      <div className='mt-12 flex flex-col gap-12'>
        {cookieGroups.map((group) => (
          <div key={group.groupTitle}>
            <h2 className='font-montserrat text-sm font-bold uppercase tracking-[0.14em] text-brand-blue'>
              {group.groupTitle}
            </h2>
            <div className='mt-8 flex flex-col gap-10'>
              {group.articles.map((article) => (
                <div key={article.art}>
                  <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                    <span className='font-montserrat text-xs font-bold tracking-[0.14em] text-brand-blue'>
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
                  {article.showCookieTable ? <CookieRecapTable /> : null}
                  {article.showBrowserHints ? <BrowserHintsList /> : null}
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
          {cookiesContactIntro}
        </p>
        <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:gap-4'>
          <a
            href={`mailto:${footerSupportEmail}`}
            className='inline-flex items-center justify-center rounded-full border border-brand-blue px-6 py-3 font-montserrat text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white'
          >
            {footerSupportEmail}
          </a>
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-brand-blue/90'
          >
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookiesSection;
