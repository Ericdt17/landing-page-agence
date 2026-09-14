import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { logoMark } from "../../assets/images";
import { navItems, routes } from "../../constants/routes";
import { LANGUAGES } from "../../i18n";
import { useCopy, useLanguage } from "../../i18n/useCopy";
import WhatsAppButton from "./WhatsAppButton";

const enabledOnly = (list) => list.filter((item) => item.enabled);
const items = enabledOnly(navItems).map((item) => (item.children ? { ...item, children: enabledOnly(item.children) } : item));

const linkTone = (isActive) => (isActive ? "font-semibold text-ls-text" : "text-ls-muted hover:text-ls-text");

const NavItem = ({ item, label, soon, onNavigate, className }) => (
  <NavLink to={item.to} onClick={onNavigate} className={({ isActive }) => `${className} ${linkTone(isActive)}`}>
    {label}
    {item.soon && <sup className='ls-soon'>{soon}</sup>}
  </NavLink>
);

export const SiteLogo = ({ tone = "text-ls-text" }) => (
  <span className={`inline-flex items-center gap-[9px] ${tone}`}>
    <img src={logoMark} alt='' width='28' height='28' className='h-7 w-7' />
    <span className='ls-h text-xl tracking-[-0.01em]'>LivSight</span>
  </span>
);

/**
 * Sélecteur FR · EN : deux boutons à bascule. Le choix est mémorisé dans le
 * navigateur ; la langue de la page (`<html lang>`) suit.
 */
export const LanguageSwitch = ({ className = "" }) => {
  const copy = useCopy("site");
  const { language, setLanguage } = useLanguage();
  return (
    <div role='group' aria-label={copy.language.label} className={`flex items-center text-xs font-semibold ${className}`}>
      {LANGUAGES.map((code, index) => (
        <span key={code} className='flex items-center'>
          {index > 0 && (
            <span aria-hidden='true' className='px-0.5 text-ls-faint'>
              ·
            </span>
          )}
          <button
            type='button'
            lang={code}
            aria-pressed={language === code}
            aria-label={copy.language.names[code]}
            onClick={() => setLanguage(code)}
            className={`rounded-md px-1.5 py-2 transition-colors ${
              language === code ? "text-ls-text underline decoration-2 underline-offset-4" : "text-ls-faint hover:text-ls-text"
            }`}
          >
            {copy.language.short[code]}
          </button>
        </span>
      ))}
    </div>
  );
};

/**
 * Menu déroulant « Entreprise » : un bouton qui ouvre la liste des pages de
 * l'entreprise. Se ferme avec Échap (le focus revient au bouton), par un clic
 * ailleurs, quand le focus quitte le menu ou après une navigation.
 */
const NavGroup = ({ item, copy }) => {
  const [open, setOpen] = useState(false);
  const wrapper = useRef(null);
  const button = useRef(null);
  const { pathname } = useLocation();
  const current = item.children.some((child) => pathname.startsWith(child.to));
  const panelId = `menu-${item.id}`;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (!wrapper.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrapper}
      className='relative'
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type='button'
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-1 whitespace-nowrap transition-colors ${linkTone(current)}`}
      >
        {copy.nav.links[item.id]}
        <ChevronDownIcon aria-hidden='true' className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          id={panelId}
          aria-label={copy.nav.entrepriseMenu}
          className='absolute right-0 top-full z-50 mt-3 flex min-w-[220px] flex-col rounded-2xl border border-ls-rule bg-ls-surface p-2 shadow-[0_18px_40px_rgba(14,21,24,.12)]'
        >
          {item.children.map((child) => (
            <li key={child.id}>
              <NavLink
                to={child.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block whitespace-nowrap rounded-xl px-3 py-2.5 transition-colors hover:bg-ls-fill ${linkTone(isActive)}`
                }
              >
                {copy.nav.links[child.id]}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SiteNav = () => {
  const copy = useCopy("site");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className='border-b border-ls-rule bg-ls-bg'>
      <nav
        aria-label={copy.nav.label}
        className='mx-auto flex max-w-[1440px] items-center gap-3 px-[18px] py-3.5 md:gap-10 md:px-16 md:py-[22px]'
      >
        <Link to={routes.home} aria-label={copy.nav.home} onClick={close}>
          <SiteLogo />
        </Link>

        <ul className='hidden items-center gap-[26px] text-sm xl:flex'>
          {items.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <NavGroup item={item} copy={copy} />
              ) : (
                <NavItem item={item} label={copy.nav.links[item.id]} soon={copy.nav.soon} className='whitespace-nowrap transition-colors' />
              )}
            </li>
          ))}
        </ul>

        <div className='ml-auto flex items-center gap-2 md:gap-[18px]'>
          <LanguageSwitch className='max-sm:hidden' />
          <WhatsAppButton className='ls-btn ls-btn-sm ls-btn-solid max-sm:hidden'>{copy.nav.cta}</WhatsAppButton>
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ls-stroke text-ls-text xl:hidden'
            aria-expanded={open}
            aria-controls='menu-principal'
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <XMarkIcon className='h-5 w-5' aria-hidden='true' />
            ) : (
              <Bars3Icon className='h-5 w-5' aria-hidden='true' />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div id='menu-principal' className='border-t border-ls-rule xl:hidden'>
          <ul className='mx-auto flex max-w-[1440px] flex-col px-[18px] md:px-16'>
            {items.map((item) =>
              item.children ? (
                <li key={item.id} className='border-b border-ls-rule pb-2 pt-4'>
                  <p className='ls-kicker text-ls-faint'>{copy.nav.links[item.id]}</p>
                  <ul className='flex flex-col'>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <NavItem
                          item={child}
                          label={copy.nav.links[child.id]}
                          soon={copy.nav.soon}
                          onNavigate={close}
                          className='flex py-3 text-base'
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.id} className='border-b border-ls-rule'>
                  <NavItem
                    item={item}
                    label={copy.nav.links[item.id]}
                    soon={copy.nav.soon}
                    onNavigate={close}
                    className='flex py-4 text-base'
                  />
                </li>
              ),
            )}
          </ul>
          <div className='mx-auto flex max-w-[1440px] flex-col gap-4 px-[18px] pb-6 pt-5 md:px-16'>
            <LanguageSwitch className='sm:hidden' />
            <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid w-full' onClick={close}>
              {copy.nav.cta}
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
