import { reversementCopy } from "../../constants/offre";

const Operator = ({ children }) => (
  <span aria-hidden='true' className='text-xl text-ls-muted'>
    {children}
  </span>
);

const Term = ({ children, strong = false }) => (
  <span
    aria-hidden='true'
    className={`rounded-[10px] px-[15px] py-2 text-sm ${
      strong ? "bg-ls-ok-bg font-bold text-ls-ok" : "border border-ls-stroke bg-ls-fill font-semibold"
    }`}
  >
    {children}
  </span>
);

/** La formule du reversement, avec un relevé d'exemple. Partagée par Livraison et Tarifs. */
const ReversementFormule = ({ id, kicker = reversementCopy.kicker, withExample = false }) => (
  <section aria-labelledby={id} className='px-[18px] pb-16 md:px-16 md:pb-[84px]'>
    <div className='grid grid-cols-1 gap-8 border-t border-ls-rule pt-11 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-[72px]'>
      <div className='flex flex-col gap-4'>
        <span className='ls-kicker text-ls-accent'>{kicker}</span>
        <h2 id={id} className='ls-h ls-d2'>
          {reversementCopy.title}
        </h2>
        <p className='ls-body text-ls-muted'>{reversementCopy.body}</p>
      </div>

      <div className='flex flex-col justify-center gap-5'>
        <p className='flex flex-wrap items-center gap-3 rounded-[22px] border border-ls-rule bg-ls-surface p-6'>
          <span className='sr-only'>
            Montant reversé égale montant encaissé, moins les frais de livraison, moins les dettes en cours.
          </span>
          <span aria-hidden='true' className='ls-h text-lg'>
            Montant reversé
          </span>
          <Operator>=</Operator>
          <Term strong>Montant encaissé</Term>
          <Operator>−</Operator>
          <Term>Frais de livraison</Term>
          <Operator>−</Operator>
          <Term>Dettes en cours</Term>
        </p>

        {withExample && (
          <div>
            <p className='ls-kicker pb-3 text-ls-faint'>{reversementCopy.exampleLabel}</p>
            <dl className='grid grid-cols-2 gap-px border-y border-ls-rule bg-ls-rule md:grid-cols-4'>
              {reversementCopy.example.map((cell) => (
                <div
                  key={cell.label}
                  className={`flex flex-col-reverse gap-1 px-4 py-4 ${cell.highlight ? "bg-ls-ok-bg" : "bg-ls-bg"}`}
                >
                  <dt className={`text-[11px] ${cell.highlight ? "font-semibold text-ls-ok" : "text-ls-muted"}`}>
                    {cell.label}
                  </dt>
                  <dd className={`ls-num text-lg ${cell.highlight ? "text-ls-ok" : ""}`}>{cell.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <p className='ls-cap text-ls-muted'>{reversementCopy.note}</p>
      </div>
    </div>
  </section>
);

export default ReversementFormule;
