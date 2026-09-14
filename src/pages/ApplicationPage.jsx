import SEO from "../components/SEO";
import ScreenTour from "../components/site/ScreenTour";
import SiteLayout from "../components/site/SiteLayout";
import { routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";
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
import WhatsAppButton from "../components/site/WhatsAppButton";

const soonScreens = { planning: PlanningScreen, livreur: CourierScreen, retrait: WithdrawScreen };

const todayScreens = {
  accueil: HomeScreen,
  courses: CoursesScreen,
  stock: StockScreen,
  rapports: ReportsScreen,
  inbox: InboxScreen,
  tarifs: ZonesScreen,
};

const ApplicationPage = () => {
  const { seo, hero, soon, today, install, screensNote } = useCopy("application");
  return (
  <>
    <SEO title={seo.title} description={seo.description} canonical={routes.application} />
    <SiteLayout>
      <section
        aria-labelledby='application-titre'
        className='grid grid-cols-1 items-end gap-10 px-[18px] pb-12 pt-11 md:px-16 md:pb-[60px] md:pt-[84px] lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[72px]'
      >
        <div className='flex flex-col gap-6 md:gap-[26px]'>
          <span className='ls-kicker text-ls-accent'>{hero.kicker}</span>
          <h1 id='application-titre' className='ls-h ls-d1 max-w-[17ch]'>
            {hero.title}
          </h1>
          <p className='ls-lede ls-measure text-ls-muted'>{hero.lede}</p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid'>
              {hero.primary}
            </WhatsAppButton>
            <a href='#ecrans' className='ls-btn ls-btn-lg ls-btn-line'>
              {hero.secondary}
            </a>
          </div>
        </div>
        <dl className='flex flex-col border-t border-ls-rule'>
          {hero.facts.map((fact) => (
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
              <span className='ls-kicker text-ls-speed'>{soon.kicker}</span>
              <h2 id='application-bientot' className='ls-h ls-d2 max-w-[22ch]'>
                {soon.title}
              </h2>
            </div>
            <p className='ls-body max-w-[48ch] text-ls-muted'>{soon.body}</p>
          </div>

          <ScreenTour label={soon.tourLabel} tabs={soon.tabs} screens={soonScreens} height={430} />

          <div className='h-px bg-ls-rule' />
          <div className='grid grid-cols-1 gap-8 pt-1 md:grid-cols-3'>
            {soon.columns.map((column) => (
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
              <span className='ls-kicker text-ls-accent'>{today.kicker}</span>
              <h2 id='application-ecrans' className='ls-h ls-d2 max-w-[20ch]'>
                {today.title}
              </h2>
            </div>
            <p className='ls-body max-w-[46ch] text-ls-muted'>{today.body}</p>
          </div>
          <ScreenTour label={today.tourLabel} tabs={today.tabs} screens={todayScreens} />
          {screensNote && <p className='ls-cap pt-6 text-center text-ls-faint'>{screensNote}</p>}
        </div>
      </section>

      <section aria-labelledby='application-installation' className='bg-ls-ink-bg px-[18px] py-14 text-ls-ink-fg md:px-16 md:py-[72px]'>
        <div className='grid grid-cols-1 items-end gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-[72px]'>
          <div className='flex flex-col gap-[18px]'>
            <h2 id='application-installation' className='ls-h ls-d2 max-w-[24ch]'>
              {install.title}
            </h2>
            <p className='ls-body max-w-[52ch] text-ls-ink-mute'>{install.body}</p>
          </div>
          <div className='flex flex-col gap-2.5'>
            <WhatsAppButton className='ls-btn ls-btn-ink'>
              {install.primary}
            </WhatsAppButton>
            <Link to={routes.contact} className='ls-btn ls-btn-ink-line'>
              {install.secondary}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  </>
  );
};

export default ApplicationPage;
