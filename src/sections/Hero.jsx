import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "../components";
import {
  heroBadge,
  heroCtaPrimaryHref,
  heroCtaReassurance,
  heroCtaSecondaryLabel,
  heroHeadlineEmphasis,
  heroHeadlineLines,
  heroPerks,
  heroSubheadline,
} from "../constants";

const Hero = () => {
  return (
    <section
      id='home'
      className='relative w-full overflow-hidden bg-transparent'
    >
      <div className='relative max-container padding-x pt-6 sm:pt-16 lg:pt-28 pb-8 sm:pb-14 lg:pb-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='inline-flex max-w-full items-center rounded-full bg-brand-blue px-4 py-1.5'>
            <span className='font-montserrat text-[11px] font-semibold leading-snug text-white sm:text-xs'>
              {heroBadge}
            </span>
          </div>

          <h1 className='mt-6 font-palanquin font-extrabold text-[#1a1a1a] text-[34px] leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.8px]'>
            {heroHeadlineLines.map((line) => {
              if (!line.includes(heroHeadlineEmphasis)) {
                return (
                  <span key={line} className='block'>
                    {line}
                  </span>
                );
              }

              const [before, after] = line.split(heroHeadlineEmphasis);
              return (
                <span key={line} className='block'>
                  {before}
                  <span className='text-brand-blue'>{heroHeadlineEmphasis}</span>
                  {after}
                </span>
              );
            })}
          </h1>

          <p className='mt-4 sm:mt-6 font-montserrat text-base leading-6 text-gray-600 sm:text-xl sm:leading-7'>
            {heroSubheadline}
          </p>

          <ul className='mx-auto mt-8 flex max-w-lg list-none flex-col gap-3 sm:mt-10'>
            {heroPerks.map((perk) => (
              <li
                key={perk}
                className='flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-pale-blue/60 px-4 py-3 text-left sm:px-5 sm:py-3.5'
              >
                <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white'>
                  <CheckIcon className='h-4 w-4' aria-hidden='true' />
                </span>
                <span className='font-montserrat text-sm font-semibold leading-6 text-gray-800 sm:text-base'>
                  {perk}
                </span>
              </li>
            ))}
          </ul>

          <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
            <Button
              label={heroCtaSecondaryLabel}
              backgroundColor='bg-brand-blue'
              textColor='text-white'
              borderColor='border-brand-blue'
              fullWidth
              href={heroCtaPrimaryHref}
              showWhatsAppIcon
              iconWrapperClassName='ml-1 inline-flex items-center justify-center'
              iconAlt=''
              iconURL={undefined}
            />
          </div>

          <p className='mx-auto mt-4 max-w-xl text-center font-montserrat text-xs leading-5 text-gray-500 sm:mt-5 sm:text-sm sm:leading-6'>
            {heroCtaReassurance}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
