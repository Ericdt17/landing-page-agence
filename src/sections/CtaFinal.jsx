import { CheckIcon } from "@heroicons/react/24/solid";
import { WhatsAppIcon } from "../components";
import {
  ctaFinalHeading,
  ctaFinalPerks,
  ctaFinalPrimaryHref,
  ctaFinalPrimaryLabel,
  ctaFinalSubheading,
} from "../constants";

const CtaFinal = () => {
  return (
    <section id='cta-final' className='relative scroll-mt-24'>
      <div className='max-container padding-x py-12 sm:py-16 lg:py-20'>
        <div className='relative overflow-hidden rounded-[32px] bg-brand-blue shadow-cta-final sm:rounded-[48px]'>
          <div className='relative px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-20 lg:py-20'>
            <h2 className='font-montserrat text-2xl font-extrabold leading-snug text-white sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-[1.15]'>
              {ctaFinalHeading}
            </h2>
            <p className='mx-auto mt-4 max-w-2xl font-montserrat text-sm leading-6 text-blue-100 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8'>
              {ctaFinalSubheading}
            </p>

            <ul className='mx-auto mt-8 flex max-w-lg list-none flex-col gap-3 sm:mt-10'>
              {ctaFinalPerks.map((perk) => (
                <li
                  key={perk}
                  className='flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left sm:px-5 sm:py-3.5'
                >
                  <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue'>
                    <CheckIcon className='h-4 w-4' aria-hidden='true' />
                  </span>
                  <span className='font-montserrat text-sm font-semibold leading-6 text-white sm:text-base'>
                    {perk}
                  </span>
                </li>
              ))}
            </ul>

            <div className='mt-8 flex justify-center sm:mt-10'>
              <a
                href={ctaFinalPrimaryHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-[54px] min-w-0 items-center justify-center gap-2 rounded-full bg-white px-8 font-montserrat text-base font-bold text-brand-blue shadow-lg transition-opacity hover:opacity-95 sm:min-h-[70px] sm:min-w-[200px] sm:px-10 sm:text-lg'
              >
                <WhatsAppIcon className='h-5 w-5 shrink-0' />
                {ctaFinalPrimaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
