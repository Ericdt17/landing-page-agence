import { CheckIcon } from "@heroicons/react/24/solid";
import { headerLogo } from "../assets/images";
import {
  solutionBody,
  solutionBullets,
  solutionEyebrow,
  solutionHeadlineLines,
} from "../constants";

const Solution = () => {
  return (
    <section id='solution' className='relative max-container scroll-mt-24'>
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]' aria-hidden='true' />
      <div className='relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
        <div className='order-2 lg:order-1 flex justify-center'>
          <div className='w-full max-w-xl rounded-[40px] border border-gray-100 bg-white p-10 shadow-soft-card sm:p-14'>
            <div className='flex items-center justify-center'>
              <img
                src={headerLogo}
                alt='LivSight'
                className='h-16 w-auto object-contain sm:h-20'
              />
            </div>
            <p className='mt-6 text-center font-montserrat text-sm text-gray-500'>
              Votre service de livraison
            </p>
          </div>
        </div>

        <div className='order-1 lg:order-2'>
          <p className='font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
            {solutionEyebrow}
          </p>
          <h2 className='mt-4 font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'>
            {solutionHeadlineLines.map((line) => (
              <span key={line} className='block'>
                {line}
              </span>
            ))}
          </h2>

          <p className='mt-5 max-w-xl font-montserrat text-base leading-7 text-gray-600 sm:text-lg'>
            {solutionBody}
          </p>

          <ul className='mt-8 space-y-4'>
            {solutionBullets.map((text) => (
              <li key={text} className='flex items-start gap-4'>
                <CheckIcon
                  className='mt-0.5 h-5 w-5 shrink-0 text-brand-blue'
                  aria-hidden='true'
                />
                <p className='font-montserrat text-base leading-6 text-gray-900'>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solution;
