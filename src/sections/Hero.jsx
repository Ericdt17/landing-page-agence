import { Button, WhatsAppIcon } from "../components";
import {
  heroBadge,
  heroCtaPrimaryHref,
  heroCtaPrimaryLabel,
  heroCtaSecondaryLabel,
  heroHeadlineEmphasis,
  heroHeadlineLines,
  heroSubheadline,
  whatsappCtaHref,
} from "../constants";

const Hero = () => {

  return (
    <section
      id='home'
      className='relative w-full overflow-hidden bg-transparent'
    >
      <div className='relative max-container padding-x pt-6 sm:pt-16 lg:pt-28 pb-8 sm:pb-14 lg:pb-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <div className='inline-flex items-center rounded-full bg-brand-blue px-4 py-1.5'>
            <span className='font-montserrat text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-white'>
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

          <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
            <Button
              label={heroCtaPrimaryLabel}
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

            <a
              href={whatsappCtaHref}
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center items-center gap-2 px-7 py-4 border rounded-full w-full sm:w-auto font-montserrat text-lg leading-none bg-white text-brand-blue border-gray-200 hover:bg-black/5 transition-colors'
            >
              <WhatsAppIcon className='h-5 w-5 shrink-0' />
              {heroCtaSecondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
