import { trustedByEyebrow, trustedByPartners } from "../constants";

const TrustedBy = () => {
  return (
    <section
      id='trusted-by'
      className='relative overflow-hidden border-y border-gray-100 bg-gray-50'
    >
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container padding-x py-12 sm:py-16'>
        <p className='text-center font-montserrat text-sm font-bold uppercase tracking-[1.4px] text-gray-500'>
          {trustedByEyebrow}
        </p>

        <div className='mt-10 overflow-hidden' aria-hidden='true'>
          <ul className='flex w-max motion-safe:animate-marquee items-center gap-x-8 sm:gap-x-12 lg:gap-x-16'>
            {[...trustedByPartners, ...trustedByPartners].map((name, i) => (
              <li
                key={i}
                className='opacity-50 hover:opacity-100 transition-opacity duration-300'
              >
                <span className='font-montserrat text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-gray-800'>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ul className='sr-only'>
          {trustedByPartners.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustedBy;
