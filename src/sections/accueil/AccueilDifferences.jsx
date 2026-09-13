import { useCopy } from "../../i18n/useCopy";

/** Une liste séparée par des filets, pas quatre cartes. */
const AccueilDifferences = () => {
  const { differences } = useCopy("accueil");
  return (
  <section aria-labelledby='accueil-differences' className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
    <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[72px]'>
      <div className='flex flex-col gap-[18px] lg:sticky lg:top-10'>
        <span className='ls-kicker text-ls-accent'>{differences.kicker}</span>
        <h2 id='accueil-differences' className='ls-h ls-d2'>
          {differences.title}
        </h2>
        <p className='ls-body text-ls-muted'>{differences.body}</p>
      </div>
      <dl className='flex flex-col border-t border-ls-rule'>
        {differences.rows.map((row) => (
          <div
            key={row.title}
            className='grid grid-cols-1 gap-2 border-b border-ls-rule py-6 md:grid-cols-[260px_minmax(0,1fr)] md:gap-10 md:py-[30px]'
          >
            <dt className='ls-h ls-d3'>{row.title}</dt>
            <dd className='ls-body text-ls-muted'>{row.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
  );
};

export default AccueilDifferences;
