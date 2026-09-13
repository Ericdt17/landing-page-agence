import { produitCasque, produitChargeur } from "../../assets/images";
import CarteYaounde from "../../components/site/CarteYaounde";

/**
 * Écrans de l'application commerçant, dessinés en HTML d'après appClient
 * (onglets Accueil · Courses · Inbox · Rapports · Stock, cartes arrondies à
 * 32 px). Données d'exemple, masquées aux lecteurs d'écran : la légende de la
 * visite décrit chaque écran.
 */

const Phone = ({ children, height = 440 }) => (
  <div
    aria-hidden='true'
    className='relative overflow-hidden rounded-[30px] border border-ls-rule bg-ls-surface'
    style={{ height }}
  >
    {children}
  </div>
);

const Rule = () => <div className='h-px bg-ls-rule' />;

const AppCard = ({ children, className = "" }) => (
  <div className={`rounded-[32px] bg-ls-surface shadow-[0_2px_8px_rgba(0,0,0,.06)] ${className}`}>{children}</div>
);

const Pill = ({ tone = "primary", children }) => (
  <span
    className={`rounded-full px-[9px] py-1 text-[8px] font-bold tracking-[.6px] ${
      tone === "ok" ? "bg-ls-ok-bg text-ls-ok" : "bg-ls-primary-soft text-ls-accent"
    }`}
  >
    {children}
  </span>
);

const TABS = [
  { id: "accueil", label: "Accueil", path: "M3 10.5 12 3l9 7.5M5 9.5V20h14V9.5" },
  { id: "courses", label: "Courses", path: "M3 8l9-4 9 4v8l-9 4-9-4z" },
  { id: "inbox", label: "Inbox", path: "M4 6h16v11H8l-4 4z" },
  { id: "rapports", label: "Rapports", path: "M4 19V9M10 19V5M16 19v-7M22 19H2" },
  { id: "stock", label: "Stock", path: "M4 7h16v12H4zM4 11h16" },
];

const TabBar = ({ active }) => (
  <div className='absolute inset-x-0 bottom-0 flex border-t border-ls-rule bg-ls-surface pb-[9px] pt-[7px]'>
    {TABS.map((tab) => {
      const on = tab.id === active;
      return (
        <div key={tab.id} className={`flex flex-1 flex-col items-center gap-[3px] ${on ? "text-ls-accent" : "text-ls-faint"}`}>
          <svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' strokeLinejoin='round'>
            <path d={tab.path} />
          </svg>
          <span className='text-[8px] font-bold tracking-[1.2px]'>{tab.label}</span>
        </div>
      );
    })}
  </div>
);

const AppScreen = ({ title, tab, children }) => (
  <Phone>
    <div className='flex h-full flex-col gap-[11px] overflow-hidden bg-ls-fill px-3.5 pb-[62px] pt-3.5'>
      <div className='flex min-h-[34px] items-center justify-between'>
        <span className='text-[17px] font-bold tracking-[-.4px]'>{title}</span>
        <span className='flex h-8 w-8 items-center justify-center rounded-full bg-ls-ph text-[11px] font-bold'>TP</span>
      </div>
      {children}
    </div>
    <TabBar active={tab} />
  </Phone>
);

/* ── Bientôt ─────────────────────────────────────────────────────────────── */

const planning = [
  { time: "09:00", place: "Enlèvement · votre boutique", status: "3 colis récupérés", tone: "ok" },
  { time: "10:20", place: "Mvog-Ada", status: "livré · encaissé 8 500", tone: "ok" },
  { time: "11:05", place: "Bastos · M. Tchoumi", status: "en route · ~11 min", tone: "now" },
  { time: "11:40", place: "Nlongkak · A. Bello", status: "à livrer · paiement à la livraison", tone: "later" },
  { time: "14:15", place: "Essos · S. Fotso", status: "à livrer", tone: "later" },
  { time: "18:00", place: "Reversement", status: "livraisons terminées", tone: "payout" },
];

const planningTone = {
  ok: { time: "text-ls-faint", place: "", status: "text-ls-ok" },
  now: { time: "text-ls-accent", place: "font-bold", status: "font-semibold text-ls-accent" },
  later: { time: "text-ls-faint", place: "text-ls-muted", status: "text-ls-faint" },
  payout: { time: "text-ls-speed", place: "", status: "font-semibold text-ls-speed" },
};

