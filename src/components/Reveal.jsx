import { useEffect, useRef, useState } from "react";

/**
 * Révèle son contenu en fondu quand il entre à l'écran, une seule fois.
 * Sans IntersectionObserver ou avec `prefers-reduced-motion`, tout est
 * affiché immédiatement : jamais de contenu caché.
 */
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !node || typeof IntersectionObserver !== "function") {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setShown(true);
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={shown ? "ls-reveal is-shown" : "ls-reveal"}>
      {children}
    </div>
  );
};

export default Reveal;
