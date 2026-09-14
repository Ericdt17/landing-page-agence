import { Link } from "react-router-dom";
import { facebook, instagram } from "../../assets/icons";
import { footerColumns, links, routes } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";
import WhatsAppIcon from "../WhatsAppIcon";
import { SiteLogo } from "./SiteNav";

const linkClass = "text-ls-ink-mute transition-colors hover:text-ls-ink-fg";

const socials = [
  { id: "facebook", href: links.facebook, icon: facebook },
  { id: "instagram", href: links.instagram, icon: instagram },
];

const FooterLink = ({ link, label, soon }) => {
  const content = (
    <>
      {label}
      {link.soon && <sup className='ls-soon !text-ls-ink-speed'>{soon}</sup>}
    </>
  );
  if (link.href) {
    return (
      <a href={link.href} target='_blank' rel='noopener noreferrer' className={linkClass}>
        {content}
      </a>
    );
  }
  return (
    <Link to={link.to} className={linkClass}>
      {content}
    </Link>
  );
};

const SiteFooter = () => {
  const copy = useCopy("site");
  const { footer } = copy;

  return (
    <footer className='bg-ls-ink-bg px-[18px] pb-10 pt-12 text-ls-ink-fg md:px-14 md:pt-14'>
      <div className='mx-auto max-w-[1440px]'>
        <div className='grid grid-cols-2 gap-8 pt-2 lg:grid-cols-[320px_repeat(4,minmax(0,1fr))]'>
          <div className='col-span-2 flex flex-col gap-2.5 lg:col-span-1'>
            <Link to={routes.home} aria-label={copy.nav.home} className='w-fit'>
              <SiteLogo tone='text-ls-ink-fg' />
            </Link>
            <p className='text-[13px] leading-relaxed text-ls-ink-mute'>
              {footer.addressLines.map((line) => (
                <span key={line} className='block'>
                  {line}
                </span>
              ))}
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.id} aria-label={footer.columns[column.id]} className='text-[13px]'>
              <h2 className='font-bold text-ls-ink-fg'>{footer.columns[column.id]}</h2>
              <ul className='mt-2.5 flex flex-col gap-2.5'>
                {column.links
                  .filter((link) => link.enabled)
                  .map((link) => (
                    <li key={link.id}>
                      <FooterLink link={link} label={footer.links[link.id]} soon={copy.nav.soon} />
                    </li>
                  ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className='mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-ls-ink-line pt-6'>
          <p className='text-xs text-ls-ink-mute'>{footer.copyright}</p>
          <ul className='flex items-center gap-2.5'>
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={footer.social[social.id]}
                  className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-ls-ink-line transition-colors hover:border-ls-ink-fg'
                >
                  <img src={social.icon} alt='' width='16' height='16' className='h-4 w-4 opacity-80 invert' />
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.whatsapp}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={footer.social.whatsapp}
                className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-ls-ink-line text-ls-ink-mute transition-colors hover:border-ls-ink-fg hover:text-ls-ink-fg'
              >
                <WhatsAppIcon className='h-4 w-4' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
