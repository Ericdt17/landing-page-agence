import { produitCasque, produitChargeur } from "../../assets/images";
import CarteYaounde from "../../components/site/CarteYaounde";

/**
 * Écrans de l'application commerçant, dessinés en HTML plutôt qu'en captures :
 * ils suivent le thème, restent nets à toutes les tailles et ne pèsent rien.
 * Les données sont des exemples ; le contenu est masqué aux lecteurs d'écran,
 * seule la légende de chaque figure est lue.
 */

const Card = ({ children, className = "" }) => (
  <div
    aria-hidden='true'
    className={`flex h-[268px] flex-col gap-3 overflow-hidden rounded-[22px] border border-ls-rule bg-ls-surface p-4 ${className}`}
  >
    {children}
  </div>
);

const Rule = () => <div className='h-px bg-ls-rule' />;

export const OrdersScreen = () => (
  <Card>
    <div className='flex items-baseline justify-between'>
      <span className='text-[15px] font-bold'>Commandes</span>
      <span className='ls-num text-[10px] text-ls-faint'>7</span>
    </div>
    <Rule />
    <div className='flex flex-col gap-2.5'>
      <div className='flex items-center gap-2.5'>
        <img src={produitChargeur} alt='' width='34' height='34' className='h-[34px] w-[34px] rounded-sm object-cover' />
        <div>
          <div className='text-[11px] font-semibold'>Chargeur USB-C</div>
          <div className='ls-num text-[9px] text-ls-bad'>1 h 24</div>
        </div>
      </div>
      <div className='ls-btn ls-btn-solid min-h-[34px] text-[11px]'>Accepter</div>
      <Rule />
      <div className='flex items-center gap-2.5'>
        <img src={produitCasque} alt='' width='34' height='34' className='h-[34px] w-[34px] rounded-sm object-cover' />
        <div>
          <div className='text-[11px] font-semibold'>Casque Bluetooth</div>
          <div className='ls-num text-[9px] text-ls-ok'>payée</div>
        </div>
      </div>
    </div>
  </Card>
);

export const StockScreen = () => (
  <Card>
    <span className='text-[15px] font-bold'>Stock</span>
    <Rule />
    <div className='flex flex-col gap-2'>
      {[
        ["En stock", "71", "text-ls-muted", ""],
        ["Bas", "7", "text-ls-warn", "text-ls-warn"],
        ["Rupture", "6", "text-ls-bad", "text-ls-bad"],
      ].map(([label, value, labelTone, valueTone]) => (
        <div key={label} className='flex items-baseline justify-between'>
          <span className={`ls-cap ${labelTone}`}>{label}</span>
          <span className={`ls-num text-[17px] ${valueTone}`}>{value}</span>
        </div>
      ))}
    </div>
    <Rule />
    <div className='flex items-center rounded-[3px] border border-ls-rule'>
      <span className='flex h-[34px] w-8 items-center justify-center text-ls-muted'>−</span>
      <span className='ls-num flex-1 text-center text-base'>12</span>
      <span className='flex h-[34px] w-8 items-center justify-center text-ls-accent'>+</span>
    </div>
  </Card>
);

export const PayoutScreen = () => (
  <Card>
    <span className='text-[15px] font-bold'>Reversement</span>
    <Rule />
    <div className='flex flex-col gap-2'>
      {[
        ["Encaissé", "195 900"],
        ["Livraisons", "−11 600"],
        ["Dettes", "0"],
      ].map(([label, value]) => (
        <div key={label} className='flex justify-between'>
          <span className='ls-cap text-ls-muted'>{label}</span>
          <span className='ls-num text-xs'>{value}</span>
        </div>
      ))}
    </div>
    <Rule />
    <div>
      <div className='ls-kicker text-ls-faint'>Vous recevez</div>
      <div className='ls-num pt-1 text-[26px]'>184 300</div>
    </div>
    <div className='ls-cap font-semibold text-ls-speed'>Versé en fin de journée</div>
  </Card>
);

export const TrackingScreen = () => (
  <div aria-hidden='true' className='overflow-hidden rounded-[22px] border border-ls-rule bg-ls-surface'>
    <CarteYaounde variant='wide' className='h-[168px]' />
    <div className='flex flex-col gap-4 p-5'>
      <div className='flex items-baseline justify-between'>
        <span className='ls-h ls-d4'>Arrive dans 25 min</span>
        <span className='ls-num text-[11px] text-ls-faint'>DL-88214</span>
      </div>
      <Rule />
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <span className='h-[7px] w-[7px] rounded-full bg-ls-ok' />
          <span className='ls-cap'>Colis récupéré</span>
          <span className='ls-num ml-auto text-[11px] text-ls-faint'>15:02</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='h-[7px] w-[7px] rounded-full bg-ls-primary' />
          <span className='ls-cap font-semibold'>En route</span>
          <span className='ls-num ml-auto text-[11px] text-ls-accent'>2,4 km</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='h-[7px] w-[7px] rounded-full bg-ls-dim' />
          <span className='ls-cap text-ls-faint'>Livré · encaisser 13 500</span>
        </div>
      </div>
    </div>
  </div>
);
