import {
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  InboxStackIcon,
} from "@heroicons/react/24/outline";
import { problemEyebrow, problemHeadline, problemPoints } from "../constants";

const iconMap = {
  "chat-bubble": ChatBubbleLeftRightIcon,
  inbox: InboxStackIcon,
  banknotes: BanknotesIcon,
};

const LeProbleme = () => {
  return (
    <section
      id='probleme'
      className='relative overflow-hidden scroll-mt-24 rounded-[32px] bg-gray-50/80'
    >
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.12]' aria-hidden='true' />
      <div className='relative max-container px-6 py-10 sm:px-10 sm:py-14 lg:px-14'>
        <p className='font-montserrat text-sm font-semibold uppercase tracking-[1.4px] text-brand-blue'>
          {problemEyebrow}
        </p>
        <h2 className='mt-4 max-w-4xl font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'>
          {problemHeadline}
        </h2>
        <div className='mt-4 h-1.5 w-24 rounded-full bg-brand-blue' aria-hidden='true' />

        <ul className='mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8'>
          {problemPoints.map(({ iconId, title, description }) => {
            const Icon = iconMap[iconId];
            return (
              <li
                key={title}
                className='flex flex-col rounded-3xl border border-gray-100 bg-white px-6 py-7 shadow-soft-card'
              >
                <Icon className='h-6 w-6 text-coral-red' aria-hidden='true' />
                <h3 className='mt-5 font-montserrat text-lg font-bold text-gray-900'>
                  {title}
                </h3>
                <p className='mt-3 font-montserrat text-sm leading-relaxed text-gray-600'>
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LeProbleme;
