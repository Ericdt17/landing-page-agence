import { useEffect, useMemo, useRef, useState } from "react";
import charger from "../../assets/images/marketplace/demo/charger.webp";
import cream from "../../assets/images/marketplace/demo/cream.webp";
import cushions from "../../assets/images/marketplace/demo/cushions.webp";
import dress from "../../assets/images/marketplace/demo/dress.webp";
import headphones from "../../assets/images/marketplace/demo/headphones.webp";
import lamp from "../../assets/images/marketplace/demo/lamp.webp";
import leatherbag from "../../assets/images/marketplace/demo/leatherbag.webp";
import lotion from "../../assets/images/marketplace/demo/lotion.webp";
import perfume from "../../assets/images/marketplace/demo/perfume.webp";
import plant from "../../assets/images/marketplace/demo/plant.webp";
import serum from "../../assets/images/marketplace/demo/serum.webp";
import sneakers from "../../assets/images/marketplace/demo/sneakers.webp";
import succulents from "../../assets/images/marketplace/demo/succulents.webp";
import speaker from "../../assets/images/marketplace/demo/speaker.webp";
import sunglasses from "../../assets/images/marketplace/demo/sunglasses.webp";
import watch from "../../assets/images/marketplace/demo/watch.webp";
import { fill, useCopy, useLanguage } from "../../i18n/useCopy";
import { formatFcfa } from "../../services/tarifs";

/* Articles d'exemple : prix fictifs, photos CC0 sans marque */
const PRODUCTS = [
  { id: "headphones", category: "tech", price: 12900, photo: headphones },
  { id: "speaker", category: "tech", price: 18500, photo: speaker },
  { id: "watch", category: "tech", price: 24900, photo: watch },
  { id: "charger", category: "tech", price: 5500, photo: charger },
  { id: "dress", category: "mode", price: 13500, photo: dress },
  { id: "sneakers", category: "mode", price: 15000, photo: sneakers },
  { id: "sunglasses", category: "mode", price: 7500, photo: sunglasses },
  { id: "leatherbag", category: "mode", price: 24000, photo: leatherbag },
  { id: "serum", category: "beaute", price: 6500, photo: serum },
  { id: "perfume", category: "beaute", price: 11000, photo: perfume },
  { id: "cream", category: "beaute", price: 5800, photo: cream },
  { id: "lotion", category: "beaute", price: 4500, photo: lotion },
  { id: "plant", category: "maison", price: 4900, photo: plant },
  { id: "lamp", category: "maison", price: 9200, photo: lamp },
  { id: "succulents", category: "maison", price: 6000, photo: succulents },
  { id: "cushions", category: "maison", price: 8500, photo: cushions },
];
const CATEGORIES = ["tech", "mode", "beaute", "maison"];
const byId = Object.fromEntries(PRODUCTS.map((item) => [item.id, item]));
const TRACK_MS = 2800;
const MOMO_MS = 3200;

/* Palette de l'application marketplace (maquettes « Boutique »), bleu assombri pour le contraste AA */
const THEME = {
  "--m-bg": "#F8F9FA",
  "--m-surface": "#FFFFFF",
  "--m-stroke": "#E2E8F0",
  "--m-text": "#191C1D",
  "--m-muted": "#3C4A3C",
  "--m-faint": "#5F6873",
  "--m-primary": "#23709C",
  "--m-ph": "#EEF2F7",
  "--m-ok": "#2E7D32",
  "--m-ok-bg": "#EAF7EE",
  "--m-info": "#E9F4FB",
  "--m-ink": "#1D5F84",
};

const reducedMotion = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* Icônes des maquettes (trait 24 px) */
const PATHS = {
  back: <path d='m15 6-6 6 6 6' />,
  chevron: <path d='m6 9 6 6 6-6' />,
  next: <path d='m9 6 6 6-6 6' />,
  bell: (
    <>
      <path d='M18 8a6 6 0 1 0-12 0c0 6-2 7-2 7h16s-2-1-2-7' />
      <path d='M10.5 19a2 2 0 0 0 3 0' />
    </>
  ),
  search: (
    <>
      <circle cx='11' cy='11' r='7' />
      <path d='m20 20-3.5-3.5' />
    </>
  ),
  home: (
    <>
      <path d='M3 10.5 12 3l9 7.5' />
      <path d='M5 9.5V20h14V9.5' />
    </>
  ),
  cart: (
    <>
      <path d='M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6' />
      <circle cx='9.5' cy='20' r='1.4' />
      <circle cx='18' cy='20' r='1.4' />
    </>
  ),
  truck: (
    <>
      <path d='M4 7h12v10H4z' />
      <path d='M16 10h3l2 3v4h-5z' />
      <circle cx='7.5' cy='19' r='1.5' />
      <circle cx='17.5' cy='19' r='1.5' />
    </>
  ),
  user: (
    <>
      <circle cx='12' cy='8.5' r='3.8' />
      <path d='M4.5 20c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5' />
    </>
  ),
  heart: <path d='M12 20s-7-4.4-7-9.3A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7 3.1C19 15.6 12 20 12 20Z' />,
  minus: <path d='M5 12h14' />,
  plus: <path d='M12 5v14M5 12h14' />,
  check: <path d='M20 6 9 17l-5-5' />,
  phone: (
    <>
      <rect x='6' y='2.5' width='12' height='19' rx='2.6' />
      <path d='M10.5 5.5h3' />
      <circle cx='12' cy='16.5' r='2.2' />
    </>
  ),
  info: (
    <>
      <circle cx='12' cy='12' r='9' />
      <path d='M12 8h.01M11 12h1v4h1' />
    </>
  ),
  moto: (
    <>
      <circle cx='6' cy='17.5' r='2.6' />
      <circle cx='18' cy='17.5' r='2.6' />
      <path d='M8.6 17.5h6.8L18 9h-3l-1.4 3H9.2L7 9H4' />
    </>
  ),
};

