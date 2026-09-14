import { Link } from "react-router-dom";
import {
  siteFooterAddressLines,
  siteFooterColumns,
  siteFooterCopyright,
  siteSocialLinks,
  siteWhatsappHref,
} from "../../constants/site";
import WhatsAppIcon from "../WhatsAppIcon";
import { SiteLogo } from "./SiteNav";

const linkClass = "text-ls-ink-mute transition-colors hover:text-ls-ink-fg";

const FooterLink = ({ link }) => {
  const label = (
    <>
      {link.label}
      {link.soon && <sup className='ls-soon !text-ls-ink-speed'>BIENTÔT</sup>}
    </>
  );
  if (link.href) {
    return (
      <a href={link.href} target='_blank' rel='noopener noreferrer' className={linkClass}>
        {label}
      </a>
    );
  }
  return (
    <Link to={link.to} className={linkClass}>
      {label}
    </Link>
  );
};

const SiteFooter = () => (
  <footer className='bg-ls-ink-bg px-[18px] pb-10 pt-12 text-ls-ink-fg md:px-14 md:pt-14'>
    <div className='mx-auto max-w-[1440px]'>
      <div className='grid grid-cols-2 gap-8 pt-2 lg:grid-cols-[320px_repeat(4,minmax(0,1fr))]'>
        <div className='col-span-2 flex flex-col gap-2.5 lg:col-span-1'>
          <Link to='/' aria-label='LivSight, accueil' className='w-fit'>
            <SiteLogo tone='text-ls-ink-fg' />
          </Link>
          <p className='text-[13px] leading-relaxed text-ls-ink-mute'>
            {siteFooterAddressLines.map((line) => (
              <span key={line} className='block'>
                {line}
              </span>
            ))}
          </p>
        </div>

        {siteFooterColumns.map((column) => (
          <nav key={column.title} aria-label={column.title} className='text-[13px]'>
            <h2 className='font-bold text-ls-ink-fg'>{column.title}</h2>
            <ul className='mt-2.5 flex flex-col gap-2.5'>
              {column.links
                .filter((link) => link.enabled)
                .map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className='mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-ls-ink-line pt-6'>
        <p className='text-xs text-ls-ink-mute'>{siteFooterCopyright}</p>
        <ul className='flex items-center gap-2.5'>
          {siteSocialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.label}
                className='inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-ls-ink-line transition-colors hover:border-ls-ink-fg'
              >
                <img src={social.icon} alt='' width='16' height='16' className='h-4 w-4 opacity-80 invert' />
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteWhatsappHref}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LivSight sur WhatsApp'
              className='inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-ls-ink-line text-ls-ink-mute transition-colors hover:border-ls-ink-fg hover:text-ls-ink-fg'
            >
              <WhatsAppIcon className='h-4 w-4' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
