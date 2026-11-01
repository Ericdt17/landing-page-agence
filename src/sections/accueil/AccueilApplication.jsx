import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import ScreenTour from "../../components/site/ScreenTour";
import { useCopy } from "../../i18n/useCopy";
import {
  CoursesScreen,
  HomeScreen,
  InboxScreen,
  ReportsScreen,
  StockScreen,
  ZonesScreen,
} from "../application/PhoneScreens";

const screens = {
  accueil: HomeScreen,
  courses: CoursesScreen,
  stock: StockScreen,
  rapports: ReportsScreen,
  inbox: InboxScreen,
  tarifs: ZonesScreen,
};

/**
 * Présentation de l'application par la visite des vraies captures (les mêmes
 * que la page Espace commerçant). Les maquettes dessinées restent bannies
 * (décision du 2026-10-24) : la frise « itinéraire » qui en tenait lieu a
 * cédé la place aux captures réelles le 2026-11-01.
 */
const AccueilApplication = () => {
  const { app } = useCopy("accueil");
  return (
  <section aria-labelledby='accueil-application' className='px-[18px] pb-16 pt-14 md:px-16 md:pb-[76px] md:pt-[84px]'>
    <div className='grid grid-cols-1 items-end gap-6 pb-10 md:grid-cols-2 md:gap-[72px] md:pb-12'>
      <div className='flex flex-col gap-[18px]'>
        <span className='ls-kicker text-ls-accent'>{app.kicker}</span>
        <h2 id='accueil-application' className='ls-h ls-d2 max-w-[20ch]'>
          {app.title}
        </h2>
      </div>
      <div className='flex max-w-[46ch] flex-col gap-4'>
        <p className='ls-body text-ls-muted'>{app.body}</p>
        <Link to={routes.application} className='ls-link inline-flex w-fit items-center gap-1.5 text-sm'>
          {app.link}
          <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
        </Link>
      </div>
    </div>

    <ScreenTour label={app.tourLabel} tabs={app.tabs} screens={screens} />
  </section>
  );
};

export default AccueilApplication;
