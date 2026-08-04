import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Bannière CTA bleue partagée (sans grille superposée).
 * Utilisée sur les pages footer / landing.
 */
const BrandCtaCard = ({
  id,
  headingId,
  title,
  body,
  href,
  buttonLabel,
  children,
  className = "",
  cardClassName = "",
}) => {
  return (
    <section
      id={id}
      className={className}
      aria-labelledby={headingId}
    >
      <div
        className={`overflow-hidden rounded-[32px] bg-brand-blue px-6 py-10 text-center sm:px-10 sm:py-14 ${cardClassName}`}
      >
        <h2
          id={headingId}
          className='font-montserrat text-2xl font-extrabold text-white sm:text-3xl'
        >
          {title}
        </h2>
        {body ? (
          <p className='mx-auto mt-4 max-w-xl font-montserrat text-sm leading-relaxed text-blue-100 sm:text-base'>
            {body}
          </p>
        ) : null}
        {children}
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-8 inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-white px-8 font-montserrat text-base font-bold text-brand-blue shadow-lg transition-opacity hover:opacity-95 sm:min-h-[70px] sm:px-10 sm:text-lg'
        >
          <WhatsAppIcon className='h-5 w-5 shrink-0' />
          {buttonLabel}
        </a>
      </div>
    </section>
  );
};

export default BrandCtaCard;
