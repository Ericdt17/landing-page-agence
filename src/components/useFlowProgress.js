import { useEffect } from "react";

/**
 * Anime une frise « itinéraire » (classes ls-flow-*) selon la position de
 * lecture, sans re-rendu React : la cible (0 à 1) est mesurée au défilement,
 * puis une interpolation douce en requestAnimationFrame rapproche la valeur
 * courante de la cible et écrit directement les transforms. Les étapes se
 * verrouillent une fois allumées (pas de clignotement autour du seuil quand
 * le viewport tremble à l'arrêt). Avec prefers-reduced-motion ou sans
 * IntersectionObserver moderne, tout est rendu dans l'état final.
 */
const useFlowProgress = (listRef, stepThreshold = 0.35) => {
  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const lines = list.querySelectorAll(".ls-flow-line-y, .ls-flow-line-x");
    const steps = list.querySelectorAll(".ls-flow-step");

    const finalize = () => {
      lines.forEach((line) => {
        line.style.transform = "none";
      });
      steps.forEach((step) => step.classList.add("is-on"));
    };

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finalize();
      return undefined;
    }

    let target = 0;
    let current = 0;
    let raf = 0;

    const measure = () => {
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.85;
      const end = vh * 0.4;
      const total = rect.height + (start - end);
      target = Math.min(1, Math.max(0, total > 0 ? (start - rect.top) / total : 1));
    };

    const apply = () => {
      lines.forEach((line) => {
        line.style.transform = line.classList.contains("ls-flow-line-x")
          ? `scaleX(${current})`
          : `scaleY(${current})`;
      });
      steps.forEach((step, index) => {
        if (current * steps.length >= index + stepThreshold) step.classList.add("is-on");
      });
    };

    const tick = () => {
      const delta = target - current;
      if (Math.abs(delta) < 0.001) {
        current = target;
        apply();
        raf = 0;
        return;
      }
      current += delta * 0.16;
      apply();
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      measure();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    kick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [listRef, stepThreshold]);
};

export default useFlowProgress;