export const PlanningScreen = () => (
  <Phone height={430}>
    <div className='flex h-full flex-col gap-3.5 p-[18px]'>
      <div className='flex items-baseline justify-between'>
        <span className='ls-h text-[17px]'>Mardi 9 septembre</span>
        <span className='ls-num text-[11px] font-semibold text-ls-faint'>7 colis</span>
      </div>
      <Rule />
      <div className='flex flex-col'>
        {planning.map((row, index) => {
          const tone = planningTone[row.tone];
          return (
            <div key={row.time}>
              {index > 0 && <Rule />}
              <div className={`grid grid-cols-[46px_1fr] gap-3 py-[11px] ${row.tone === "now" ? "-mx-[18px] bg-ls-select px-[18px]" : ""}`}>
                <span className={`ls-num text-[11px] font-semibold ${tone.time}`}>{row.time}</span>
                <div>
                  <div className={`text-xs font-semibold ${tone.place}`}>{row.place}</div>
                  <div className={`text-[11px] ${tone.status}`}>{row.status}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Phone>
);

export const CourierScreen = () => (
  <Phone height={430}>
    <CarteYaounde variant='phone' className='h-[210px]' />
    <div className='flex flex-col gap-3.5 p-[18px]'>
      <div className='flex items-baseline justify-between'>
        <span className='ls-h text-[17px]'>Ibrahim S. · 4 colis</span>
        <span className='ls-num text-[11px] font-semibold text-ls-accent'>2,4 km</span>
      </div>
      <Rule />
      <div className='flex flex-col gap-2.5'>
        {[
          ["Épicerie Mvog-Ada", "livré", "bg-ls-ok", "", "text-ls-faint"],
          ["Bastos · M. Tchoumi", "~11 min", "bg-ls-primary", "font-semibold", "text-ls-accent"],
          ["Nlongkak · A. Bello", "~26 min", "bg-ls-dim", "text-ls-faint", "text-ls-faint"],
          ["Essos · S. Fotso", "~40 min", "bg-ls-dim", "text-ls-faint", "text-ls-faint"],
        ].map(([stop, eta, dot, label, etaTone]) => (
          <div key={stop} className='flex items-center gap-2.5'>
            <span className={`h-[7px] w-[7px] rounded-full ${dot}`} />
            <span className={`ls-cap ${label}`}>{stop}</span>
            <span className={`ls-num ml-auto text-[10px] font-semibold ${etaTone}`}>{eta}</span>
          </div>
        ))}
      </div>
    </div>
  </Phone>
);

export const WithdrawScreen = () => (
  <Phone height={430}>
    <div className='flex flex-col gap-3.5 p-[18px]'>
      <div className='flex items-baseline justify-between'>
        <span className='ls-h text-[17px]'>Retrait à la demande</span>
        <span className='ls-num text-[10px] font-semibold text-ls-ok'>● en direct</span>
      </div>
      <div>
        <div className='ls-kicker text-ls-faint'>Déjà encaissé pour vous</div>
        <div className='ls-h ls-num pt-1 text-[30px]'>96 400</div>
      </div>
      <div className='ls-cap text-ls-muted'>Sur 7 livraisons terminées depuis ce matin.</div>
      <div className='ls-btn ls-btn-solid min-h-10 text-xs'>Retirer maintenant</div>
      <Rule />
      <div className='flex flex-col'>
        {[
          ["11:20 · Bastos", "+13 500", "text-ls-muted", "text-ls-ok"],
          ["10:05 · Mvog-Ada", "+8 500", "text-ls-muted", "text-ls-ok"],
          ["14:15 · Essos", "pas encore livré", "text-ls-faint", "text-ls-faint"],
        ].map(([label, amount, labelTone, amountTone], index) => (
          <div key={label}>
            {index > 0 && <Rule />}
            <div className='flex justify-between py-[9px]'>
              <span className={`ls-cap ${labelTone}`}>{label}</span>
              <span className={`ls-num text-[11px] font-semibold ${amountTone}`}>{amount}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='text-[11px] leading-snug text-ls-faint'>
        Vous n&apos;attendez plus la fin de la journée : ce qui est encaissé est retirable.
      </div>
    </div>
  </Phone>
);

/* ── Disponible aujourd'hui ──────────────────────────────────────────────── */

const initials = (label) =>
  label
    .split("·")
    .pop()
    .replace(/[^A-Za-zÀ-ÿ ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const Avatar = ({ label }) => (
  <span className='flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-ls-select text-[11px] font-bold text-ls-accent'>
    {initials(label)}
  </span>
);

const RecentRow = ({ name, amount, status, tone }) => (
  <div className='flex items-center gap-[9px]'>
    <Avatar label={name} />
    <div className='flex-1'>
      <div className='text-[11px] font-bold'>{name}</div>
      <div className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>{amount}</div>
    </div>
    <Pill tone={tone}>{status}</Pill>
  </div>
);

export const HomeScreen = () => (
  <AppScreen title='Accueil' tab='accueil'>
    <div className='grid grid-cols-2 gap-[9px]'>
      {[
        ["Courses du jour", "7", "M3 8l9-4 9 4v8l-9 4-9-4z", null],
        ["Encaissé", "96 400", "M12 3v18M7 7h7a3 3 0 0 1 0 6H7h8", "FCFA"],
      ].map(([label, value, path, unit]) => (
        <AppCard key={label} className='flex min-h-[86px] flex-col justify-center gap-1 p-[13px]'>
          <svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.7' strokeLinecap='round' className='text-ls-primary'>
            <path d={path} />
          </svg>
          <span className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>{label}</span>
          <span className='flex items-end gap-[3px]'>
            <span className='ls-num text-lg'>{value}</span>
            {unit && <span className='pb-0.5 text-[8px] font-medium text-ls-muted'>{unit}</span>}
          </span>
        </AppCard>
      ))}
    </div>
    <AppCard className='flex flex-col gap-2.5 p-[15px]'>
      <span className='text-[13px] font-bold'>Dernières courses</span>
      <RecentRow name='Bastos · M. Tchoumi' amount='13 500 FCFA' status='EN COURS' />
      <RecentRow name='Mvog-Ada · E. Nkomo' amount='8 500 FCFA' status='LIVRÉ' tone='ok' />
    </AppCard>
  </AppScreen>
);

const CourseCard = ({ when, name, amountLabel, amount, status, tone }) => (
  <AppCard className='flex flex-col gap-2 p-[15px]'>
    <div className='flex items-center justify-between'>
      <span className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>{when}</span>
      <Pill tone={tone}>{status}</Pill>
    </div>
    <span className='text-sm font-bold'>{name}</span>
    <div className='flex items-baseline justify-between'>
      <span className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>{amountLabel}</span>
      <span className='ls-num text-[15px]'>{amount}</span>
    </div>
  </AppCard>
);

export const CoursesScreen = () => (
  <AppScreen title='Courses' tab='courses'>
    <div className='flex gap-1.5'>
      <span className='rounded-full bg-ls-accent px-[11px] py-1.5 text-[8px] font-bold tracking-[1.2px] text-ls-bg'>TOUTES</span>
      <span className='rounded-full bg-ls-surface px-[11px] py-1.5 text-[8px] font-bold tracking-[1.2px] text-ls-muted'>EN COURS</span>
      <span className='rounded-full bg-ls-surface px-[11px] py-1.5 text-[8px] font-bold tracking-[1.2px] text-ls-muted'>LIVRÉES</span>
    </div>
    <CourseCard when='9 SEPT · 11:05' name='Bastos · M. Tchoumi' amountLabel='À ENCAISSER' amount='13 500 FCFA' status='EN COURS' />
    <CourseCard when='9 SEPT · 10:05' name='Mvog-Ada · E. Nkomo' amountLabel='ENCAISSÉ' amount='8 500 FCFA' status='LIVRÉ' tone='ok' />
  </AppScreen>
);

export const StockScreen = () => (
  <AppScreen title='Stock' tab='stock'>
    <div className='grid grid-cols-2 gap-[9px]'>
      <AppCard className='flex flex-col gap-[3px] p-[13px]'>
        <span className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>EN STOCK</span>
        <span className='ls-num text-lg'>71</span>
      </AppCard>
      <AppCard className='flex flex-col gap-[3px] p-[13px]'>
        <span className='text-[9px] font-medium tracking-[.6px] text-ls-bad'>RUPTURE</span>
        <span className='ls-num text-lg text-ls-bad'>6</span>
      </AppCard>
    </div>
    {[
      ["Chargeur USB-C 20 W", "TP-CHG-20", "0", produitChargeur],
      ["Casque Bluetooth", "TP-BT-01", "24", produitCasque],
    ].map(([name, sku, qty, photo]) => (
      <AppCard key={sku} className='flex items-center gap-2.5 p-[15px]'>
        <img src={photo} alt='' width='50' height='50' className='h-[50px] w-[50px] rounded-[20px] object-cover' />
        <div className='flex-1'>
          <div className='text-[11px] font-bold'>{name}</div>
          <div className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>{sku}</div>
        </div>
        <span className='ls-num text-base'>{qty}</span>
      </AppCard>
    ))}
    <div className='flex min-h-[38px] items-center justify-center rounded-full bg-ls-accent text-[10px] font-bold tracking-[1.2px] text-ls-bg'>
      AJOUTER AU STOCK
    </div>
  </AppScreen>
);

export const ReportsScreen = () => (
  <AppScreen title='Rapports' tab='rapports'>
    <AppCard className='flex flex-col items-center gap-3 p-4'>
      <span className='self-start text-[13px] font-bold'>Septembre</span>
      <svg width='104' height='104' viewBox='0 0 42 42'>
        <circle cx='21' cy='21' r='15.9' fill='none' strokeWidth='6' style={{ stroke: "var(--ls-ph)" }} />
        <circle cx='21' cy='21' r='15.9' fill='none' strokeWidth='6' strokeDasharray='78 22' strokeDashoffset='25' strokeLinecap='round' style={{ stroke: "var(--ls-primary)" }} />
        <circle cx='21' cy='21' r='15.9' fill='none' strokeWidth='6' strokeDasharray='8 92' strokeDashoffset='-53' strokeLinecap='round' style={{ stroke: "var(--ls-bad)" }} />
      </svg>
      <div className='flex gap-[13px]'>
        <span className='flex items-center gap-[5px] text-[9px] font-medium text-ls-muted'>
          <span className='h-[7px] w-[7px] rounded-full bg-ls-primary' />
          Livrées 78%
        </span>
        <span className='flex items-center gap-[5px] text-[9px] font-medium text-ls-muted'>
          <span className='h-[7px] w-[7px] rounded-full bg-ls-bad' />
          Échouées 8%
        </span>
      </div>
    </AppCard>
    <AppCard className='flex flex-col gap-2 p-[15px]'>
      {[
        ["TOTAL ENCAISSÉ", "1 240 500"],
        ["NET À REVERSER", "1 178 900"],
      ].map(([label, value]) => (
        <div key={label} className='flex justify-between'>
          <span className='text-[9px] font-medium tracking-[.6px] text-ls-muted'>{label}</span>
          <span className='ls-num text-sm'>{value}</span>
        </div>
      ))}
    </AppCard>
    <div className='flex min-h-[38px] items-center justify-center gap-1.5 rounded-full bg-ls-accent text-[10px] font-bold tracking-[1.2px] text-ls-bg'>
      <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M12 4v12M7 11l5 5 5-5' />
        <path d='M4 20h16' />
      </svg>
      RAPPORT PDF
    </div>
  </AppScreen>
);

export const InboxScreen = () => (
  <AppScreen title='Inbox' tab='inbox'>
    {[
      ["Support LivSight", "Votre reversement est parti…", "2"],
      ["Ibrahim S. · livreur", "Je suis devant la pharmacie", "11:02"],
      ["Course DL-88207", "Client absent, que faire ?", "hier"],
    ].map(([from, preview, meta]) => (
      <AppCard key={from} className='flex items-center gap-2.5 p-[15px]'>
        <Avatar label={from} />
        <div className='flex-1'>
          <div className='text-[11px] font-bold'>{from}</div>
          <div className='text-[9px] font-medium text-ls-muted'>{preview}</div>
        </div>
        {meta === "2" ? (
          <span className='ls-num flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-ls-accent px-[5px] text-[9px] text-ls-bg'>
            {meta}
          </span>
        ) : (
          <span className='text-[9px] font-medium text-ls-muted'>{meta}</span>
        )}
      </AppCard>
    ))}
  </AppScreen>
);

export const ZonesScreen = () => (
  <AppScreen title='Tarifs' tab='accueil'>
    <AppCard className='flex flex-col gap-2.5 p-[15px]'>
      {[
        ["Centre · Bastos", "1 000"],
        ["Mvog-Ada · Essos", "2 000"],
        ["Nkolbisson", "3 500"],
        ["Périphérie", "5 000"],
      ].map(([zone, price], index) => (
        <div key={zone}>
          {index > 0 && <div className='mb-2.5 h-px bg-ls-stroke' />}
          <div className='flex items-baseline justify-between'>
            <span className='text-[11px] font-bold'>{zone}</span>
            <span className='ls-num text-sm'>{price}</span>
          </div>
        </div>
      ))}
    </AppCard>
    <AppCard className='flex flex-col gap-1.5 p-[15px]'>
      <span className='text-[9px] font-bold tracking-[1.2px] text-ls-accent'>EXPRESS</span>
      <span className='text-[10px] leading-normal text-ls-muted'>Livraison prioritaire dans la journée, selon la zone.</span>
    </AppCard>
  </AppScreen>
);
