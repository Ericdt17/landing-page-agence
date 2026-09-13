import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

/**
 * Bandeau d'en-tête des pages intérieures : lien de retour, titre, sous-titre.
 * Il était recopié à l'identique dans onze pages. Les pages dont l'en-tête
 * dépend d'un chargement (offres d'emploi) passent leur contenu en `children`.
 */
const PageHeader = ({
  title,
  subtitle,
  backTo = "/",
  backLabel = "Retour à l'accueil",
  children,
}) => (
  <div className='bg-brand-ink'>
    <div className='max-container padding-x py-12 sm:py-16'>
      <Link
        to={backTo}
        className='inline-flex items-center gap-1.5 font-montserrat text-sm font-semibold text-white/70 transition-colors hover:text-white'
      >
        <ArrowLeftIcon className='h-4 w-4 shrink-0' aria-hidden='true' />
        {backLabel}
      </Link>
      {children ?? (
        <>
          <h1 className='mt-4 font-montserrat text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
            {title}
          </h1>
          {subtitle && (
            <p className='mt-2 font-montserrat text-sm text-white/60'>
              {subtitle}
            </p>
          )}
        </>
      )}
    </div>
  </div>
);

export default PageHeader;
