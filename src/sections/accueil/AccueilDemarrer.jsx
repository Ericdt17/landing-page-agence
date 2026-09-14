import { useCopy } from "../../i18n/useCopy";
import WhatsAppButton from "../../components/site/WhatsAppButton";

const AccueilDemarrer = () => {
  const { steps } = useCopy("accueil");
  return (
  <section id='demarrer' aria-labelledby='accueil-demarrer' className='scroll-mt-6 px-[18px] pb-16 md:px-16 md:pb-[88px]'>
    <div className='flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end md:gap-10'>
      <h2 id='accueil-demarrer' className='ls-h ls-d2 max-w-[22ch]'>
        {steps.title}
      </h2>
      <WhatsAppButton className='ls-btn ls-btn-lg ls-btn-solid'>
        {steps.cta}
      </WhatsAppButton>
    </div>
    <ol className='grid grid-cols-1 gap-px border-y border-ls-rule bg-ls-rule md:grid-cols-3'>
      {steps.steps.map((step, index) => (
        <li
          key={step.number}
          className={`bg-ls-bg py-7 md:py-[34px] ${index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"}`}
        >
          <span className='ls-num text-xs font-semibold text-ls-accent'>{step.number}</span>
          <h3 className='ls-h ls-d3 pb-2 pt-3'>{step.title}</h3>
          <p className='ls-cap text-ls-muted'>{step.text}</p>
        </li>
      ))}
    </ol>
  </section>
  );
};

export default AccueilDemarrer;
