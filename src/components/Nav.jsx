import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  navCtaLabel,
  navLinks,
  navMobileMenuCloseLabel,
  navMobileMenuOpenLabel,
  whatsappCtaHref,
} from "../constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md'>
      <nav className='flex justify-between items-center max-container px-4 sm:px-16 h-20'>
        <Link to='/'>
          <img
            src={headerLogo}
            alt='LivSight'
            width={190}
            height={72}
            className='m-0 w-[120px] sm:w-[160px] md:w-[200px] h-full max-h-10 sm:max-h-12 md:max-h-14 object-contain'
          />
        </Link>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='inline-flex items-center gap-2 font-montserrat leading-normal text-sm text-slate-gray hover:text-black transition-colors'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <a
            href={whatsappCtaHref}
            target='_blank'
            rel='noopener noreferrer'
            className='max-lg:hidden inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold font-montserrat text-white shadow-lg shadow-brand-blue/20 hover:opacity-95 transition-opacity'
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            {navCtaLabel}
          </a>

          <button
            type='button'
            className='hidden max-lg:flex items-center justify-center w-11 h-11 rounded-full hover:bg-black/5 transition-colors'
            aria-label={isMobileMenuOpen ? navMobileMenuCloseLabel : navMobileMenuOpenLabel}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <img src={hamburger} alt='' width={24} height={24} />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className='lg:hidden'>
          <div
            className='fixed inset-0 bg-black/20'
            aria-hidden='true'
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className='absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg'>
            <div className='max-container padding-x py-6 flex flex-col gap-4'>
              <ul className='flex flex-col gap-4'>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='inline-flex items-center gap-2 font-montserrat text-base text-slate-gray hover:text-black transition-colors'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappCtaHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold font-montserrat text-white shadow-lg shadow-brand-blue/20 hover:opacity-95 transition-opacity'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                {navCtaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