const Icon = ({ name, size = 22, width = 1.9, color = "currentColor", fillColor = "none" }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill={fillColor} stroke={color} strokeWidth={width} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    {PATHS[name]}
  </svg>
);

const RoundButton = ({ label, onClick, children, pressed, className = "" }) => (
  <button
    type='button'
    onClick={onClick}
    aria-label={label}
    aria-pressed={pressed}
    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--m-stroke)] bg-[var(--m-surface)] ${className}`}
  >
    {children}
  </button>
);

const Title = ({ titleRef, className = "", children }) => (
  <h3 ref={titleRef} tabIndex={-1} className={`font-bold tracking-[-.02em] outline-none ${className}`}>
    {children}
  </h3>
);

const Stepper = ({ value, onMinus, onPlus, minusLabel, plusLabel, small = false }) => (
  <div className='flex shrink-0 items-center rounded-full border border-[var(--m-stroke)]'>
    <button type='button' onClick={onMinus} aria-label={minusLabel} className={`flex items-center justify-center ${small ? "h-10 w-9" : "h-11 w-11"}`}>
      <Icon name='minus' size={small ? 13 : 15} width={2.4} color='var(--m-muted)' />
    </button>
    <span className={`text-center font-bold ${small ? "w-4 text-[14px]" : "w-6 text-[15px]"}`}>{value}</span>
    <button type='button' onClick={onPlus} aria-label={plusLabel} className={`flex items-center justify-center ${small ? "h-10 w-9" : "h-11 w-11"}`}>
      <Icon name='plus' size={small ? 13 : 15} width={2.4} color='var(--m-primary)' />
    </button>
  </div>
);

const PrimaryButton = ({ onClick, children, outline = false }) => (
  <button
    type='button'
    onClick={onClick}
    className={`flex min-h-[52px] w-full items-center justify-center rounded-full px-5 text-[15px] font-bold ${
      outline ? "border border-[var(--m-primary)] bg-[var(--m-surface)] text-[var(--m-primary)]" : "bg-[var(--m-primary)] text-white"
    }`}
  >
    {children}
  </button>
);

/**
 * Démonstration interactive de la future marketplace, reprise des maquettes
 * « Boutique » en version mobile : accueil, rayon, fiche article, panier,
 * paiement, confirmation, suivi. Tout reste dans le navigateur : aucune
 * commande, aucun appel réseau. Les notes, remises et délais de livraison
 * des maquettes sont retirés, faute d'être confirmés.
 */
const MarketplaceDemo = () => {
  const { demo } = useCopy("marketplace");
  const { language } = useLanguage();
  const price = (amount) => formatFcfa(amount, language);
  const countLabel = (count) => fill(count > 1 ? demo.itemsCount : demo.itemsCountOne, { count });

  const [screen, setScreen] = useState("home");
  /* Pile des écrans précédents, lue par « Retour » */
  const [, setHistory] = useState([]);
  const [productId, setProductId] = useState(null);
  const [category, setCategory] = useState("all");
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState({});
  const [cart, setCart] = useState({});
  const [toast, setToast] = useState("");
  const [payment, setPayment] = useState("momo");
  const [awaitingMomo, setAwaitingMomo] = useState(false);
  const [order, setOrder] = useState(null);
  const [trackStep, setTrackStep] = useState(0);
  const titleRef = useRef(null);
  const mounted = useRef(false);
  const scroller = useRef(null);

  const items = Object.entries(cart).filter(([, count]) => count > 0);
  const cartCount = items.reduce((sum, [, count]) => sum + count, 0);
  const subtotal = items.reduce((sum, [id, count]) => sum + byId[id].price * count, 0);
  const listed = useMemo(() => (category === "all" ? PRODUCTS : PRODUCTS.filter((item) => item.category === category)), [category]);
  const product = productId ? byId[productId] : null;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    scroller.current?.scrollTo?.(0, 0);
    titleRef.current?.focus({ preventScroll: true });
  }, [screen, productId, awaitingMomo]);

  /* Paiement Mobile Money simulé : la confirmation arrive seule après quelques secondes */
  useEffect(() => {
    if (!awaitingMomo) return undefined;
    const timer = setTimeout(() => placeOrder("momo"), reducedMotion() ? 600 : MOMO_MS);
    return () => clearTimeout(timer);
  });

  /* Suivi : les étapes avancent seules, sauf si l'appareil demande moins de mouvement */
  useEffect(() => {
    if (screen !== "tracking" || !order || trackStep >= demo.trackSteps.length - 1 || reducedMotion()) return undefined;
    const timer = setTimeout(() => setTrackStep((step) => step + 1), TRACK_MS);
    return () => clearTimeout(timer);
  }, [screen, order, trackStep, demo.trackSteps.length]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const go = (next, { id, replace = false } = {}) => {
    if (!replace) setHistory((stack) => [...stack, { screen, productId }]);
    if (id) setProductId(id);
    setScreen(next);
  };
  const back = () => {
    setAwaitingMomo(false);
    setHistory((stack) => {
      const previous = stack[stack.length - 1];
      setScreen(previous?.screen ?? "home");
      setProductId(previous?.productId ?? null);
      return stack.slice(0, -1);
    });
  };
  const tab = (next) => {
    setAwaitingMomo(false);
    setToast("");
    setHistory([]);
    setScreen(next === "orders" ? (order ? "tracking" : "orders") : next);
  };
  const openProduct = (id) => {
    setQuantity(1);
    go("product", { id });
  };
  const addToCart = () => {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] ?? 0) + quantity }));
    setToast(demo.added);
  };
  const changeCart = (id, delta) => setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + delta) }));
  function placeOrder(method) {
    setAwaitingMomo(false);
    setOrder({ items, subtotal, method, count: cartCount, photo: byId[items[0]?.[0]]?.photo });
    setCart({});
    setTrackStep(0);
    setHistory([]);
    setScreen("confirmed");
  }
  const restart = () => {
    setScreen("home");
    setHistory([]);
    setProductId(null);
    setCategory("all");
    setQuantity(1);
    setFavorites({});
    setCart({});
    setToast("");
    setPayment("momo");
    setAwaitingMomo(false);
    setOrder(null);
    setTrackStep(0);
  };

  const activeStep = { home: 0, category: 0, product: 1, cart: 1, payment: 2, confirmed: 3, tracking: 3 }[screen] ?? 0;
  const tabFor = { home: "home", category: "search", product: "home", cart: "cart", payment: "cart", confirmed: "orders", tracking: "orders", orders: "orders", account: "account" }[screen];
  const withTabs = !["product", "payment", "confirmed", "tracking"].includes(screen);

  const ProductCard = ({ item, wide = false }) => (
    <button
      type='button'
      onClick={() => openProduct(item.id)}
      className={`flex shrink-0 flex-col gap-2 border border-[var(--m-stroke)] bg-[var(--m-surface)] text-left ${wide ? "w-[160px] rounded-[32px] p-3" : "w-full rounded-[24px] p-2.5"}`}
    >
      <img src={item.photo} alt='' width='150' height='150' loading='lazy' className={`w-full object-cover ${wide ? "h-[130px] rounded-[20px]" : "h-[140px] rounded-[18px]"}`} />
      <span className='line-clamp-2 min-h-[32px] text-[12px] font-medium leading-4'>{demo.products[item.id]}</span>
      <span className='text-[15px] font-bold tracking-[-.02em]'>{price(item.price)}</span>
      <span className='text-[10px] font-semibold text-[var(--m-ok)]'>{demo.shipped}</span>
    </button>
  );

  return (
    <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16'>
      <div className='flex flex-col gap-5 lg:order-2'>
        <span className='self-start rounded-full border border-ls-speed px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-ls-speed'>{demo.badge}</span>
        <h3 className='ls-h ls-d3'>{demo.title}</h3>
        <p className='ls-body text-ls-muted'>{demo.intro}</p>
        <ol className='flex flex-col border-t border-ls-rule'>
          {demo.steps.map((step, index) => (
            <li
              key={step}
              aria-current={index === activeStep ? "step" : undefined}
              className={`flex items-center gap-3 border-b border-ls-rule py-3.5 text-sm ${index === activeStep ? "font-bold text-ls-text" : index < activeStep ? "text-ls-muted" : "text-ls-faint"}`}
            >
              <span
                aria-hidden='true'
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  index < activeStep ? "bg-ls-ok-bg text-ls-ok" : index === activeStep ? "bg-ls-text text-ls-bg" : "border border-ls-stroke"
                }`}
              >
                {index < activeStep ? <Icon name='check' size={14} width={3} /> : index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <p className='ls-cap text-ls-faint'>{demo.note}</p>
        <button type='button' onClick={restart} className='ls-btn ls-btn-line self-start'>
          {demo.restart}
        </button>
      </div>

      {/* iPhone Pro Max : écran de 430 × 932 points, réduit proportionnellement sur les petits écrans */}
      <section
        aria-label={demo.regionLabel}
        className='mx-auto w-full max-w-[454px] rounded-[68px] bg-[#0E1518] p-3 shadow-[0_30px_80px_rgba(14,21,24,.25)] ring-1 ring-black/40 lg:order-1'
      >
        <div
          lang='fr'
          style={THEME}
          className='relative flex aspect-[430/932] w-full flex-col overflow-hidden rounded-[56px] bg-[var(--m-bg)] font-montserrat text-[var(--m-text)]'
        >
          <div aria-hidden='true' className='relative flex h-[54px] shrink-0 items-center justify-between px-8 pt-1 text-[15px] font-semibold'>
            <span>9:41</span>
            <span className='absolute left-1/2 top-[11px] h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-black' />
            <span className='flex items-center gap-1.5'>
              <svg width='18' height='12' viewBox='0 0 18 12' fill='currentColor'>
                <rect x='0' y='8' width='3' height='4' rx='1' />
                <rect x='5' y='5.5' width='3' height='6.5' rx='1' />
                <rect x='10' y='3' width='3' height='9' rx='1' />
                <rect x='15' y='0' width='3' height='12' rx='1' />
              </svg>
              <svg width='25' height='12' viewBox='0 0 25 12' fill='none' stroke='currentColor'>
                <rect x='0.5' y='0.5' width='21' height='11' rx='3.5' opacity='.4' />
                <rect x='2' y='2' width='16' height='8' rx='2' fill='currentColor' stroke='none' />
                <path d='M23.5 4v4' strokeLinecap='round' opacity='.5' />
              </svg>
            </span>
          </div>
          <div ref={scroller} className='min-h-0 flex-1 overflow-y-auto'>
            {screen === "home" && (
              <div className='flex flex-col pb-6'>
                <div className='flex flex-col gap-4 px-6 pt-2'>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                      <span className='text-[11px] text-[var(--m-muted)]'>{demo.location}</span>
                      <span className='flex items-center gap-1'>
                        <Title titleRef={titleRef} className='text-[17px]'>
                          {demo.place}
                        </Title>
                        <Icon name='chevron' size={16} width={2.2} />
                      </span>
                    </div>
                    <RoundButton label={demo.notifications}>
                      <Icon name='bell' size={21} width={1.8} />
                    </RoundButton>
                  </div>
                  <button
                    type='button'
                    onClick={() => {
                      setCategory("all");
                      go("category");
                    }}
                    className='flex h-12 items-center gap-2.5 rounded-full border border-[var(--m-stroke)] bg-[var(--m-surface)] px-[18px] text-left'
                  >
                    <Icon name='search' size={19} width={2.1} color='var(--m-faint)' />
                    <span className='text-[14px] text-[var(--m-faint)]'>{demo.searchPlaceholder}</span>
                  </button>
                </div>

                {order && (
                  <button
                    type='button'
                    onClick={() => tab("orders")}
                    className='mx-6 mt-4 flex items-center gap-3.5 rounded-[32px] bg-[var(--m-primary)] p-4 text-left text-white'
                  >
                    <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20'>
                      <Icon name='truck' size={24} />
                    </span>
                    <span className='flex flex-1 flex-col gap-0.5'>
                      <span className='text-[14px] font-bold'>{demo.bannerTitle}</span>
                      <span className='text-[12px] text-white/90'>{demo.trackSteps[trackStep]}</span>
                    </span>
                    <Icon name='next' size={20} width={2.2} />
                  </button>
                )}

                <div className='flex flex-col gap-3 px-6 pt-6'>
                  <span className='text-[18px] font-bold tracking-[-.02em]'>{demo.aisles}</span>
                  <div className='grid grid-cols-2 gap-3'>
                    {CATEGORIES.map((id) => (
                      <button
                        key={id}
                        type='button'
                        onClick={() => {
                          setCategory(id);
                          go("category");
                        }}
                        className='flex flex-col gap-[9px] rounded-[24px] border border-[var(--m-stroke)] bg-[var(--m-surface)] p-3.5 text-left'
                      >
                        <span className='text-[13px] font-bold'>{demo.categories[id]}</span>
                        <span className='grid grid-cols-2 gap-[7px]'>
                          {PRODUCTS.filter((item) => item.category === id)
                            .slice(0, 4)
                            .map((item) => (
                              <img key={item.id} src={item.photo} alt='' width='60' height='54' loading='lazy' className='h-[54px] w-full rounded-[12px] object-cover' />
                            ))}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col gap-3 pl-6 pt-6'>
                  <div className='flex items-baseline justify-between pr-6'>
                    <span className='text-[18px] font-bold tracking-[-.02em]'>{demo.popular}</span>
                    <button
                      type='button'
                      onClick={() => {
                        setCategory("all");
                        go("category");
                      }}
                      className='min-h-[44px] text-[12px] font-semibold text-[var(--m-primary)]'
                    >
                      {demo.seeAll}
                    </button>
                  </div>
                  <div className='flex gap-3 overflow-x-auto pb-1 pr-6'>
                    {["headphones", "dress", "serum", "lamp", "sneakers"].map((id) => (
                      <ProductCard key={id} item={byId[id]} wide />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {screen === "category" && (
              <div className='flex flex-col gap-3 px-4 pb-6 pt-6'>
                <div className='flex items-center gap-2'>
                  <RoundButton label={demo.back} onClick={back} className='border-transparent bg-transparent'>
                    <Icon name='back' size={21} width={2.2} />
                  </RoundButton>
                  <div className='flex flex-1 flex-col'>
                    <Title titleRef={titleRef} className='text-[20px] leading-tight'>
                      {category === "all" ? demo.allItems : demo.categories[category]}
                    </Title>
                    <span className='text-[11px] text-[var(--m-muted)]'>{countLabel(listed.length)}</span>
                  </div>
                </div>
                <div role='group' aria-label={demo.aisles} className='-mx-4 flex gap-2 overflow-x-auto px-4'>
                  {["all", ...CATEGORIES].map((id) => (
                    <button
                      key={id}
                      type='button'
                      aria-pressed={category === id}
                      onClick={() => setCategory(id)}
                      className={`min-h-[40px] shrink-0 rounded-full border px-4 text-[13px] font-semibold ${
                        category === id ? "border-[var(--m-text)] bg-[var(--m-text)] text-white" : "border-[var(--m-stroke)] bg-[var(--m-surface)]"
                      }`}
                    >
                      {id === "all" ? demo.all : demo.categories[id]}
                    </button>
                  ))}
                </div>
                <div className='grid grid-cols-2 gap-3 pt-1'>
                  {listed.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {screen === "product" && product && (
              <div className='flex flex-col bg-[var(--m-surface)] pb-4'>
                <div className='relative h-[300px] bg-[var(--m-ph)]'>
                  <img src={product.photo} alt='' width='390' height='300' className='h-full w-full object-cover' />
                  <RoundButton label={demo.back} onClick={back} className='absolute left-5 top-6 border-transparent bg-white/95'>
                    <Icon name='back' size={21} width={2.2} />
                  </RoundButton>
                  <RoundButton
                    label={demo.favorite}
                    pressed={Boolean(favorites[product.id])}
                    onClick={() => setFavorites((current) => ({ ...current, [product.id]: !current[product.id] }))}
                    className='absolute right-5 top-6 border-transparent bg-white/95'
                  >
                    <Icon name='heart' size={21} color={favorites[product.id] ? "#C62828" : "currentColor"} fillColor={favorites[product.id] ? "#C62828" : "none"} />
                  </RoundButton>
                </div>
                <div className='flex flex-col gap-3.5 px-6 pt-5'>
                  <Title titleRef={titleRef} className='text-[21px] leading-[26px]'>
                    {demo.products[product.id]}
                  </Title>
                  <span className='text-[28px] font-bold tracking-[-.02em]'>{price(product.price)}</span>
                  <div className='flex flex-col gap-0.5 text-[11px] text-[var(--m-muted)]'>
                    <span>
                      {demo.shippedBy} <span className='font-semibold text-[var(--m-text)]'>LivSight</span>
                    </span>
                    <span>
                      {demo.soldBy} <span className='text-[var(--m-primary)]'>{demo.partnerShop}</span>
                    </span>
                  </div>
                  <div className='flex flex-col gap-1.5 rounded-[24px] bg-[var(--m-info)] p-3.5 text-[var(--m-ink)]'>
                    <span className='flex items-center gap-2 text-[13px] font-bold'>
                      <Icon name='truck' size={17} />
                      {demo.deliveryTitle}
                    </span>
                    <span className='text-[12px] leading-[18px]'>{demo.deliveryBody}</span>
                  </div>
                </div>
              </div>
            )}

            {screen === "cart" && (
              <div className='flex flex-col pb-4'>
                <div className='flex items-baseline justify-between px-4 pt-8'>
                  <Title titleRef={titleRef} className='text-[22px]'>
                    {demo.cart}
                  </Title>
                  {cartCount > 0 && <span className='text-[12px] text-[var(--m-muted)]'>{countLabel(cartCount)}</span>}
                </div>
                {items.length === 0 ? (
                  <div className='flex flex-col items-start gap-4 px-4 pt-6'>
                    <p className='text-[14px] text-[var(--m-muted)]'>{demo.emptyCart}</p>
                    <PrimaryButton onClick={() => tab("home")}>{demo.browse}</PrimaryButton>
                  </div>
                ) : (
                  <div className='mx-4 mt-3 overflow-hidden rounded-[24px] border border-[var(--m-stroke)] bg-[var(--m-surface)]'>
                    <div className='border-b border-[var(--m-stroke)] px-4 py-3'>
                      <p className='text-[13px] font-bold'>{demo.parcel}</p>
                      <p className='text-[11px] text-[var(--m-muted)]'>
                        {demo.soldBy} {demo.partnerShop}
                      </p>
                    </div>
                    <ul className='flex flex-col'>
                      {items.map(([id, count], index) => (
                        <li key={id} className={`flex gap-3 px-4 py-3.5 ${index > 0 ? "border-t border-[var(--m-stroke)]" : ""}`}>
                          <img src={byId[id].photo} alt='' width='68' height='68' className='h-[68px] w-[68px] shrink-0 rounded-[18px] object-cover' />
                          <div className='flex min-w-0 flex-1 flex-col gap-1.5'>
                            <span className='truncate text-[13px] font-semibold'>{demo.products[id]}</span>
                            <span className='text-[15px] font-bold'>{price(byId[id].price * count)}</span>
                            <div className='flex items-center gap-3'>
                              <Stepper
                                small
                                value={count}
                                onMinus={() => changeCart(id, -1)}
                                onPlus={() => changeCart(id, 1)}
                                minusLabel={fill(demo.decrease, { name: demo.products[id] })}
                                plusLabel={fill(demo.increase, { name: demo.products[id] })}
                              />
                              <button type='button' onClick={() => changeCart(id, -count)} className='min-h-[40px] text-[12px] font-semibold text-[var(--m-primary)]'>
                                {demo.remove}
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {screen === "payment" && (
              <div className='flex flex-col gap-4 px-6 pb-6 pt-6'>
                <div className='flex items-center gap-3.5'>
                  <RoundButton label={demo.back} onClick={back}>
                    <Icon name='back' size={21} width={2.2} />
                  </RoundButton>
                  <Title titleRef={titleRef} className='text-[18px]'>
                    {demo.payment}
                  </Title>
                </div>
                <ol className='flex items-center gap-2 text-[11px] font-semibold'>
                  <li className='flex items-center gap-1.5 text-[var(--m-ok)]'>
                    <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--m-ok)] text-white'>
                      <Icon name='check' size={13} width={3} />
                    </span>
                    {demo.stepAddress}
                  </li>
                  <li aria-hidden='true' className='h-0.5 flex-1 bg-[var(--m-ok)]' />
                  <li aria-current='step' className='flex items-center gap-1.5 text-[var(--m-primary)]'>
                    <span className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--m-primary)] text-white'>2</span>
                    {demo.payment}
                  </li>
                  <li aria-hidden='true' className='h-0.5 flex-1 bg-[var(--m-stroke)]' />
                  <li className='flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--m-stroke)] text-[var(--m-muted)]'>
                    <span className='sr-only'>{demo.stepConfirm}</span>
                    <span aria-hidden='true'>3</span>
                  </li>
                </ol>

                {awaitingMomo ? (
                  <div className='flex flex-col items-center gap-3 rounded-[32px] border border-[var(--m-stroke)] bg-[var(--m-surface)] p-5 text-center'>
                    <span className='flex h-[92px] w-[92px] items-center justify-center rounded-full border-4 border-[var(--m-info)] bg-[var(--m-info)] motion-safe:animate-pulse'>
                      <Icon name='phone' size={42} width={1.7} color='var(--m-primary)' />
                    </span>
                    <p className='text-[20px] font-bold leading-tight tracking-[-.02em]'>{demo.momoTitle}</p>
                    <p className='text-[13px] leading-5 text-[var(--m-muted)]'>{demo.momoBody}</p>
                    <dl className='flex w-full flex-col gap-2 rounded-[24px] bg-[var(--m-bg)] p-4 text-[12px]'>
                      <div className='flex items-baseline justify-between'>
                        <dt className='text-[var(--m-muted)]'>{demo.amount}</dt>
                        <dd className='text-[20px] font-bold'>{price(subtotal)}</dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-[var(--m-muted)]'>{demo.operator}</dt>
                        <dd className='font-semibold'>Mobile Money</dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-[var(--m-muted)]'>{demo.reference}</dt>
                        <dd className='font-semibold'>LS-24818</dd>
                      </div>
                    </dl>
                    <div className='w-full text-left'>
                      <p className='pb-2 text-[12px] font-semibold'>{demo.waiting}</p>
                      <div className='h-2 overflow-hidden rounded-full bg-[var(--m-stroke)]'>
                        <div className='h-full w-2/3 rounded-full bg-[var(--m-primary)] motion-safe:animate-pulse' />
                      </div>
                    </div>
                    <PrimaryButton outline onClick={() => placeOrder("momo")}>
                      {demo.momoCheck}
                    </PrimaryButton>
                    <button type='button' onClick={() => setAwaitingMomo(false)} className='min-h-[44px] text-[13px] font-semibold text-[var(--m-muted)]'>
                      {demo.changeMethod}
                    </button>
                  </div>
                ) : (
                  <>
                    <fieldset className='flex flex-col gap-2.5'>
                      <legend className='pb-2 text-[13px] font-bold'>{demo.choosePayment}</legend>
                      {[
                        ["momo", demo.payMomo, demo.payMomoHint],
                        ["cash", demo.payCash, demo.payCashHint],
                      ].map(([id, label, hint]) => (
                        <label
                          key={id}
                          className={`flex cursor-pointer items-center gap-3 rounded-[24px] border bg-[var(--m-surface)] p-4 ${payment === id ? "border-[var(--m-primary)] ring-1 ring-[var(--m-primary)]" : "border-[var(--m-stroke)]"}`}
                        >
                          <input type='radio' name='demo-payment' value={id} checked={payment === id} onChange={() => setPayment(id)} className='h-4 w-4 accent-[#23709C]' />
                          <span className='flex flex-col'>
                            <span className='text-[14px] font-bold'>{label}</span>
                            <span className='text-[12px] text-[var(--m-muted)]'>{hint}</span>
                          </span>
                        </label>
                      ))}
                    </fieldset>
                    <div className='rounded-[24px] border border-[var(--m-stroke)] bg-[var(--m-surface)] p-4 text-[12px]'>
                      <p className='font-bold'>{demo.deliveredTo}</p>
                      <p className='text-[var(--m-muted)]'>{demo.deliveredToValue}</p>
                    </div>
                    <div className='flex items-baseline justify-between'>
                      <span className='text-[14px] font-bold'>{demo.total}</span>
                      <span className='text-[22px] font-bold tracking-[-.02em]'>{price(subtotal)}</span>
                    </div>
                    <PrimaryButton onClick={() => (payment === "momo" ? setAwaitingMomo(true) : placeOrder("cash"))}>
                      {payment === "momo" ? fill(demo.pay, { amount: price(subtotal) }) : demo.confirm}
                    </PrimaryButton>
                  </>
                )}
              </div>
            )}

            {screen === "confirmed" && order && (
              <div className='flex flex-col gap-4 px-4 pb-6 pt-10'>
                <div className='flex flex-col items-center gap-2 text-center'>
                  <span className='flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[var(--m-ok-bg)]'>
                    <Icon name='check' size={46} width={2.4} color='var(--m-ok)' />
                  </span>
                  <Title titleRef={titleRef} className='pt-3 text-[24px]'>
                    {demo.confirmedTitle}
                  </Title>
                  <p className='text-[13px] text-[var(--m-muted)]'>
                    {fill(order.method === "momo" ? demo.paidWith : demo.toPay, { amount: price(order.subtotal) })}
                  </p>
                </div>
                <div className='flex gap-2.5 rounded-[24px] bg-[var(--m-info)] p-4 text-[12px] leading-[18px] text-[var(--m-ink)]'>
                  <Icon name='info' size={18} />
                  <span>{demo.confirmedBody}</span>
                </div>
                <div className='flex items-center gap-3 rounded-[24px] border border-[var(--m-stroke)] bg-[var(--m-surface)] p-4'>
                  {order.photo && <img src={order.photo} alt='' width='52' height='52' className='h-[52px] w-[52px] rounded-[16px] object-cover' />}
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-[13px] font-bold'>{demo.orderRef}</span>
                    <span className='text-[11px] text-[var(--m-muted)]'>
                      {countLabel(order.count)} · {price(order.subtotal)}
                    </span>
                    <span className='text-[11px] font-semibold text-[var(--m-ok)]'>{demo.trackSteps[0]}</span>
                  </div>
                </div>
                <div className='rounded-[24px] border border-[var(--m-stroke)] bg-[var(--m-surface)] p-4 text-[12px]'>
                  <p className='font-bold'>{demo.deliveredTo}</p>
                  <p className='text-[var(--m-muted)]'>{demo.deliveredToValue}</p>
                </div>
                <PrimaryButton onClick={() => go("tracking", { replace: true })}>{demo.trackParcel}</PrimaryButton>
                <button type='button' onClick={() => tab("home")} className='min-h-[44px] text-[14px] font-semibold text-[var(--m-muted)]'>
                  {demo.keepShopping}
                </button>
              </div>
            )}

            {screen === "tracking" && order && (
              <div className='relative flex min-h-full flex-col'>
                <div className='relative h-[330px] shrink-0 overflow-hidden bg-[var(--m-ph)]' aria-hidden='true'>
                  <div className='absolute inset-0 opacity-60 [background:repeating-linear-gradient(0deg,transparent_0_32px,var(--m-stroke)_32px_33px),repeating-linear-gradient(90deg,transparent_0_32px,var(--m-stroke)_32px_33px)]' />
                  <svg viewBox='0 0 390 330' className='absolute inset-0 h-full w-full' preserveAspectRatio='xMidYMid slice'>
                    <path d='M96 250 C 150 230, 170 160, 226 126' fill='none' strokeWidth='5' strokeLinecap='round' strokeDasharray='1 12' style={{ stroke: "var(--m-primary)" }} />
                    <g transform='translate(226 126)'>
                      <path d='M0 -22 C 11 -22, 16 -14, 16 -7 C 16 5, 0 18, 0 18 C 0 18, -16 5, -16 -7 C -16 -14, -11 -22, 0 -22 Z' style={{ fill: "var(--m-text)" }} />
                      <circle cy='-7' r='6' fill='#fff' />
                    </g>
                  </svg>
                  <span
                    className='absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[var(--m-primary)] text-white transition-all duration-700'
                    style={{ left: `${[24, 38, 50, 58][trackStep]}%`, top: `${[76, 62, 50, 38][trackStep]}%` }}
                  >
                    <Icon name='moto' size={22} width={2} />
                  </span>
                </div>
                <RoundButton label={demo.back} onClick={() => tab("home")} className='absolute left-4 top-6 border-transparent'>
                  <Icon name='back' size={20} width={2.2} />
                </RoundButton>
                <div className='-mt-8 flex flex-1 flex-col gap-4 rounded-t-[32px] bg-[var(--m-surface)] px-5 pb-6 pt-5 shadow-[0_-4px_20px_rgba(0,0,0,.1)]'>
                  <span aria-hidden='true' className='h-1 w-10 self-center rounded-full bg-[var(--m-stroke)]' />
                  <div className='flex flex-col gap-1'>
                    <span className='text-[11px] text-[var(--m-muted)]'>
                      {demo.orderRef} · {order.method === "momo" ? demo.paidMomo : demo.payOnDelivery}
                    </span>
                    <Title titleRef={titleRef} className='text-[22px]'>
                      {demo.etaTitles[trackStep]}
                    </Title>
                  </div>
                  <div className='flex items-center gap-3 rounded-[24px] bg-[var(--m-bg)] p-3.5'>
                    <span aria-hidden='true' className='flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[var(--m-ph)] text-[14px] font-bold text-[var(--m-muted)]'>
                      IS
                    </span>
                    <span className='flex flex-col gap-0.5'>
                      <span className='text-[13px] font-bold'>{demo.courierName}</span>
                      <span className='text-[11px] text-[var(--m-muted)]'>{demo.courierRole}</span>
                    </span>
                  </div>
                  <ol aria-live='polite' className='flex flex-col'>
                    {demo.trackSteps.map((label, index) => (
                      <li key={label} className='flex gap-3'>
                        <span className='flex flex-col items-center'>
                          <span
                            aria-hidden='true'
                            className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
                              index < trackStep || (index === trackStep && index === demo.trackSteps.length - 1)
                                ? "bg-[var(--m-ok)] text-white"
                                : index === trackStep
                                  ? "border-[3px] border-[var(--m-primary)] bg-[var(--m-surface)]"
                                  : "border-2 border-[var(--m-stroke)]"
                            }`}
                          >
                            {(index < trackStep || (index === trackStep && index === demo.trackSteps.length - 1)) && <Icon name='check' size={12} width={3.4} />}
                          </span>
                          {index < demo.trackSteps.length - 1 && <span aria-hidden='true' className={`w-0.5 flex-1 ${index < trackStep ? "bg-[var(--m-ok)]" : "bg-[var(--m-stroke)]"}`} />}
                        </span>
                        <span className={`pb-4 text-[13px] ${index === trackStep ? "font-bold text-[var(--m-primary)]" : index < trackStep ? "font-semibold" : "text-[var(--m-faint)]"}`}>{label}</span>
                      </li>
                    ))}
                  </ol>
                  {trackStep < demo.trackSteps.length - 1 && (
                    <PrimaryButton outline onClick={() => setTrackStep((step) => step + 1)}>
                      {demo.nextStep}
                    </PrimaryButton>
                  )}
                </div>
              </div>
            )}

            {screen === "orders" && (
              <div className='flex flex-col items-start gap-4 px-6 pt-8'>
                <Title titleRef={titleRef} className='text-[22px]'>
                  {demo.nav.orders}
                </Title>
                <p className='text-[14px] text-[var(--m-muted)]'>{demo.noOrder}</p>
                <PrimaryButton onClick={() => tab("home")}>{demo.browse}</PrimaryButton>
              </div>
            )}

            {screen === "account" && (
              <div className='flex flex-col items-start gap-4 px-6 pt-8'>
                <Title titleRef={titleRef} className='text-[22px]'>
                  {demo.nav.account}
                </Title>
                <p className='text-[14px] text-[var(--m-muted)]'>{demo.accountBody}</p>
              </div>
            )}
          </div>

          {toast && (
            <p role='status' className='absolute bottom-[110px] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--m-text)] px-4 py-2.5 text-[12px] font-semibold text-white shadow-lg'>
              {toast}
              <button
                type='button'
                onClick={() => {
                  setToast("");
                  go("cart");
                }}
                className='font-bold underline underline-offset-2'
              >
                {demo.viewCart}
              </button>
            </p>
          )}

          {screen === "product" && product && (
            <div className='flex items-center gap-3 border-t border-[var(--m-stroke)] bg-[var(--m-surface)] px-6 pb-8 pt-3.5 shadow-[0_-2px_12px_rgba(0,0,0,.06)]'>
              <Stepper
                value={quantity}
                onMinus={() => setQuantity((value) => Math.max(1, value - 1))}
                onPlus={() => setQuantity((value) => value + 1)}
                minusLabel={fill(demo.decrease, { name: demo.products[product.id] })}
                plusLabel={fill(demo.increase, { name: demo.products[product.id] })}
              />
              <PrimaryButton onClick={addToCart}>{demo.addToCart}</PrimaryButton>
            </div>
          )}

          {screen === "cart" && items.length > 0 && (
            <div className='flex flex-col gap-2.5 border-t border-[var(--m-stroke)] bg-[var(--m-surface)] px-4 pb-8 pt-3.5 text-[12px] shadow-[0_-2px_12px_rgba(0,0,0,.06)]'>
              <div className='flex justify-between'>
                <span className='text-[var(--m-muted)]'>{demo.articles}</span>
                <span className='font-semibold'>{price(subtotal)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-[var(--m-muted)]'>{demo.delivery}</span>
                <span className='font-semibold'>{demo.deliveryValue}</span>
              </div>
              <div className='flex items-baseline justify-between'>
                <span className='text-[14px] font-bold'>{demo.total}</span>
                <span className='text-[22px] font-bold tracking-[-.02em]'>{price(subtotal)}</span>
              </div>
              <PrimaryButton onClick={() => go("payment")}>{demo.placeOrder}</PrimaryButton>
            </div>
          )}

          {withTabs && (
            <nav aria-label={demo.tabsLabel} className='flex border-t border-[var(--m-stroke)] bg-[var(--m-surface)] pb-6 pt-2'>
              {[
                ["home", "home", demo.nav.home],
                ["search", "search", demo.nav.search],
                ["cart", "cart", demo.nav.cart],
                ["orders", "truck", demo.nav.orders],
                ["account", "user", demo.nav.account],
              ].map(([id, icon, label]) => {
                const current = tabFor === id;
                return (
                  <button
                    key={id}
                    type='button'
                    aria-current={current ? "page" : undefined}
                    onClick={() => {
                      if (id === "search") {
                        setCategory("all");
                        setHistory([]);
                        setScreen("category");
                      } else tab(id);
                    }}
                    className={`flex min-h-[52px] flex-1 flex-col items-center justify-center gap-1 text-[10px] ${current ? "font-bold text-[var(--m-primary)]" : "font-medium text-[var(--m-faint)]"}`}
                  >
                    <span className='relative'>
                      <Icon name={icon} size={24} />
                      {id === "cart" && cartCount > 0 && (
                        <span className='absolute -right-2 -top-1.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[var(--m-primary)] px-1 text-[10px] font-bold text-white'>
                          <span aria-hidden='true'>{cartCount}</span>
                          <span className='sr-only'>{fill(demo.cartBadge, { count: cartCount })}</span>
                        </span>
                      )}
                    </span>
                    {label}
                  </button>
                );
              })}
            </nav>
          )}
          <span aria-hidden='true' className='pointer-events-none absolute bottom-2 left-1/2 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-[var(--m-text)]' />
        </div>
      </section>
    </div>
  );
};

export default MarketplaceDemo;
