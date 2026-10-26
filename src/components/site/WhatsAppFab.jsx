import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { links } from "../../constants/routes";
import { useCopy } from "../../i18n/useCopy";
import WhatsAppIcon from "../WhatsAppIcon";

/**
 * Bouton WhatsApp flottant, mobile uniquement : la promesse « réponse en moins
 * de 10 minutes » reste à portée de pouce tout au long du défilement. Il
 * s'efface dès qu'un WhatsAppButton (data-whatsapp-cta) est visible à l'écran
 * pour ne jamais faire doublon, et réapparaît entre deux. Sur bureau, le CTA
 * de la navigation joue ce rôle. Sous la bannière cookies (z-40 < z-50).
 */
const WhatsAppFab = () => {
  const copy = useCopy("site");
  const { pathname } = useLocation();
  /* Caché au départ : sur chaque page le premier écran porte déjà un CTA */
  const [ctaVisible, setCtaVisible] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver !== "function") {
      setCtaVisible(false);
      return undefined;
    }

    let io = null;
    let observedCount = 0;
    const visible = new Set();

    const observe = () => {
      io?.disconnect();
      visible.clear();
      const targets = document.querySelectorAll("a[data-whatsapp-cta]");
      observedCount = targets.length;
      if (!observedCount) {
        setCtaVisible(false);
        return;
      }
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });
        setCtaVisible(visible.size > 0);
      });
      targets.forEach((target) => io.observe(target));
    };

    observe();
    /* Les pages se chargent en différé (lazy) : re-scanner quand le nombre de
       CTA présents dans le document change */
    const mo = new MutationObserver(() => {
      if (document.querySelectorAll("a[data-whatsapp-cta]").length !== observedCount) observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, [pathname]);

  return (
    <a
      href={links.whatsapp}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={copy.whatsappFab}
      aria-hidden={ctaVisible}
      tabIndex={ctaVisible ? -1 : 0}
      className={`fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ls-primary text-ls-surface shadow-[0_18px_40px_-24px_rgba(14,21,24,.5)] transition-opacity duration-200 hover:bg-ls-cta-hover md:hidden ${
        ctaVisible ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
    >
      <WhatsAppIcon className='h-6 w-6' />
    </a>
  );
};

export default WhatsAppFab;
