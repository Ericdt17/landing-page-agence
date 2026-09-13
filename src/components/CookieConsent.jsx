import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { cookieChoice, rememberCookieChoice } from "../services/cookieConsent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (cookieChoice() === null) setVisible(true);
  }, []);

  const decide = (choice) => {
    rememberCookieChoice(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role='dialog'
      aria-live='polite'
      aria-label='Cookies'
      className='fixed inset-x-0 bottom-0 z-50 border-t border-ls-rule bg-ls-surface px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] sm:px-6'
    >
      <div className='mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <p className='font-montserrat text-sm leading-6 text-ls-muted'>
          Nous posons des cookies techniques nécessaires au fonctionnement du site. Les cookies
          de mesure d&rsquo;audience, eux, ne sont posés qu&rsquo;avec votre accord.{" "}
          <Link
            to='/legal/cookies'
            className='font-semibold text-ls-accent underline underline-offset-2'
          >
            En savoir plus
          </Link>
        </p>
        <div className='flex shrink-0 gap-3'>
          <button
            type='button'
            onClick={() => decide("refused")}
            className='h-11 rounded-full border border-ls-stroke px-5 font-montserrat text-sm font-semibold text-ls-muted'
          >
            Refuser
          </button>
          <button
            type='button'
            onClick={() => decide("accepted")}
            className='h-11 rounded-full bg-ls-text px-5 font-montserrat text-sm font-bold text-ls-bg'
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
