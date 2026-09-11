import { Link } from "react-router-dom";

import SEO from "../components/SEO";
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
    <main className='mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-16 sm:px-6'>
      <p className='font-montserrat text-xs font-bold tracking-[0.14em] text-brand-ink'>
        ERREUR 404
      </p>
      <h1 className='mt-4 font-montserrat text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl'>
        Cette page n&rsquo;existe pas.
      </h1>
      <p className='mt-4 max-w-xl font-montserrat text-base leading-7 text-gray-600'>
        Le lien est peut-être erroné, ou la page a été déplacée. Voici les endroits les plus
        utiles.
      </p>

      <ul className='mt-10 flex flex-col gap-3'>
        {destinations.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className='flex items-center justify-between gap-4 rounded-2xl border border-gray-200 px-5 py-4 transition-colors hover:border-brand-ink'
            >
              <span className='flex flex-col'>
                <span className='font-montserrat text-base font-bold text-gray-900'>
                  {item.label}
                </span>
                <span className='font-montserrat text-sm text-gray-500'>{item.hint}</span>
              </span>
              <span aria-hidden='true' className='font-montserrat text-brand-ink'>
                &rsaquo;
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <p className='mt-10 font-montserrat text-sm text-gray-500'>
        Vous cherchez où en est un colis ?{" "}
        <a
          href={whatsappCtaHref}
          className='font-semibold text-brand-ink underline underline-offset-2'
        >
          Écrivez-nous sur WhatsApp
        </a>
        , nous répondons en moins de 30 minutes pendant les heures d&rsquo;ouverture.
      </p>
    </main>
  </>
);

export default NotFoundPage;
