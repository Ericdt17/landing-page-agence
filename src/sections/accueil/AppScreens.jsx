import { produitCasque, produitChargeur } from "../../assets/images";

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

const MapPreview = () => (
  <svg viewBox='0 0 380 170' preserveAspectRatio='xMidYMid slice' className='block h-full w-full'>
    <rect width='380' height='170' style={{ fill: "var(--ls-fill)" }} />
    <g style={{ fill: "var(--ls-rule)" }} opacity='.55'>
      <rect x='18' y='16' width='52' height='34' rx='3' transform='rotate(-4 44 33)' />
      <rect x='84' y='10' width='44' height='28' rx='3' transform='rotate(-4 106 24)' />
      <rect x='150' y='22' width='60' height='30' rx='3' transform='rotate(2 180 37)' />
      <rect x='236' y='12' width='46' height='26' rx='3' transform='rotate(-3 259 25)' />
      <rect x='300' y='26' width='58' height='32' rx='3' transform='rotate(3 329 42)' />
      <rect x='26' y='70' width='46' height='30' rx='3' transform='rotate(3 49 85)' />
      <rect x='96' y='64' width='52' height='26' rx='3' transform='rotate(-2 122 77)' />
      <rect x='172' y='72' width='40' height='28' rx='3' transform='rotate(4 192 86)' />
      <rect x='286' y='76' width='54' height='30' rx='3' transform='rotate(-3 313 91)' />
      <rect x='40' y='122' width='50' height='30' rx='3' transform='rotate(-2 65 137)' />
      <rect x='126' y='128' width='44' height='26' rx='3' transform='rotate(3 148 141)' />
      <rect x='284' y='128' width='56' height='28' rx='3' transform='rotate(2 312 142)' />
    </g>
    <ellipse cx='222' cy='140' rx='34' ry='17' transform='rotate(-8 222 140)' style={{ fill: "var(--ls-primary)" }} opacity='.16' />
    <g fill='none' strokeLinecap='round' style={{ stroke: "var(--ls-rule)" }}>
      <path d='M-10 58 C 58 52, 116 74, 152 104 S 226 156, 306 150 S 372 138, 392 130' strokeWidth='5' />
      <path d='M78 -10 C 88 40, 70 82, 96 128 S 128 176, 136 192' strokeWidth='4' />
      <path d='M266 -10 C 258 32, 278 62, 262 104 S 244 154, 250 192' strokeWidth='4' />
      <path d='M-10 96 C 68 92, 148 104, 222 94 S 336 78, 392 86' strokeWidth='2' />
      <path d='M-10 22 C 74 18, 150 30, 226 20 S 340 8, 392 14' strokeWidth='1.6' />
      <path d='M172 -10 C 176 34, 166 70, 178 110 S 190 158, 186 192' strokeWidth='1.6' />
    </g>
    <path
      d='M44 132 C 104 116, 128 66, 196 52 S 268 42, 300 34'
      fill='none'
      strokeWidth='3.5'
      strokeLinecap='round'
      strokeDasharray='4 7'
      opacity='.38'
      style={{ stroke: "var(--ls-primary)" }}
    />
    <path d='M44 132 C 88 121, 112 92, 150 74' fill='none' strokeWidth='3.5' strokeLinecap='round' style={{ stroke: "var(--ls-primary)" }} />
    <circle cx='44' cy='132' r='4.5' opacity='.5' style={{ fill: "var(--ls-primary)" }} />
    <g transform='translate(300 34)'>
      <path
        d='M0 -13 C 6.4 -13, 9.6 -8.4, 9.6 -4 C 9.6 2, 0 11, 0 11 C 0 11, -9.6 2, -9.6 -4 C -9.6 -8.4, -6.4 -13, 0 -13 Z'
        style={{ fill: "var(--ls-text)" }}
      />
      <circle cy='-4.4' r='3.4' style={{ fill: "var(--ls-fill)" }} />
    </g>
    <g transform='translate(150 74)'>
      <circle r='12' opacity='.18' style={{ fill: "var(--ls-primary)" }} className='motion-safe:animate-ping' />
      <circle r='7' strokeWidth='2.5' style={{ fill: "var(--ls-primary)", stroke: "var(--ls-surface)" }} />
    </g>
    <g fontSize='7' fontWeight='700' letterSpacing='.08em' style={{ fill: "var(--ls-faint)" }}>
      <text x='20' y='150'>HIPPODROME</text>
      <text x='196' y='26'>BASTOS</text>
      <text x='252' y='120'>MVOG-ADA</text>
    </g>
  </svg>
);

export const TrackingScreen = () => (
  <div aria-hidden='true' className='overflow-hidden rounded-[22px] border border-ls-rule bg-ls-surface'>
    <div className='h-[168px] bg-ls-ph'>
      <MapPreview />
    </div>
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
