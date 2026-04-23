import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Remonte la page en haut à chaque navigation (SPA : le scroll n’est pas réinitialisé par défaut).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      if (!id) return;

      // Wait a tick so the target section is in the DOM after route changes.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: "start" });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
