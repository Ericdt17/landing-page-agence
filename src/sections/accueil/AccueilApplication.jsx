import { useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import useFlowProgress from "../../components/useFlowProgress";
import { useCopy } from "../../i18n/useCopy";

const flowSteps = ["orders", "stock", "payout", "tracking"];

/**
 * Présentation de l'application sans maquettes dessinées (pas de fausses
 * captures d'écran, décision du 2026-10-24) : les quatre promesses forment
 * une frise « itinéraire » animée au défilement. La dernière étape (suivi en
 * direct) est à venir, d'où son point creux.
 */
const AccueilApplication = () => {
  const { app } = useCopy("accueil");
  const listRef = useRef(null);
  useFlowProgress(listRef);
  return (
  <section aria-labelledby='accueil-application' className='px-[18px] pb-16 pt-14 md:px-16 md:pb-[76px] md:pt-[84px]'>
    <div className='grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-[72px]'>
      <div className='flex flex-col gap-[18px]'>
        <span className='ls-kicker text-ls-accent'>{app.kicker}</span>
        <h2 id='accueil-application' className='ls-h ls-d2 max-w-[20ch]'>
          {app.title}
        </h2>
      </div>
      <div className='flex max-w-[46ch] flex-col gap-4'>
        <p className='ls-body text-ls-muted'>{app.body}</p>
        <Link to={routes.application} className='ls-link inline-flex w-fit items-center gap-1.5 text-sm'>
          {app.link}
          <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
        </Link>
      </div>
    </div>

    <dl ref={listRef} className='relative mt-11 flex flex-col gap-8 md:mt-14 md:grid md:grid-cols-4 md:gap-8'>
      <div aria-hidden='true' className='ls-flow-line-y absolute bottom-8 left-[5px] top-1.5 w-0.5 rounded-full md:hidden' />
      <div aria-hidden='true' className='ls-flow-line-x absolute left-1.5 top-[5px] hidden h-0.5 rounded-full md:block md:right-[24%]' />
      {flowSteps.map((key) => (
        <div key={key} className='ls-flow-step relative pl-8 md:pl-0 md:pt-8'>
          <span
            aria-hidden='true'
            className={`absolute left-0 top-0.5 h-3 w-3 rounded-full md:top-0 ${
              key === "tracking" ? "border-2 border-ls-primary bg-ls-bg" : "bg-ls-primary"
            }`}
          />
          <dt className='ls-h ls-cap'>{app.captions[key].title}</dt>
          <dd className='ls-cap pt-1 text-ls-muted'>{app.captions[key].text}</dd>
        </div>
      ))}
    </dl>
  </section>
  );
};

export default AccueilApplication;
