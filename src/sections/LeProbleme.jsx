import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  problemEyebrow,
  problemHeadlineLines,
  problemPoints,
} from "../constants";

const LeProbleme = () => {
  return (
    <section id='probleme' className='relative scroll-mt-24'>
      <div className='max-container px-6 py-10 sm:px-10 sm:py-14 lg:px-14'>
        <p className='font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
          {problemEyebrow}
        </p>
        <h2 className='mt-4 max-w-4xl font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[1.15]'>
          {problemHeadlineLines.map((line, index) => (
            <span
              key={line}
              className={index === 0 ? "block" : "mt-2 block text-slate-gray"}
            >
              {line}
            </span>
          ))}
        </h2>
        <div
          className='mt-4 h-1.5 w-24 rounded-full bg-brand-blue'
          aria-hidden='true'
        />

        <ul className='mt-10 grid list-none grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:gap-5'>
          {problemPoints.map((point) => (
            <li
              key={point}
              className='flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-soft-card sm:px-6 sm:py-5'
            >
              <XMarkIcon
                className='h-6 w-6 shrink-0 text-coral-red'
                aria-hidden='true'
              />
              <span className='font-montserrat text-base font-semibold leading-6 text-gray-900 sm:text-lg'>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LeProbleme;
