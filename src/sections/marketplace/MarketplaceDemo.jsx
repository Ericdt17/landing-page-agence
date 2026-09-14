import { ArrowLeftIcon, CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useEffect, useMemo, useRef, useState } from "react";
import charger from "../../assets/images/marketplace/demo/charger.webp";
import dress from "../../assets/images/marketplace/demo/dress.webp";
import headphones from "../../assets/images/marketplace/demo/headphones.webp";
import lamp from "../../assets/images/marketplace/demo/lamp.webp";
import leatherbag from "../../assets/images/marketplace/demo/leatherbag.webp";
import perfume from "../../assets/images/marketplace/demo/perfume.webp";
import plant from "../../assets/images/marketplace/demo/plant.webp";
import serum from "../../assets/images/marketplace/demo/serum.webp";
import sneakers from "../../assets/images/marketplace/demo/sneakers.webp";
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
  { id: "plant", category: "maison", price: 4900, photo: plant },
  { id: "lamp", category: "maison", price: 9200, photo: lamp },
];
const CATEGORIES = ["tech", "mode", "beaute", "maison"];
const byId = Object.fromEntries(PRODUCTS.map((product) => [product.id, product]));
const TRACK_MS = 2600;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Étape du parcours mise en avant à côté du téléphone */
const stepFor = (screen) => ({ home: 0, product: 1, cart: 1, checkout: 2, confirmed: 3, orders: 3 })[screen] ?? 0;

const ScreenTitle = ({ children, titleRef }) => (
  <h3 ref={titleRef} tabIndex={-1} className='ls-h text-[17px] outline-none'>
    {children}
  </h3>
);

const TopBar = ({ onBack, backLabel, title, titleRef }) => (
  <div className='flex items-center gap-2 border-b border-ls-rule px-3 py-2.5'>
    <button
      type='button'
      onClick={onBack}
      aria-label={backLabel}
      className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ls-text hover:bg-ls-fill'
    >
      <ArrowLeftIcon className='h-5 w-5' aria-hidden='true' />
    </button>
    <ScreenTitle titleRef={titleRef}>{title}</ScreenTitle>
  </div>
);

/**
 * Démonstration interactive de la future marketplace, dans un cadre de
 * téléphone : accueil, fiche article, panier, paiement, confirmation, suivi.
 * Tout reste dans le navigateur : aucune commande, aucun appel réseau.
 */
