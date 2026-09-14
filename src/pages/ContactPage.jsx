import { ChatBubbleLeftRightIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import SEO from "../components/SEO";
import InkHero from "../components/site/InkHero";
import WhatsAppButton from "../components/site/WhatsAppButton";
import SiteLayout from "../components/site/SiteLayout";
import { links, routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";

const channelRows = [
  { id: "whatsapp", Icon: ChatBubbleLeftRightIcon, href: links.whatsapp, external: true, primary: true },
  { id: "email", Icon: EnvelopeIcon, href: `mailto:${links.email}`, detail: links.email },
  { id: "phone", Icon: PhoneIcon },
];

const ContactPage = () => {
  const { seo, hero, channelsLabel, channels, place, reasons, company } = useCopy("contact");

  return (
    <>
      <SEO title={seo.title} description={seo.description} canonical={routes.contact} />
      <SiteLayout>
        <InkHero id='contact-titre' kicker={hero.kicker} title={hero.title} lede={hero.lede} />

        <div className='grid grid-cols-1 gap-10 px-[18px] pb-16 pt-12 md:px-16 md:pb-[88px] md:pt-[68px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-11'>
          <div className='flex flex-col gap-10'>
            <section aria-label={channelsLabel}>
              <ul className='flex flex-col gap-4'>
                {channelRows.map(({ id, Icon, href, external, primary, detail }) => (
                  <li
                    key={id}
                    className={`flex flex-col gap-4 rounded-[26px] border p-6 sm:flex-row sm:items-center sm:gap-5 md:p-7 ${
                      primary ? "border-ls-primary bg-ls-select" : "border-ls-rule bg-ls-surface"
                    }`}
                  >
                    <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ls-surface text-ls-text'>
                      <Icon className='h-6 w-6' aria-hidden='true' />
                    </span>
                    <div className='flex flex-1 flex-col gap-1'>
                      <h2 className='ls-h text-[20px]'>{channels[id].title}</h2>
                      <p className='ls-cap text-ls-muted'>{channels[id].text}</p>
                      {detail && <p className='text-sm font-semibold text-ls-accent'>{detail}</p>}
                    </div>
                    {external ? (
                      <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid shrink-0 self-start sm:self-auto'>
                        {channels[id].cta}
                      </WhatsAppButton>
                    ) : href ? (
                      <a href={href} className='ls-btn ls-btn-line shrink-0 self-start sm:self-auto'>
                        {channels[id].cta}
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby='contact-raisons'>
              <h2 id='contact-raisons' className='ls-kicker pb-4 text-ls-muted'>
                {reasons.title}
              </h2>
              <ul className='flex flex-wrap gap-2.5'>
                {reasons.items.map((reason) => (
                  <li key={reason.id}>
                    <a
                      href={
                        reason.channel === "email"
                          ? `mailto:${links.email}?subject=${encodeURIComponent(reason.subject)}`
                          : links.whatsapp
                      }
                      {...(reason.channel === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      className='inline-flex min-h-[40px] items-center rounded-full border border-ls-stroke bg-ls-surface px-4 text-sm transition-colors hover:border-ls-text'
                    >
                      {reason.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3 rounded-[26px] border border-ls-rule p-6 md:p-7'>
              <h2 className='ls-h text-[20px]'>{place.title}</h2>
              <ul className='flex flex-col gap-1 text-sm text-ls-muted'>
                {place.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-1.5 rounded-[26px] bg-ls-fill p-6 text-sm md:p-7'>
              <h2 className='ls-kicker pb-1 text-ls-faint'>{company.title}</h2>
              <p className='font-semibold'>{company.name}</p>
            </div>
          </aside>
        </div>
      </SiteLayout>
    </>
  );
};

export default ContactPage;
