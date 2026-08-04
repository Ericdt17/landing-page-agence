import {
  BanknotesIcon,
  CubeIcon,
  MapPinIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import {
  solutionBenefits,
  solutionBenefitsTitle,
  solutionEyebrow,
  solutionHeadlineLines,
} from "../constants";

const iconMap = {
  truck: TruckIcon,
  "map-pin": MapPinIcon,
  banknotes: BanknotesIcon,
  cube: CubeIcon,
};

const Solution = () => {
  return (
    <section id='solution' className='relative max-container scroll-mt-24'>
      <div
        className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.15]'
        aria-hidden='true'
      />
      <div className='relative max-w-3xl'>
        <p className='font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
          {solutionEyebrow}
        </p>
        <h2 className='mt-4 font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[1.15]'>
          {solutionHeadlineLines.map((line, index) => (
            <span
              key={line}
              className={index === 0 ? "block" : "mt-2 block text-slate-gray"}
            >
              {line}
            </span>
          ))}
        </h2>

        <h3 className='mt-8 font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
          {solutionBenefitsTitle}
        </h3>

        <ul className='mt-5 space-y-4'>
          {solutionBenefits.map(({ iconId, text }) => {
            const Icon = iconMap[iconId];
            return (
              <li key={text} className='flex items-start gap-3'>
                <Icon
                  className='mt-0.5 h-6 w-6 shrink-0 text-brand-blue'
                  aria-hidden='true'
                />
                <p className='font-montserrat text-base font-medium leading-6 text-gray-900 sm:text-lg sm:leading-7'>
                  {text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Solution;
