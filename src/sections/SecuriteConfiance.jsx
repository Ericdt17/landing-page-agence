import {
  howItWorksHeading,
  howItWorksSteps,
  howItWorksSubheadline,
} from "../constants";

const SecuriteConfiance = () => {
  return (
    <section id='fonctionnalites' className='relative scroll-mt-24'>
      <div className='max-container px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[1.15]'>
            {howItWorksHeading}
          </h2>
          <p className='mt-4 font-montserrat text-base leading-7 text-gray-600 sm:text-lg sm:leading-8'>
            {howItWorksSubheadline}
          </p>
        </div>

        <ul className='mt-10 grid list-none grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:gap-6'>
          {howItWorksSteps.map((step) => (
            <li
              key={step.number}
              className='relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card sm:px-8 sm:py-9'
            >
              <span className='font-montserrat text-sm font-bold tracking-wide text-brand-blue'>
                {step.number}
              </span>

              <h3 className='mt-3 font-montserrat text-xl font-bold leading-snug text-gray-900 sm:text-2xl'>
                {step.title}
              </h3>

              <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600 sm:text-base'>
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SecuriteConfiance;
