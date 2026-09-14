import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoMark } from "../../assets/images";
import { navItems, routes } from "../../constants/routes";
import { LANGUAGES } from "../../i18n";
import { useCopy, useLanguage } from "../../i18n/useCopy";
import WhatsAppButton from "./WhatsAppButton";

const items = navItems.filter((item) => item.enabled);

const NavItem = ({ item, label, soon, onNavigate, className }) => (
  <NavLink
    to={item.to}
    onClick={onNavigate}
    className={({ isActive }) =>
      `${className} ${isActive ? "font-semibold text-ls-text" : "text-ls-muted hover:text-ls-text"}`
    }
  >
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
        className='mx-auto flex max-w-[1440px] items-center gap-3 px-[18px] py-3.5 md:gap-10 md:px-16 md:py-[22px] xl:gap-7 xl:px-12 min-[1366px]:gap-10 min-[1366px]:px-16'
      >
        <Link to={routes.home} aria-label={copy.nav.home} onClick={close}>
          <SiteLogo />
        </Link>

        <ul className='hidden items-center gap-5 text-sm xl:flex min-[1366px]:gap-[26px]'>
          {items.map((item) => (
            <li key={item.id}>
              <NavItem item={item} label={copy.nav.links[item.id]} soon={copy.nav.soon} className='whitespace-nowrap transition-colors' />
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
            {items.map((item) => (
              <li key={item.id} className='border-b border-ls-rule'>
                <NavItem
                  item={item}
                  label={copy.nav.links[item.id]}
                  soon={copy.nav.soon}
                  onNavigate={close}
                  className='flex py-4 text-base'
                />
              </li>
            ))}
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
