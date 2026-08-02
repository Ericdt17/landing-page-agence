import { CpuChipIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { impactFeatures, impactHeadingLines, impactStats } from "../constants";

const iconMap = {
  agents: UserGroupIcon,
  tech: CpuChipIcon,
};

const MetriquesCles = () => {
  return (
    <section
      id='impact'
      aria-labelledby='impact-heading'
      className='relative overflow-hidden scroll-mt-24 bg-security-ink'
    >
      <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.06]' aria-hidden='true' />
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <div
          className='pointer-events-none absolute right-[-220px] top-[-260px] h-[520px] w-[520px] rounded-full bg-brand-blue/20 blur-3xl'
          aria-hidden='true'
        />

        <div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
          <div>
            <h2
              id='impact-heading'
              className='font-montserrat text-2xl font-bold leading-snug text-white sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[48px]'
            >
              {impactHeadingLines.map((line) => (
                <span key={line} className='block'>
                  {line}
                </span>
              ))}
            </h2>

            <ul className='mt-10 space-y-8'>
              {impactFeatures.map((item) => {
                const Icon = iconMap[item.iconId];
                return (
                  <li key={item.title} className='flex items-start gap-4'>
                    <Icon
                      className='mt-1 h-5 w-5 shrink-0 text-lime-300'
                      aria-hidden='true'
                    />
                    <div>
                      <p className='font-montserrat text-lg font-bold text-white'>
                        {item.title}
                      </p>
                      <p className='mt-1 max-w-xl font-montserrat text-sm leading-6 text-slate-300'>
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className='grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6'>
            {impactStats.map((stat) => (
              <li
                key={stat.label}
                className='rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md'
              >
                <p className='font-montserrat text-2xl font-extrabold text-lime-300 sm:text-[30px] sm:leading-9'>
                  {stat.value}
                </p>
                <p className='mt-3 font-montserrat text-xs font-medium uppercase tracking-[0.14em] text-slate-300'>
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MetriquesCles;
