import {
  appEcranAccueil,
  appEcranCourses,
  appEcranInbox,
  appEcranRapports,
  appEcranStock,
  appEcranTarifs,
} from "../../assets/images";

/**
 * Écrans de l'application commerçant : uniquement de vraies captures
 * (appClient, dossier sreenshots/store, converties en webp 480 px). Les
 * maquettes dessinées des fonctionnalités « bientôt » ont été retirées :
 * on ne montre pas d'écrans qui n'existent pas. Tout est masqué aux
 * lecteurs d'écran : la légende de la visite décrit chaque écran.
 */

/* Capture réelle de l'app, au format natif du téléphone (1206 × 2622) :
   202 px de large pour tenir entière dans les 440 px de la visite */
const CaptureScreen = ({ src }) => (
  <div aria-hidden='true' className='mx-auto w-[202px] overflow-hidden rounded-[30px] border border-ls-rule bg-ls-surface'>
    <img src={src} alt='' width='480' height='1044' loading='lazy' className='w-full' />
  </div>
);

export const HomeScreen = () => <CaptureScreen src={appEcranAccueil} />;
export const CoursesScreen = () => <CaptureScreen src={appEcranCourses} />;
export const StockScreen = () => <CaptureScreen src={appEcranStock} />;
export const ReportsScreen = () => <CaptureScreen src={appEcranRapports} />;
export const InboxScreen = () => <CaptureScreen src={appEcranInbox} />;
export const ZonesScreen = () => <CaptureScreen src={appEcranTarifs} />;
