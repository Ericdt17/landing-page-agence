import CountUp from "../../components/CountUp";
import { useLandingPublic } from "../../context/LandingPublicContext";
import { useCopy, useLanguage } from "../../i18n/useCopy";

const formatCount = (language) => (count) => new Intl.NumberFormat(language === "en" ? "en-GB" : "fr-FR").format(count);

/**
 * Un seul compteur vivant, lu depuis l'API publique. Tant qu'elle ne répond
 * pas, le compteur n'est pas affiché : jamais de chiffre inventé, jamais de
 * fausse « dernière livraison ».
 */
const AccueilPreuve = () => {
  const { proof } = useCopy("accueil");
  const { language } = useLanguage();
  const { completedDeliveries } = useLandingPublic();
  const live = completedDeliveries != null;

  return (
    <section aria-label={proof.ariaLabel} className='px-[18px] md:px-16'>
      <div className='h-px bg-ls-rule' />
      {/* Sans réponse de l'API, pas de compteur du tout : jamais de case vide ni de chiffre inventé */}
      {live && (
        <>
        <div className='flex flex-wrap items-end justify-between gap-12 pb-9 pt-10 md:pb-[38px] md:pt-11'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-[9px]'>
              <span
                aria-hidden='true'
                className='h-[7px] w-[7px] rounded-full bg-ls-ok shadow-[0_0_0_4px_rgba(46,125,50,.16)]'
              />
              <span className='ls-kicker text-ls-muted'>{proof.liveLabel}</span>
            </div>
            <p className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
              <span className='ls-num text-[46px] leading-[.95] md:text-[82px]'>
                <CountUp value={completedDeliveries} format={formatCount(language)} />
              </span>
              <span className='ls-body text-ls-muted'>{proof.counterLabel}</span>
            </p>
          </div>
        </div>
        <div className='h-px bg-ls-rule' />
        </>
      )}
      <dl className='grid grid-cols-2 gap-px bg-ls-rule md:grid-cols-4'>
        {proof.figures.map((figure, index) => (
          <div
            key={figure.label}
            className={`flex flex-col-reverse bg-ls-bg py-7 md:py-[34px] ${index % 2 === 1 ? "pl-5" : "pr-5"} ${index > 0 ? "md:pl-8" : ""} md:pr-0`}
          >
            <dt className='ls-kicker pt-2 text-ls-faint'>{figure.label}</dt>
            <dd className='ls-num text-2xl md:text-[32px]'>{figure.value}</dd>
          </div>
        ))}
      </dl>
      <div className='h-px bg-ls-rule' />
    </section>
  );
};

export default AccueilPreuve;
