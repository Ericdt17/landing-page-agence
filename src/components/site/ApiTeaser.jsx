import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { apiLivraisonPath, apiLivraisonTeaser } from "../../constants/apiLivraison";

/** Encart « API de livraison, bientôt » qui renvoie vers la page dédiée. */
const ApiTeaser = () => (
  <div className='flex flex-col gap-4 rounded-[26px] border border-ls-rule p-7 md:p-9'>
    <span className='ls-kicker text-ls-speed'>{apiLivraisonTeaser.kicker}</span>
    <h2 className='ls-h ls-d3'>{apiLivraisonTeaser.title}</h2>
    <p className='ls-body text-ls-muted'>{apiLivraisonTeaser.body}</p>
    <Link to={apiLivraisonPath} className='ls-link mt-auto inline-flex w-fit items-center gap-1.5 text-sm'>
      {apiLivraisonTeaser.link}
      <ArrowRightIcon className='h-4 w-4' aria-hidden='true' />
    </Link>
  </div>
);

export default ApiTeaser;
