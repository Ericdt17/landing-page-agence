import SEO from "../SEO";
import { links } from "../../constants/routes";
import { fill, useCopy } from "../../i18n/useCopy";
import SiteLayout from "./SiteLayout";
import WhatsAppButton from "./WhatsAppButton";

const paragraphClass = "ls-body text-ls-muted";

const CookieTable = ({ doc }) => (
  <div role='region' aria-label={doc.tableLabel} tabIndex={0} className='mt-4 overflow-x-auto rounded-xl border border-ls-rule'>
    <table className='w-full min-w-[640px] border-collapse text-left text-sm text-ls-muted'>
      <thead>
        <tr className='border-b border-ls-rule bg-ls-fill'>
          {["type", "name", "role", "duration", "active"].map((key) => (
            <th key={key} scope='col' className='px-4 py-3 font-bold text-ls-text'>
              {doc.columns[key]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {doc.rows.map((row) => (
          <tr key={row.name} className='border-b border-ls-rule last:border-b-0'>
            {["type", "name", "role", "duration", "active"].map((key) => (
              <td key={key} className='px-4 py-3 align-top'>
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BrowserHints = ({ doc }) => (
  <ul className='mt-4 flex flex-col gap-3 border-l-2 border-ls-rule pl-4'>
    {doc.browsers.map((item) => (
      <li key={item.browser} className={paragraphClass}>
        <span className='font-bold text-ls-text'>{item.browser}</span> · {item.steps}
      </li>
    ))}
  </ul>
);

const AgencyLines = ({ agency }) => (
  <ul className={`mt-4 flex flex-col gap-3 border-l-2 border-ls-rule pl-4 ${paragraphClass}`}>
    <li>
      <span className='font-bold text-ls-text'>{agency.whatsappLabel}</span>{" "}
      <a href={links.whatsapp} target='_blank' rel='noopener noreferrer' className='ls-link underline underline-offset-2'>
        {agency.whatsappLink}
      </a>
    </li>
    <li>
      <span className='font-bold text-ls-text'>{agency.emailLabel}</span>{" "}
      <a href={`mailto:${links.email}`} className='ls-link underline underline-offset-2'>
        {links.email}
      </a>
    </li>
    <li>
      <span className='font-bold text-ls-text'>{agency.addressLabel}</span> {agency.address}
    </li>
  </ul>
);

/**
 * Document légal (conditions, confidentialité, cookies, sécurité) dans la
 * langue du visiteur. En anglais, une note rappelle que la version française
 * fait foi.
 */
const LegalPage = ({ namespace, canonical }) => {
  const doc = useCopy(namespace);
  const { legal } = useCopy("site");

  return (
    <>
      <SEO title={doc.seo.title} description={doc.seo.description} canonical={canonical} />
      <SiteLayout>
        <header className='px-[18px] pb-10 pt-11 md:px-16 md:pb-12 md:pt-[84px]'>
          <div className='flex max-w-3xl flex-col gap-4'>
            <h1 className='ls-h ls-d1'>{doc.title}</h1>
            <p className='ls-cap text-ls-faint'>{doc.updated}</p>
            {legal.translationNote && (
              <p className='rounded-xl border border-ls-rule bg-ls-fill px-4 py-3 text-sm text-ls-muted'>{legal.translationNote}</p>
            )}
          </div>
        </header>

        <article className='px-[18px] pb-16 md:px-16 md:pb-[88px]'>
          <div className='max-w-3xl border-t border-ls-rule pt-10'>
            <p className='ls-lede text-ls-muted'>{doc.intro}</p>

            {doc.sections && (
              <div className='mt-12 flex flex-col gap-10'>
                {doc.sections.map((section) => (
                  <section key={section.number} aria-labelledby={`legal-${section.number}`}>
                    <div className='flex items-baseline gap-3'>
                      <span className='ls-num text-sm font-semibold text-ls-accent'>{section.number}</span>
                      <h2 id={`legal-${section.number}`} className='ls-h ls-d3'>
                        {section.title}
                      </h2>
                    </div>
                    <p className={`mt-3 ${paragraphClass}`}>{section.body}</p>
                    {section.items.length > 0 && (
                      <ul className='mt-3 flex flex-col gap-2'>
                        {section.items.map((item) => (
                          <li key={item} className={`flex gap-2 ${paragraphClass}`}>
                            <span aria-hidden='true' className='text-ls-faint'>
                              ·
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}

            {doc.groups && (
              <div className='mt-12 flex flex-col gap-12'>
                {doc.groups.map((group) => (
                  <section key={group.title} aria-label={group.title}>
                    <h2 className='ls-kicker text-ls-accent'>{group.title}</h2>
                    <div className='mt-6 flex flex-col gap-9'>
                      {group.articles.map((article) => (
                        <div key={article.art}>
                          <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                            <span className='ls-num text-xs font-semibold text-ls-accent'>
                              {fill(legal.article, { number: article.art })}
                            </span>
                            <h3 className='ls-h text-[19px]'>{article.title}</h3>
                          </div>
                          <div className='mt-3 flex flex-col gap-3'>
                            {article.paragraphs.map((paragraph) => (
                              <p key={paragraph.slice(0, 40)} className={paragraphClass}>
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          {article.highlight && (
                            <p className='mt-4 rounded-xl border border-ls-rule bg-ls-fill px-4 py-3 text-sm font-semibold leading-6 text-ls-text'>
                              {article.highlight}
                            </p>
                          )}
                          {article.table && <CookieTable doc={doc} />}
                          {article.browsers && <BrowserHints doc={doc} />}
                          {article.agency && <AgencyLines agency={doc.agency} />}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}

            <aside aria-labelledby='legal-contact' className='mt-14 rounded-[26px] border border-ls-rule bg-ls-fill p-6 md:p-8'>
              <h2 id='legal-contact' className='ls-h text-[19px]'>
                {legal.contactTitle}
              </h2>
              <p className={`mt-2 ${paragraphClass}`}>{doc.contactIntro}</p>
              <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
                <a href={`mailto:${links.email}`} className='ls-btn ls-btn-line'>
                  {links.email}
                </a>
                <WhatsAppButton className='ls-btn ls-btn-solid'>
                  {legal.whatsappCta}
                </WhatsAppButton>
              </div>
            </aside>
          </div>
        </article>
      </SiteLayout>
    </>
  );
};

export default LegalPage;