const MarketplaceDemo = () => {
  const { demo } = useCopy("marketplace");
  const { language } = useLanguage();
  const price = (amount) => formatFcfa(amount, language);

  const [screen, setScreen] = useState("home");
  const [productId, setProductId] = useState(null);
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState({});
  const [justAdded, setJustAdded] = useState(false);
  const [payment, setPayment] = useState("momo");
  const [order, setOrder] = useState(null);
  const [trackStep, setTrackStep] = useState(0);
  const titleRef = useRef(null);
  const firstRender = useRef(true);

  const cartItems = Object.entries(cart).filter(([, quantity]) => quantity > 0);
  const cartCount = cartItems.reduce((sum, [, quantity]) => sum + quantity, 0);
  const subtotal = cartItems.reduce((sum, [id, quantity]) => sum + byId[id].price * quantity, 0);
  const visible = useMemo(
    () => (category === "all" ? PRODUCTS : PRODUCTS.filter((product) => product.category === category)),
    [category],
  );

  /* À chaque changement d'écran, le focus va au titre du nouvel écran (clavier, lecteur d'écran) */
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    titleRef.current?.focus({ preventScroll: true });
  }, [screen, productId]);

  /* Suivi : les étapes avancent seules, sauf si l'appareil demande moins de mouvement */
  useEffect(() => {
    if (screen !== "orders" || !order || trackStep >= demo.trackSteps.length - 1 || prefersReducedMotion()) return undefined;
    const timer = setTimeout(() => setTrackStep((step) => step + 1), TRACK_MS);
    return () => clearTimeout(timer);
  }, [screen, order, trackStep, demo.trackSteps.length]);

  const go = (next, id = null) => {
    setScreen(next);
    if (id) setProductId(id);
    setJustAdded(false);
  };
  const add = (id, delta = 1) =>
    setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + delta) }));
  const restart = () => {
    setScreen("home");
    setProductId(null);
    setCategory("all");
    setCart({});
    setPayment("momo");
    setOrder(null);
    setTrackStep(0);
    setJustAdded(false);
  };
  const confirm = () => {
    setOrder({ items: cartItems, subtotal, payment });
    setCart({});
    setTrackStep(0);
    go("confirmed");
  };

  const product = productId ? byId[productId] : null;
  const activeStep = stepFor(screen);

  return (
    <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16'>
      <div className='flex flex-col gap-5 lg:order-2'>
        <div className='flex items-center gap-2.5'>
          <span className='rounded-full border border-ls-speed px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.08em] text-ls-speed'>
            {demo.badge}
          </span>
        </div>
        <h3 className='ls-h ls-d3'>{demo.title}</h3>
        <p className='ls-body text-ls-muted'>{demo.intro}</p>
        <ol className='flex flex-col border-t border-ls-rule'>
          {demo.steps.map((step, index) => (
            <li
              key={step}
              aria-current={index === activeStep ? "step" : undefined}
              className={`flex items-center gap-3 border-b border-ls-rule py-3.5 text-sm transition-colors ${
                index === activeStep ? "font-bold text-ls-text" : index < activeStep ? "text-ls-muted" : "text-ls-faint"
              }`}
            >
              <span
                aria-hidden='true'
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  index < activeStep ? "bg-ls-ok-bg text-ls-ok" : index === activeStep ? "bg-ls-text text-ls-bg" : "border border-ls-stroke"
                }`}
              >
                {index < activeStep ? <CheckIcon className='h-4 w-4' /> : index + 1}
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

      {/* Le téléphone */}
      <section
        aria-label={demo.regionLabel}
        className='mx-auto w-full max-w-[360px] rounded-[44px] border border-ls-rule bg-ls-ink-bg p-2.5 shadow-[0_24px_60px_rgba(14,21,24,.18)] lg:order-1'
      >
        <div lang='fr' className='relative flex h-[640px] flex-col overflow-hidden rounded-[36px] bg-ls-bg text-ls-text'>
          <div className='min-h-0 flex-1 overflow-y-auto'>
            {screen === "home" && (
              <div className='flex flex-col gap-4 px-4 pb-4 pt-5'>
                <div>
                  <p className='text-[11px] text-ls-faint'>{demo.location}</p>
                  <ScreenTitle titleRef={titleRef}>{demo.place}</ScreenTitle>
                </div>
                <div role='group' aria-label={demo.aisles} className='-mx-4 flex gap-2 overflow-x-auto px-4 pb-1'>
                  {["all", ...CATEGORIES].map((id) => (
                    <button
                      key={id}
                      type='button'
                      aria-pressed={category === id}
                      onClick={() => setCategory(id)}
                      className={`min-h-[40px] shrink-0 rounded-full border px-3.5 text-[13px] font-semibold ${
                        category === id ? "border-ls-text bg-ls-text text-ls-bg" : "border-ls-stroke bg-ls-surface"
                      }`}
                    >
                      {id === "all" ? demo.all : demo.categories[id]}
                    </button>
                  ))}
                </div>
                <p className='ls-kicker text-ls-faint'>{demo.popular}</p>
                <ul className='grid grid-cols-2 gap-3'>
                  {visible.map((item) => (
                    <li key={item.id}>
                      <button
                        type='button'
                        onClick={() => go("product", item.id)}
                        className='flex w-full flex-col gap-1.5 rounded-[20px] bg-ls-surface p-2 text-left shadow-[0_2px_8px_rgba(0,0,0,.05)] transition-transform hover:-translate-y-0.5'
                      >
                        <img src={item.photo} alt='' width='150' height='150' loading='lazy' className='aspect-square w-full rounded-[14px] object-cover' />
                        <span className='line-clamp-2 min-h-[32px] px-1 text-[12px] leading-tight'>{demo.products[item.id]}</span>
                        <span className='px-1 pb-1 text-[13px] font-bold'>{price(item.price)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {screen === "product" && product && (
              <div className='flex flex-col'>
                <TopBar onBack={() => go("home")} backLabel={demo.back} title={demo.products[product.id]} titleRef={titleRef} />
                <img src={product.photo} alt='' width='340' height='340' className='aspect-square w-full object-cover' />
                <div className='flex flex-col gap-3 p-4'>
                  <p className='text-[22px] font-extrabold'>{price(product.price)}</p>
                  <p className='text-[12px] text-ls-muted'>
                    {demo.seller} · <span className='font-semibold text-ls-accent'>{demo.shipped}</span>
                  </p>
                  <p className='text-[12px] font-semibold text-ls-ok'>{demo.inStock}</p>
                  <button
                    type='button'
                    onClick={() => {
                      add(product.id);
                      setJustAdded(true);
                    }}
                    className='ls-btn ls-btn-lg ls-btn-solid w-full'
                  >
                    {demo.addToCart}
                  </button>
                  <p aria-live='polite' className='min-h-[44px] text-center text-[13px]'>
                    {justAdded && (
                      <>
                        <span className='font-semibold text-ls-ok'>{demo.added}</span>
                        {" · "}
                        <button type='button' onClick={() => go("cart")} className='ls-link min-h-[44px] underline underline-offset-2'>
                          {demo.viewCart}
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </div>
            )}

            {screen === "cart" && (
              <div className='flex flex-col'>
                <TopBar onBack={() => go("home")} backLabel={demo.back} title={demo.cart} titleRef={titleRef} />
                {cartItems.length === 0 ? (
                  <div className='flex flex-col items-start gap-4 p-4'>
                    <p className='text-sm text-ls-muted'>{demo.emptyCart}</p>
                    <button type='button' onClick={() => go("home")} className='ls-btn ls-btn-line'>
                      {demo.browse}
                    </button>
                  </div>
                ) : (
                  <div className='flex flex-col gap-3 p-4'>
                    <ul className='flex flex-col gap-3'>
                      {cartItems.map(([id, quantity]) => (
                        <li key={id} className='flex items-center gap-3 rounded-[18px] bg-ls-surface p-2'>
                          <img src={byId[id].photo} alt='' width='56' height='56' className='h-14 w-14 rounded-xl object-cover' />
                          <div className='min-w-0 flex-1'>
                            <p className='truncate text-[12px] font-semibold'>{demo.products[id]}</p>
                            <p className='text-[12px] text-ls-muted'>{price(byId[id].price)}</p>
                          </div>
                          <div className='flex items-center'>
                            <button
                              type='button'
                              onClick={() => add(id, -1)}
                              aria-label={fill(demo.decrease, { name: demo.products[id] })}
                              className='inline-flex h-11 w-9 items-center justify-center rounded-full hover:bg-ls-fill'
                            >
                              <MinusIcon className='h-4 w-4' aria-hidden='true' />
                            </button>
                            <span className='w-5 text-center text-sm font-bold' aria-live='polite'>
                              {quantity}
                            </span>
                            <button
                              type='button'
                              onClick={() => add(id, 1)}
                              aria-label={fill(demo.increase, { name: demo.products[id] })}
                              className='inline-flex h-11 w-9 items-center justify-center rounded-full hover:bg-ls-fill'
                            >
                              <PlusIcon className='h-4 w-4' aria-hidden='true' />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <dl className='flex flex-col gap-1.5 border-t border-ls-rule pt-3 text-[13px]'>
                      <div className='flex justify-between'>
                        <dt className='text-ls-muted'>{demo.subtotal}</dt>
                        <dd className='font-bold'>{price(subtotal)}</dd>
                      </div>
                      <div className='flex justify-between'>
                        <dt className='text-ls-muted'>{demo.delivery}</dt>
                        <dd>{demo.deliveryValue}</dd>
                      </div>
                    </dl>
                    <button type='button' onClick={() => go("checkout")} className='ls-btn ls-btn-lg ls-btn-solid w-full'>
                      {demo.checkout}
                    </button>
                  </div>
                )}
              </div>
            )}

            {screen === "checkout" && (
              <div className='flex flex-col'>
                <TopBar onBack={() => go("cart")} backLabel={demo.back} title={demo.payment} titleRef={titleRef} />
                <div className='flex flex-col gap-3 p-4'>
                  <fieldset className='flex flex-col gap-2.5'>
                    <legend className='sr-only'>{demo.payment}</legend>
                    {[
                      ["momo", demo.payMomo, demo.payMomoHint],
                      ["cash", demo.payCash, demo.payCashHint],
                    ].map(([id, label, hint]) => (
                      <label
                        key={id}
                        className={`flex cursor-pointer items-center gap-3 rounded-[18px] border p-3.5 ${
                          payment === id ? "border-ls-primary bg-ls-select" : "border-ls-stroke bg-ls-surface"
                        }`}
                      >
                        <input
                          type='radio'
                          name='demo-payment'
                          value={id}
                          checked={payment === id}
                          onChange={() => setPayment(id)}
                          className='h-4 w-4 accent-[#1891CA]'
                        />
                        <span className='flex flex-col'>
                          <span className='text-[14px] font-bold'>{label}</span>
                          <span className='text-[12px] text-ls-muted'>{hint}</span>
                        </span>
                      </label>
                    ))}
                  </fieldset>
                  <div className='rounded-[18px] bg-ls-surface p-3.5 text-[13px]'>
                    <p className='text-[11px] text-ls-faint'>{demo.address}</p>
                    <p className='font-semibold'>{demo.place}</p>
                  </div>
                  <div className='flex justify-between text-[13px]'>
                    <span className='text-ls-muted'>{demo.subtotal}</span>
                    <span className='font-bold'>{price(subtotal)}</span>
                  </div>
                  <button type='button' onClick={confirm} className='ls-btn ls-btn-lg ls-btn-solid w-full'>
                    {demo.confirm}
                  </button>
                </div>
              </div>
            )}

            {screen === "confirmed" && (
              <div className='flex h-full flex-col items-center justify-center gap-4 p-6 text-center'>
                <span className='flex h-16 w-16 items-center justify-center rounded-full bg-ls-ok-bg text-ls-ok'>
                  <CheckIcon className='h-8 w-8' aria-hidden='true' />
                </span>
                <ScreenTitle titleRef={titleRef}>{demo.confirmedTitle}</ScreenTitle>
                <p className='text-[13px] text-ls-muted'>{demo.confirmedBody}</p>
                <button type='button' onClick={() => go("orders")} className='ls-btn ls-btn-lg ls-btn-solid w-full'>
                  {demo.track}
                </button>
              </div>
            )}

            {screen === "orders" && (
              <div className='flex flex-col'>
                <div className='relative h-[190px] overflow-hidden bg-ls-fill' aria-hidden='true'>
                  <svg viewBox='0 0 340 190' className='absolute inset-0 h-full w-full' preserveAspectRatio='xMidYMid slice'>
                    <g style={{ fill: "var(--ls-ph)" }}>
                      {[[12, 14, 86, 48], [110, 8, 110, 40], [232, 18, 96, 58], [16, 76, 70, 62], [100, 62, 104, 52], [218, 92, 110, 44], [22, 150, 128, 34], [166, 128, 160, 52]].map(([x, y, w, h]) => (
                        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx='4' />
                      ))}
                    </g>
                    <path d='M50 166 C 96 140, 110 104, 160 92 S 250 70, 290 44' fill='none' strokeWidth='3.5' strokeLinecap='round' strokeDasharray='2 9' style={{ stroke: "var(--ls-primary)" }} />
                    <circle cx='290' cy='44' r='6' style={{ fill: "var(--ls-text)" }} />
                    <circle
                      r='9'
                      strokeWidth='3'
                      style={{ fill: "var(--ls-primary)", stroke: "var(--ls-surface)", transition: "transform 600ms ease" }}
                      transform={`translate(${[[50, 166], [110, 122], [190, 86], [290, 44]][Math.min(trackStep, 3)].join(" ")})`}
                    />
                  </svg>
                </div>
                <div className='flex flex-col gap-3 p-4'>
                  <ScreenTitle titleRef={titleRef}>{demo.tracking}</ScreenTitle>
                  {order ? (
                    <>
                      <p className='text-[12px] text-ls-muted'>
                        {demo.orderRef} · {order.payment === "momo" ? demo.paidMomo : demo.payOnDelivery}
                      </p>
                      <ol className='flex flex-col gap-2.5' aria-live='polite'>
                        {demo.trackSteps.map((label, index) => (
                          <li key={label} className='flex items-center gap-3 text-[13px]'>
                            <span
                              aria-hidden='true'
                              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                index <= trackStep ? "bg-ls-ok text-white" : "border-2 border-ls-stroke"
                              }`}
                            >
                              {index <= trackStep && <CheckIcon className='h-3.5 w-3.5' />}
                            </span>
                            <span className={index === trackStep ? "font-bold" : index < trackStep ? "" : "text-ls-faint"}>{label}</span>
                          </li>
                        ))}
                      </ol>
                      {trackStep < demo.trackSteps.length - 1 && (
                        <button type='button' onClick={() => setTrackStep((step) => step + 1)} className='ls-btn ls-btn-line self-start'>
                          {demo.nextStep}
                        </button>
                      )}
                    </>
                  ) : (
                    <p className='text-[13px] text-ls-muted'>{demo.noOrder}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Barre d'onglets */}
          <nav aria-label={demo.regionLabel} className='grid grid-cols-3 border-t border-ls-rule bg-ls-surface'>
            {[
              ["home", demo.nav.home],
              ["cart", demo.nav.cart],
              ["orders", demo.nav.orders],
            ].map(([id, label]) => {
              const current = screen === id || (id === "home" && screen === "product") || (id === "cart" && screen === "checkout");
              return (
                <button
                  key={id}
                  type='button'
                  onClick={() => go(id)}
                  aria-current={current ? "page" : undefined}
                  className={`relative flex min-h-[54px] flex-col items-center justify-center text-[11px] font-semibold ${
                    current ? "text-ls-accent" : "text-ls-muted"
                  }`}
                >
                  {label}
                  {id === "cart" && cartCount > 0 && (
                    <span className='absolute right-[28%] top-1.5 min-w-[18px] rounded-full bg-ls-primary px-1 text-[10px] leading-[18px] text-white'>
                      <span aria-hidden='true'>{cartCount}</span>
                      <span className='sr-only'>{fill(demo.cartBadge, { count: cartCount })}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </section>
    </div>
  );
};

export default MarketplaceDemo;
