import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import InkHero from "../components/site/InkHero";
import SiteLayout from "../components/site/SiteLayout";
import { routes } from "../constants/routes";
import { LandingPublicProvider, useLandingPublic } from "../context/LandingPublicContext";
import { useCopy, useLanguage } from "../i18n/useCopy";

/* Le nombre de commerçants vient de l'API publique : sans réponse, un point, jamais un chiffre inventé */
const Stats = ({ copy }) => {
  const { clientsCount } = useLandingPublic();
  const { language } = useLanguage();
  const clients =
    clientsCount != null ? new Intl.NumberFormat(language === "en" ? "en-GB" : "fr-FR").format(clientsCount) : "·";
  const items = [
    { id: "presence", value: copy.stats.presence.value, label: copy.stats.presence.label },
    { id: "clients", value: clients, label: copy.stats.clients.label },
    { id: "payout", value: copy.stats.payout.value, label: copy.stats.payout.label },
  ];

  return (
    <dl aria-label={copy.statsLabel} className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule sm:grid-cols-3'>
      {items.map((item) => (
        <div key={item.id} className='flex flex-col-reverse gap-2 bg-ls-bg py-7 sm:px-6 sm:first:pl-0'>
          <dt className='ls-kicker text-ls-faint'>{item.label}</dt>
          <dd className='ls-num text-[32px] leading-none' aria-busy={item.id === "clients" && clientsCount == null ? "true" : undefined}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

const AProposPage = () => {
  const copy = useCopy("apropos");
  const { seo, hero, principles, closing, company } = copy;

  return (
    <LandingPublicProvider>
      <SEO title={seo.title} description={seo.description} canonical={routes.apropos} />
      <SiteLayout>
        <InkHero id='apropos-titre' kicker={hero.kicker} title={hero.title} lede={hero.lede} />

        <section aria-label={copy.principlesLabel} className='px-[18px] pt-12 md:px-16 md:pt-[68px]'>
          <ol className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
            {principles.map((item) => (
              <li key={item.number} className='flex flex-col gap-3 rounded-[26px] border border-ls-rule p-7 md:p-8'>
                <span className='ls-num text-sm font-semibold text-ls-accent'>{item.number}</span>
                <h2 className='ls-h text-[21px] leading-tight'>{item.title}</h2>
                <p className='ls-cap text-ls-muted'>{item.text}</p>
              </li>
            ))}
          </ol>
          <p className='ls-lede max-w-[62ch] pt-12 text-ls-muted md:pt-14'>{closing}</p>
        </section>

        <section aria-labelledby='apropos-entreprise' className='grid grid-cols-1 gap-10 px-[18px] pb-16 pt-14 md:px-16 md:pb-[88px] md:pt-[68px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-[72px]'>
          <Stats copy={copy} />
          <div className='flex flex-col gap-3 rounded-[26px] bg-ls-ink-bg p-7 text-ls-ink-fg md:p-8'>
            <h2 id='apropos-entreprise' className='ls-kicker text-ls-ink-speed'>
              {company.title}
            </h2>
            <ul className='flex flex-col gap-1.5 text-sm text-ls-ink-mute'>
              {company.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link to={routes.contact} className='ls-btn ls-btn-ink mt-3 self-start'>
              {company.cta}
            </Link>
          </div>
        </section>
      </SiteLayout>
    </LandingPublicProvider>
  );
};

export default AProposPage;
