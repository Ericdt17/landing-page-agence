import { createContext, useContext, useEffect, useState } from "react";
import { fetchLandingPublic } from "../services/landingApi";

const LandingPublicContext = createContext(null);

const MAX_ATTEMPTS = 3;
const RETRY_DELAYS_MS = [400, 1000, 2000];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Accepte number ou string numérique ("46") ; sinon null. */
const parseCount = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    if (Number.isFinite(n)) return n;
  }
  return null;
};

export const LandingPublicProvider = ({ children }) => {
  const [landing, setLanding] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setStatus("loading");

      for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
        const result = await fetchLandingPublic();
        if (cancelled) return;

        if (result.success) {
          setLanding(result.data);
          setStatus("ready");
          return;
        }

        if (attempt < MAX_ATTEMPTS - 1) {
          await sleep(RETRY_DELAYS_MS[attempt] ?? 1000);
          if (cancelled) return;
        }
      }

      if (!cancelled) {
        setLanding(null);
        setStatus("error");
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const clientsCount = parseCount(landing?.clients_count);

  const completedDeliveries = parseCount(
    landing?.completed_deliveries ?? landing?.completed_deliveries_count
  );

  return (
    <LandingPublicContext.Provider
      value={{ landing, status, clientsCount, completedDeliveries }}
    >
      {children}
    </LandingPublicContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLandingPublic = () => {
  const ctx = useContext(LandingPublicContext);
  if (!ctx) {
    return {
      landing: null,
      status: "idle",
      clientsCount: null,
      completedDeliveries: null,
    };
  }
  return ctx;
};
