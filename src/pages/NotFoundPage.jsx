import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { whatsappCtaHref } from "../constants";

const destinations = [
  { to: "/", label: "Retour à l'accueil", hint: "Le service, les tarifs, comment démarrer" },
  {
    to: "/plateforme/solution-client",
    label: "La solution commerçant",
    hint: "Stockage, livraison et reversement",
  },
  {
    to: "/entreprise/contact",
    label: "Nous écrire",
    hint: "Une question précise, une réclamation",
  },
];

const NotFoundPage = () => (
  <>
    <SEO
      title="Page introuvable"
      description="Cette page n'existe pas ou a été déplacée."
      canonical="/404"
      noindex
    />
    <SiteLayout>
    <div className='flex min-h-[60vh] max-w-3xl flex-col justify-center px-[18px] py-16 md:px-16'>
      <p className='font-montserrat text-xs font-bold tracking-[0.14em] text-ls-accent'>
        ERREUR 404
      </p>
      <h1 className='mt-4 font-montserrat text-3xl font-extrabold leading-tight text-ls-text sm:text-4xl'>
        Cette page n&rsquo;existe pas.
      </h1>
      <p className='mt-4 max-w-xl font-montserrat text-base leading-7 text-ls-muted'>
        Le lien est peut-être erroné, ou la page a été déplacée. Voici les endroits les plus
        utiles.
      </p>

      <ul className='mt-10 flex flex-col gap-3'>
        {destinations.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className='flex items-center justify-between gap-4 rounded-2xl border border-ls-rule px-5 py-4 transition-colors hover:border-ls-text'
            >
              <span className='flex flex-col'>
                <span className='font-montserrat text-base font-bold text-ls-text'>
                  {item.label}
                </span>
                <span className='font-montserrat text-sm text-ls-faint'>{item.hint}</span>
              </span>
              <ChevronRightIcon className='h-5 w-5 shrink-0 text-ls-accent' aria-hidden='true' />
            </Link>
          </li>
        ))}
      </ul>

      <p className='mt-10 font-montserrat text-sm text-ls-faint'>
        Vous cherchez où en est un colis ?{" "}
        <a
          href={whatsappCtaHref}
          className='font-semibold text-ls-accent underline underline-offset-2'
        >
          Écrivez-nous sur WhatsApp
        </a>
        , nous répondons en moins de 30 minutes pendant les heures d&rsquo;ouverture.
      </p>
    </div>
    </SiteLayout>
  </>
);

export default NotFoundPage;
