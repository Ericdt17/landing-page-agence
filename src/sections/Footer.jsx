/**
 * LivSight footer : layout from Figma §16.
 * All navigation targets come from `src/constants/index.js` (`footerColumns`, `footerSocialLinks`, `footerLocales`).
 * See file-level notes there: hrefs are placeholders until real pages or URLs exist.
 */
import { Link } from "react-router-dom";
import { headerLogo } from "../assets/images";
import {
  footerColumns,
  footerCopyright,
  footerLocales,
  footerSocialLinks,
  footerTagline,
  footerSpaPaths,
} from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className='max-container grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8'>
        <div className='flex flex-col'>
          <Link to='/' className='inline-block w-fit'>
            <img
              src={headerLogo}
              alt='LivSight'
              width={160}
              height={48}
              className='h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[180px] object-contain'
            />
          </Link>
          <p className='mt-6 max-w-xs font-montserrat text-base leading-6 text-gray-500'>
            {footerTagline}
          </p>
          <div className='mt-6 flex gap-3'>
            {footerSocialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='flex h-10 w-10 items-center justify-center text-gray-700 transition-colors hover:text-gray-900'
              >
                <img src={icon} alt='' width={20} height={20} className='m-0' />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className='font-montserrat text-base font-bold text-gray-900'>
              {column.title}
            </h4>
            <ul className='mt-6 flex list-none flex-col gap-3'>
              {column.links.map((item) => (
                <li key={item.label}>
                  {footerSpaPaths.includes(item.href) ? (
                    <Link
                      to={item.href}
                      className='font-montserrat text-sm leading-5 text-gray-500 transition-colors hover:text-gray-900'
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className='font-montserrat text-sm leading-5 text-gray-500 transition-colors hover:text-gray-900'
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='max-container mt-8 sm:mt-12 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:pt-8 sm:flex-row sm:items-center sm:justify-between'>
        <p className='font-montserrat text-xs leading-4 text-gray-400'>
          {footerCopyright}
        </p>
        <div className='flex items-center gap-3 sm:gap-6'>
          {footerLocales.map(({ code, label, href, active }) =>
            active ? (
              <span
                key={code}
                className='font-montserrat text-xs font-bold text-brand-blue'
                aria-current='page'
              >
                {label}
              </span>
            ) : (
              <a
                key={code}
                href={href}
                className='font-montserrat text-xs font-bold text-gray-400 opacity-70 transition-opacity hover:opacity-100'
              >
                {label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
