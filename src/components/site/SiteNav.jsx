import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logoMark } from "../../assets/images";
import { siteNavCta, siteNavLinks } from "../../constants/site";

const links = siteNavLinks.filter((link) => link.enabled);

const NavItem = ({ link, onNavigate, className }) => (
  <NavLink
    to={link.to}
    onClick={onNavigate}
    className={({ isActive }) =>
      `${className} ${isActive ? "font-semibold text-ls-text" : "text-ls-muted hover:text-ls-text"}`
    }
  >
    {link.label}
    {link.soon && <sup className='ls-soon'>BIENTÔT</sup>}
  </NavLink>
);

export const SiteLogo = ({ tone = "text-ls-text" }) => (
  <span className={`inline-flex items-center gap-[9px] ${tone}`}>
    <img src={logoMark} alt='' width='28' height='28' className='h-7 w-7' />
    <span className='ls-h text-xl tracking-[-0.01em]'>LivSight</span>
  </span>
);

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
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
        aria-label='Navigation principale'
        className='mx-auto flex max-w-[1440px] items-center gap-3 px-[18px] py-3.5 md:gap-10 md:px-16 md:py-[22px]'
      >
        <Link to='/' aria-label='LivSight, accueil' onClick={close}>
          <SiteLogo />
        </Link>

        <ul className='hidden items-center gap-[26px] text-sm lg:flex'>
          {links.map((link) => (
            <li key={link.label}>
              <NavItem link={link} className='whitespace-nowrap transition-colors' />
            </li>
          ))}
        </ul>

        <div className='ml-auto flex items-center gap-2 md:gap-[18px]'>
          <a
            href={siteNavCta.href}
            target='_blank'
            rel='noopener noreferrer'
            className='ls-btn ls-btn-sm ls-btn-solid max-sm:hidden'
          >
            {siteNavCta.label}
          </a>
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ls-stroke text-ls-text lg:hidden'
            aria-expanded={open}
            aria-controls='menu-principal'
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
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
        <div id='menu-principal' className='border-t border-ls-rule lg:hidden'>
          <ul className='mx-auto flex max-w-[1440px] flex-col px-[18px] md:px-16'>
            {links.map((link) => (
              <li key={link.label} className='border-b border-ls-rule'>
                <NavItem link={link} onNavigate={close} className='flex py-4 text-base' />
              </li>
            ))}
          </ul>
          <div className='mx-auto max-w-[1440px] px-[18px] pb-6 pt-5 md:px-16'>
            <a
              href={siteNavCta.href}
              target='_blank'
              rel='noopener noreferrer'
              className='ls-btn ls-btn-lg ls-btn-solid w-full'
              onClick={close}
            >
              {siteNavCta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
