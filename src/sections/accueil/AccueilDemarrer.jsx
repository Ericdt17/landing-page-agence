import { useCopy } from "../../i18n/useCopy";
import WhatsAppButton from "../../components/site/WhatsAppButton";

/**
 * Les trois étapes du démarrage, numérotées et séparées par le blanc (sans
 * filets), puis le CTA après les étapes : on lit le parcours, on agit.
 */
const AccueilDemarrer = () => {
  const { steps } = useCopy("accueil");
  return (
  <section id='demarrer' aria-labelledby='accueil-demarrer' className='scroll-mt-6 px-[18px] pb-16 md:px-16 md:pb-[88px]'>
    <h2 id='accueil-demarrer' className='ls-h ls-d2 max-w-[22ch] pb-10 md:pb-12'>
      {steps.title}
    </h2>
    <ol className='flex flex-col gap-9 md:grid md:grid-cols-3 md:gap-10'>
      {steps.steps.map((step) => (
        <li key={step.number}>
          <span aria-hidden='true' className='ls-num text-xs font-semibold text-ls-accent'>{step.number}</span>
          <h3 className='ls-h ls-d3 pb-2 pt-2'>{step.title}</h3>
          <p className='ls-cap text-ls-muted'>{step.text}</p>
        </li>
      ))}
    </ol>
    <div className='pt-10 md:pt-12'>
      <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid'>
        {steps.cta}
      </WhatsAppButton>
    </div>
  </section>
  );
};

export default AccueilDemarrer;
