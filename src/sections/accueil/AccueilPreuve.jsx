import CountUp from "../../components/CountUp";
import { accueilProof } from "../../constants/accueil";
import { useLandingPublic } from "../../context/LandingPublicContext";

const formatCount = (count) => new Intl.NumberFormat("fr-FR").format(count);

/**
 * Un seul compteur vivant, lu depuis l'API publique. Tant qu'elle ne répond
 * pas, un tiret : jamais de chiffre inventé, jamais de fausse « dernière
 * livraison ».
 */
const AccueilPreuve = () => {
  const { completedDeliveries } = useLandingPublic();
  const live = completedDeliveries != null;

  return (
    <section aria-label='Chiffres' className='px-[18px] md:px-16'>
      <div className='h-px bg-ls-rule' />
      <div className='flex flex-wrap items-end justify-between gap-12 pb-9 pt-10 md:pb-[38px] md:pt-11'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-[9px]'>
            <span
              aria-hidden='true'
              className={`h-[7px] w-[7px] rounded-full ${live ? "bg-ls-ok shadow-[0_0_0_4px_rgba(46,125,50,.16)]" : "bg-ls-dim"}`}
            />
            <span className='ls-kicker text-ls-muted'>{accueilProof.liveLabel}</span>
          </div>
          <p className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
            <span className='ls-num text-[46px] leading-[.95] md:text-[82px]' aria-busy={live ? undefined : "true"}>
              <CountUp value={live ? completedDeliveries : "—"} format={formatCount} />
            </span>
            <span className='ls-body text-ls-muted'>{accueilProof.counterLabel}</span>
          </p>
        </div>
      </div>
      <div className='h-px bg-ls-rule' />
      <dl className='grid grid-cols-2 gap-px bg-ls-rule md:grid-cols-4'>
        {accueilProof.figures.map((figure, index) => (
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
