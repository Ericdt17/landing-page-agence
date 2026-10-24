import { useCopy } from "../../i18n/useCopy";

/** Quatre repères factuels entre filets ; aucun chiffre inventé. */
const AccueilPreuve = () => {
  const { proof } = useCopy("accueil");

  return (
    <section aria-label={proof.ariaLabel} className='px-[18px] md:px-16'>
      <div className='h-px bg-ls-rule' />
      <dl className='grid grid-cols-2 gap-px bg-ls-rule md:grid-cols-4'>
        {proof.figures.map((figure, index) => (
          <div
            key={figure.label}
            className={`flex flex-col-reverse bg-ls-bg py-7 md:py-[34px] ${index % 2 === 1 ? "pl-5" : "pr-5"} ${index > 0 ? "md:pl-8" : ""} md:pr-0`}
          >
            <dt className='ls-kicker pt-2 text-ls-faint'>{figure.label}</dt>
            <dd className='ls-num ls-stat'>{figure.value}</dd>
          </div>
        ))}
      </dl>
      <div className='h-px bg-ls-rule' />
    </section>
  );
};

export default AccueilPreuve;
