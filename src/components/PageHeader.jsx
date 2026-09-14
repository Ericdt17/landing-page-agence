import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

/**
 * En-tête des pages intérieures du nouveau site : surtitre, titre, chapeau,
 * et un lien de retour quand la page a un parent (offre → liste des offres).
 * La navigation principale étant présente partout, plus de « Retour à
 * l'accueil » par défaut. Les pages dont l'en-tête dépend d'un chargement
 * (offres d'emploi) passent leur contenu en `children`.
 */
const PageHeader = ({ kicker, title, subtitle, backTo, backLabel, children }) => (
  <div className='px-[18px] pb-10 pt-10 md:px-16 md:pb-14 md:pt-16'>
    {backTo && (
      <Link
        to={backTo}
        className='ls-cap mb-6 inline-flex items-center gap-1.5 font-semibold text-ls-muted transition-colors hover:text-ls-text'
      >
        <ArrowLeftIcon className='h-4 w-4 shrink-0' aria-hidden='true' />
        {backLabel}
      </Link>
    )}
    <div className='flex max-w-[900px] flex-col gap-5'>
      {kicker && <span className='ls-kicker text-ls-accent'>{kicker}</span>}
      {children ?? (
        <>
          <h1 className='ls-h ls-d2'>{title}</h1>
          {subtitle && <p className='ls-lede ls-measure text-ls-muted'>{subtitle}</p>}
        </>
      )}
    </div>
    <div className='mt-10 h-px bg-ls-rule md:mt-14' />
  </div>
);

export default PageHeader;
