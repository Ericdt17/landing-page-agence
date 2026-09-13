import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

/**
 * En-tête sombre des pages Entreprise (recrutement, candidature, à propos,
 * contact), comme dans les maquettes. `children` s'affiche sous le texte.
 */
const InkHero = ({ id, kicker, title, lede, backTo, backLabel, children }) => (
  <section aria-labelledby={id} className='bg-ls-ink-bg px-[18px] pb-14 pt-10 text-ls-ink-fg md:px-16 md:pb-[72px] md:pt-[60px]'>
    <div className='mx-auto flex max-w-[1440px] flex-col gap-5 md:gap-6'>
      {backTo && (
        <Link
          to={backTo}
          className='inline-flex w-fit items-center gap-1.5 text-[13px] text-ls-ink-mute transition-colors hover:text-ls-ink-fg'
        >
          <ArrowLeftIcon className='h-4 w-4' aria-hidden='true' />
          {backLabel}
        </Link>
      )}
      {kicker && <span className='ls-kicker text-[#5CC2F0]'>{kicker}</span>}
      {title && (
        <h1 id={id} className='ls-h ls-d1 max-w-[18ch]'>
          {title}
        </h1>
      )}
      {lede && <p className='ls-lede max-w-[56ch] text-ls-ink-mute'>{lede}</p>}
      {children}
    </div>
  </section>
);

export default InkHero;
