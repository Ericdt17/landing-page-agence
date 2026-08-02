import {
  ArchiveBoxIcon,
  CheckBadgeIcon,
  TruckIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { WhatsAppIcon } from "../components";
import {
  promoBadge,
  promoHeadlineEmphasis,
  promoHeadlineLine1,
  promoHeadlineLine2,
  promoOfferLeft,
  promoOfferRight,
  promoSubheading,
  promoCtaLabel,
  promoFootnotes,
  whatsappCtaHref,
} from "../constants";

const OfferCard = ({ icon, kicker, headline }) => {
  const Icon = icon;

  return (
    <div className='relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-tarif-card backdrop-blur-md'>
      <Icon
        className='mx-auto h-8 w-8 text-white'
        aria-hidden='true'
      />

      <p className='mt-10 text-center font-montserrat text-xs font-extrabold uppercase tracking-[0.3em] text-white/80'>
        {kicker}
      </p>
      <p className='mt-5 text-center font-montserrat text-5xl font-extrabold italic uppercase tracking-tight text-white sm:text-6xl'>
        {headline}
      </p>
    </div>
  );
};

const Promotion = () => {
  return (
    <section className='relative overflow-hidden scroll-mt-24'>
      <div className='relative max-container padding-x py-16 sm:py-20 lg:py-24'>
        <div className='relative overflow-hidden rounded-[48px] border border-white/20 bg-gradient-to-br from-brand-blue via-brand-blue to-lime-900 shadow-cta-final'>
          <div className='absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-[0.08]' aria-hidden='true' />

          <div className='relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
            <div className='flex justify-center'>
              <span className='inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-6 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-md'>
                <span className='h-2.5 w-2.5 rounded-full bg-lime-300' aria-hidden='true' />
                {promoBadge}
              </span>
            </div>

            <h2 className='mx-auto mt-8 max-w-4xl text-center font-palanquin text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.8px]'>
              <span className='block'>{promoHeadlineLine1}</span>
              <span className='mt-2 inline-block rounded-2xl bg-white px-4 py-2 text-brand-blue shadow-soft-card sm:px-6'>
                {promoHeadlineEmphasis}
              </span>
              <span className='inline-block'>{promoHeadlineLine2}</span>
            </h2>

            <div className='mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-12'>
              <OfferCard
                icon={TruckIcon}
                kicker={promoOfferLeft.kicker}
                headline={promoOfferLeft.headline}
              />
              <OfferCard
                icon={ArchiveBoxIcon}
                kicker={promoOfferRight.kicker}
                headline={promoOfferRight.headline}
              />
            </div>

            <p className='mx-auto mt-10 max-w-3xl text-center font-montserrat text-lg leading-7 text-white/90 sm:text-xl sm:leading-8'>
              {promoSubheading}
            </p>

            <div className='mt-10 flex justify-center'>
              <a
                href={whatsappCtaHref}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-[64px] items-center justify-center gap-3 rounded-full bg-white px-10 font-montserrat text-lg font-extrabold text-brand-blue shadow-3xl transition-opacity hover:opacity-95'
              >
                <WhatsAppIcon className='h-5 w-5 shrink-0' />
                {promoCtaLabel}
              </a>
            </div>

            <div className='mt-6 flex flex-col items-center justify-center gap-3 text-white/70 sm:flex-row sm:gap-8'>
              <div className='inline-flex items-center gap-2 font-montserrat text-sm font-bold'>
                <CheckBadgeIcon className='h-4 w-4' aria-hidden='true' />
                {promoFootnotes[0]}
              </div>
              <div className='inline-flex items-center gap-2 font-montserrat text-sm font-bold'>
                <CreditCardIcon className='h-4 w-4' aria-hidden='true' />
                {promoFootnotes[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
