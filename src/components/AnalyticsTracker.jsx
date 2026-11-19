import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { links } from "../constants/routes";
import { conversionEventFor, track, trackPageview } from "../services/analytics";

/**
 * Vues de pages (changements de route) et clics de conversion (WhatsApp,
 * téléchargement de l'application). Un seul écouteur délégué couvre tous les
 * liens du site, présents et futurs. Sans accord, `track` ne fait rien.
 */
export default function AnalyticsTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link) return;
      const name = conversionEventFor(link.getAttribute("href"), links.whatsapp);
      if (name) track(name, { path: window.location.pathname, href: link.href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
