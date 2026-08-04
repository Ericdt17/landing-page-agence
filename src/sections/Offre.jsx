import {
  BanknotesIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  GiftIcon,
  MapPinIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../components";
import {
  offreBadge,
  offreClosing,
  offreCtaHref,
  offreCtaLabel,
  offreHeadlineLines,
  offreStack,
  offreSubheadline,
} from "../constants";

const iconMap = {
  truck: TruckIcon,
  cube: CubeIcon,
  "map-pin": MapPinIcon,
  banknotes: BanknotesIcon,
  device: DevicePhoneMobileIcon,
  gift: GiftIcon,
};

const Offre = () => {
  return (
    <section id='offre' className='relative scroll-mt-24'>
      <div className='max-container px-6 py-10 sm:px-10 sm:py-14 lg:px-14'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='inline-flex max-w-full items-center rounded-full bg-brand-blue px-4 py-1.5'>
            <span className='font-montserrat text-[11px] font-semibold leading-snug text-white sm:text-xs'>
              {offreBadge}
            </span>
          </span>

          <h2 className='mt-6 font-montserrat text-2xl font-bold leading-snug text-gray-900 sm:text-3xl sm:leading-tight md:text-4xl lg:text-[48px] lg:leading-[1.15]'>
            {offreHeadlineLines.map((line, index) => (
              <span
                key={line}
                className={
                  index === 0 ? "block" : "mt-2 block text-slate-gray"
                }
              >
                {line}
              </span>
            ))}
          </h2>

          <p className='mt-4 font-montserrat text-base font-semibold leading-7 text-brand-blue sm:text-lg'>
            {offreSubheadline}
          </p>
        </div>

        <ul className='mx-auto mt-10 grid max-w-4xl list-none grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4'>
          {offreStack.map(({ iconId, text }) => {
            const Icon = iconMap[iconId];
            return (
              <li
                key={text}
                className='flex items-center gap-3 rounded-2xl border border-brand-blue/15 bg-pale-blue/50 px-5 py-4 text-left sm:px-6 sm:py-5'
              >
                <Icon
                  className='h-6 w-6 shrink-0 text-brand-blue'
                  aria-hidden='true'
                />
                <span className='font-montserrat text-base font-semibold leading-6 text-gray-900 sm:text-lg'>
                  {text}
                </span>
              </li>
            );
          })}
        </ul>

        <div className='mx-auto mt-10 max-w-xl text-center sm:mt-12'>
          <p className='font-montserrat text-lg font-bold text-gray-900 sm:text-xl'>
            {offreClosing}
          </p>
          <div className='mt-6 flex justify-center'>
            <Button
              label={offreCtaLabel}
              backgroundColor='bg-brand-blue'
              textColor='text-white'
              borderColor='border-brand-blue'
              href={offreCtaHref}
              showWhatsAppIcon
              className='min-h-[48px] max-w-full px-5 py-3 !text-sm !font-bold !leading-snug sm:min-h-[52px] sm:px-8 sm:!text-base'
              iconWrapperClassName='ml-1 inline-flex items-center justify-center'
              iconAlt=''
              iconURL={undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offre;
