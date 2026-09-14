import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import SiteLayout from "../components/site/SiteLayout";
import { links, routes } from "../constants/routes";
import { useCopy } from "../i18n/useCopy";

const destinations = [
  { id: "home", to: routes.home },
  { id: "livraison", to: routes.livraison },
  { id: "contact", to: routes.contact },
];

const NotFoundPage = () => {
  const { notFound } = useCopy("site");

  return (
    <>
      <SEO title={notFound.seoTitle} description={notFound.seoDescription} canonical='/404' noindex />
      <SiteLayout>
        <div className='flex min-h-[60vh] max-w-3xl flex-col justify-center px-[18px] py-16 md:px-16'>
          <p className='ls-kicker text-ls-accent'>{notFound.eyebrow}</p>
          <h1 className='ls-h ls-d2 mt-4'>{notFound.title}</h1>
          <p className='ls-lede mt-4 max-w-xl text-ls-muted'>{notFound.body}</p>

          <ul className='mt-10 flex flex-col gap-3'>
            {destinations.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  className='flex items-center justify-between gap-4 rounded-2xl border border-ls-rule px-5 py-4 transition-colors hover:border-ls-text'
                >
                  <span className='flex flex-col'>
                    <span className='text-base font-bold text-ls-text'>{notFound.destinations[item.id].label}</span>
                    <span className='text-sm text-ls-faint'>{notFound.destinations[item.id].hint}</span>
                  </span>
                  <ChevronRightIcon className='h-5 w-5 shrink-0 text-ls-accent' aria-hidden='true' />
                </Link>
              </li>
            ))}
          </ul>

          <p className='mt-10 text-sm text-ls-faint'>
            {notFound.trackingLead}{" "}
            <a href={links.whatsapp} className='font-semibold text-ls-accent underline underline-offset-2'>
              {notFound.trackingLink}
            </a>
            {notFound.trackingTail}
          </p>
        </div>
      </SiteLayout>
    </>
  );
};

export default NotFoundPage;
