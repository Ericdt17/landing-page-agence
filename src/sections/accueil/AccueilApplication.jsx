import { accueilApp } from "../../constants/accueil";
import { OrdersScreen, PayoutScreen, StockScreen, TrackingScreen } from "./AppScreens";

const figures = [
  { key: "orders", Screen: OrdersScreen },
  { key: "stock", Screen: StockScreen },
  { key: "payout", Screen: PayoutScreen },
  { key: "tracking", Screen: TrackingScreen },
];

const AccueilApplication = () => (
  <section aria-labelledby='accueil-application' className='px-[18px] pb-16 pt-14 md:px-16 md:pb-[76px] md:pt-[84px]'>
    <div className='grid grid-cols-1 items-end gap-6 pb-10 md:grid-cols-2 md:gap-[72px] md:pb-11'>
      <div className='flex flex-col gap-[18px]'>
        <span className='ls-kicker text-ls-accent'>{accueilApp.kicker}</span>
        <h2 id='accueil-application' className='ls-h ls-d2 max-w-[20ch]'>
          {accueilApp.title}
        </h2>
      </div>
      <p className='ls-body max-w-[46ch] text-ls-muted'>{accueilApp.body}</p>
    </div>

    <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4'>
      {figures.map(({ key, Screen }) => (
        <figure key={key} className='flex flex-col gap-3.5'>
          <Screen />
          <figcaption>
            <span className='ls-h text-[15px]'>{accueilApp.captions[key].title}</span>
            <span className='ls-cap block pt-1 text-ls-faint'>{accueilApp.captions[key].text}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default AccueilApplication;
