import SEO from "../components/SEO";
import ScreenTour from "../components/site/ScreenTour";
import SiteLayout from "../components/site/SiteLayout";
import {
  applicationHero,
  applicationInstall,
  applicationSeo,
  applicationSoon,
  applicationToday,
} from "../constants/application";
import { entrepriseContactPath } from "../constants/contact";
import { siteApplicationPath, siteWhatsappHref } from "../constants/site";
import { Link } from "react-router-dom";
import {
  CoursesScreen,
  CourierScreen,
  HomeScreen,
  InboxScreen,
  PlanningScreen,
  ReportsScreen,
  StockScreen,
  WithdrawScreen,
  ZonesScreen,
} from "../sections/application/PhoneScreens";

const soonScreens = { planning: PlanningScreen, livreur: CourierScreen, retrait: WithdrawScreen };

const todayScreens = {
  accueil: HomeScreen,
  courses: CoursesScreen,
  stock: StockScreen,
  rapports: ReportsScreen,
  inbox: InboxScreen,
  tarifs: ZonesScreen,
};

const ApplicationPage = () => (
  <>
    <SEO title={applicationSeo.title} description={applicationSeo.description} canonical={siteApplicationPath} />
    <SiteLayout>
      <section
        aria-labelledby='application-titre'
        className='grid grid-cols-1 items-end gap-10 px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[72px]'
      >
        <div className='flex flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{applicationHero.kicker}</span>
          <h1 id='application-titre' className='ls-h ls-d1 max-w-[17ch]'>
            {applicationHero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{applicationHero.lede}</p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-lg ls-btn-solid'>
              {applicationHero.primary}
            </a>
            <a href='#ecrans' className='ls-btn ls-btn-lg ls-btn-line'>
              {applicationHero.secondary}
            </a>
          </div>
        </div>
        <dl className='flex flex-col border-t border-ls-rule'>
          {applicationHero.facts.map((fact) => (
            <div key={fact.label} className='flex items-baseline justify-between gap-6 border-b border-ls-rule py-4'>
              <dt className='ls-cap text-ls-muted'>{fact.label}</dt>
              <dd className='ls-num text-[13px] font-semibold'>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby='application-bientot' className='px-[18px] pb-16 md:px-16 md:pb-[76px]'>
        <div className='flex flex-col gap-10 border-t border-ls-rule pt-11'>
          <div className='grid grid-cols-1 items-end gap-5 md:grid-cols-2 md:gap-[72px]'>
            <div className='flex flex-col gap-4'>
              <span className='ls-kicker text-ls-speed'>{applicationSoon.kicker}</span>
              <h2 id='application-bientot' className='ls-h ls-d2 max-w-[22ch]'>
                {applicationSoon.title}
              </h2>
            </div>
            <p className='ls-body max-w-[48ch] text-ls-muted'>{applicationSoon.body}</p>
          </div>

          <ScreenTour label={applicationSoon.tourLabel} tabs={applicationSoon.tabs} screens={soonScreens} height={430} />

          <div className='h-px bg-ls-rule' />
          <div className='grid grid-cols-1 gap-8 pt-1 md:grid-cols-3'>
            {applicationSoon.columns.map((column) => (
              <div key={column.title} className='flex flex-col gap-2'>
                <h3 className='ls-h ls-d3'>{column.title}</h3>
                <p className='ls-cap text-ls-muted'>{column.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='ecrans' aria-labelledby='application-ecrans' className='scroll-mt-6 px-[18px] pb-16 md:px-16 md:pb-[84px]'>
        <div className='border-t border-ls-rule pt-11'>
          <div className='grid grid-cols-1 items-end gap-5 pb-10 md:grid-cols-2 md:gap-[72px] md:pb-11'>
            <div className='flex flex-col gap-4'>
              <span className='ls-kicker text-ls-accent'>{applicationToday.kicker}</span>
              <h2 id='application-ecrans' className='ls-h ls-d2 max-w-[20ch]'>
                {applicationToday.title}
              </h2>
            </div>
            <p className='ls-body max-w-[46ch] text-ls-muted'>{applicationToday.body}</p>
          </div>
          <ScreenTour label={applicationToday.tourLabel} tabs={applicationToday.tabs} screens={todayScreens} />
        </div>
      </section>

      <section aria-labelledby='application-installation' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[72px]'>
        <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
          <div className='flex flex-col gap-[18px]'>
            <h2 id='application-installation' className='ls-h ls-d2 max-w-[24ch]'>
              {applicationInstall.title}
            </h2>
            <p className='ls-body max-w-[52ch] text-ls-ink-mute'>{applicationInstall.body}</p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <a href={siteWhatsappHref} target='_blank' rel='noopener noreferrer' className='ls-btn ls-btn-ink'>
              {applicationInstall.primary}
            </a>
            <Link to={entrepriseContactPath} className='ls-btn ls-btn-ink-line'>
              {applicationInstall.secondary}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  </>
);

export default ApplicationPage;
