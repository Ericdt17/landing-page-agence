import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Anime un nombre jusqu'à sa valeur, au moment où il entre à l'écran.
 * Toute valeur non numérique (« 24/7 », « 98 % ») est rendue telle quelle.
 * Respecte `prefers-reduced-motion`.
 */
const CountUp = ({ value, format = (n) => String(n), className }) => {
  const target = typeof value === "number" && Number.isFinite(value) ? value : null;
  const [shown, setShown] = useState(target ?? 0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (target === null) return undefined;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(target);
      return undefined;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver !== "function") {
      setShown(target);
      return undefined;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || done.current) return;
        done.current = true;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / DURATION_MS);
          setShown(Math.round(target * easeOut(progress)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  if (target === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {format(shown)}
    </span>
  );
};

export default CountUp;
