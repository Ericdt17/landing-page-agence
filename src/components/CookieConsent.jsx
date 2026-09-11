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
      className='fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] sm:px-6'
    >
      <div className='mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <p className='font-montserrat text-sm leading-6 text-gray-600'>
          Nous posons des cookies techniques nécessaires au fonctionnement du site. Les cookies
          de mesure d&rsquo;audience, eux, ne sont posés qu&rsquo;avec votre accord.{" "}
          <Link
            to='/legal/cookies'
            className='font-semibold text-brand-ink underline underline-offset-2'
          >
            En savoir plus
          </Link>
        </p>
        <div className='flex shrink-0 gap-3'>
          <button
            type='button'
            onClick={() => decide("refused")}
            className='h-11 rounded-full border border-gray-300 px-5 font-montserrat text-sm font-semibold text-gray-700'
          >
            Refuser
          </button>
          <button
            type='button'
            onClick={() => decide("accepted")}
            className='h-11 rounded-full bg-brand-ink px-5 font-montserrat text-sm font-bold text-white'
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
