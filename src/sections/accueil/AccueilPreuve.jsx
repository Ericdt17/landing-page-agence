import { useRef } from "react";
import useFlowProgress from "../../components/useFlowProgress";
import { useCopy } from "../../i18n/useCopy";

/**
 * L'offre en quatre repères factuels : en-tête (titre et sous-titre), puis la
 * frise « itinéraire » pilotée par le défilement (useFlowProgress) : la ligne
 * bleue suit la lecture et chaque chiffre s'allume quand elle l'atteint.
 * Aucun chiffre inventé.
 */
const AccueilPreuve = () => {
  const { proof } = useCopy("accueil");
  const listRef = useRef(null);
  useFlowProgress(listRef);

  return (
    <section aria-labelledby='accueil-preuve' className='px-[18px] pt-12 md:px-16 md:pt-[68px]'>
      <div className='flex flex-col gap-[18px] pb-10 md:pb-12'>
        <h2 id='accueil-preuve' className='ls-h ls-d2 max-w-[22ch]'>
          {proof.title}
        </h2>
        <p className='ls-lede ls-measure text-ls-muted'>{proof.subtitle}</p>
      </div>
      <dl ref={listRef} className='relative flex flex-col gap-8 py-6 md:grid md:grid-cols-4 md:gap-8 md:py-8'>
        <div aria-hidden='true' className='ls-flow-line-y absolute bottom-10 left-[5px] top-2 w-0.5 rounded-full md:hidden' />
        <div aria-hidden='true' className='ls-flow-line-x absolute left-1.5 top-[5px] hidden h-0.5 rounded-full md:block md:right-[24%]' />
        {proof.figures.map((figure) => (
          <div key={figure.label} className='ls-flow-step relative flex flex-col-reverse pl-8 md:pl-0 md:pt-8'>
            <span aria-hidden='true' className='absolute left-0 top-2 h-3 w-3 rounded-full bg-ls-primary md:top-0' />
            <dt className='ls-cap pt-1.5 text-ls-muted'>{figure.label}</dt>
            <dd className='ls-h ls-num ls-stat'>{figure.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default AccueilPreuve;
