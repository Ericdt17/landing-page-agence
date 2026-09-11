/**
 * Configuration lue à l'exécution, pour pouvoir ouvrir le site sans redéployer.
 *
 * L'URL est configurable (VITE_SITE_CONFIG_URL). Par défaut on lit le fichier
 * livré avec le site ; en pointant vers la passerelle, le drapeau devient
 * modifiable depuis le back-office sans toucher au front.
 *
 * Règle de sûreté : en cas d'échec, on ne déverrouille jamais.
 */
export const readEnv = (key) => {
  const raw = import.meta.env?.[key];
  return typeof raw === "string" ? raw.trim() : "";
};

/** Le portail est actif dès qu'un code est configuré, sauf désactivation explicite. */
export const gateIsActive = () => {
  const flag = readEnv("VITE_SITE_GATE").toLowerCase();
  if (flag === "off" || flag === "false" || flag === "0") return false;
  return readEnv("VITE_SITE_GATE_CODE").length > 0;
};

const DEFAULT_URL = "/site-config.json";
const TIMEOUT_MS = 2500;

export const siteConfigUrl = () => {
  const raw = import.meta.env?.VITE_SITE_CONFIG_URL;
  const trimmed = typeof raw === "string" ? raw.trim() : "";
  return trimmed.length > 0 ? trimmed : DEFAULT_URL;
};

/** @returns {Promise<{gate?: string, code?: string} | null>} null = indisponible */
export const fetchSiteConfig = async () => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(`${siteConfigUrl()}?t=${Date.now()}`, {
      cache: "no-store",
      signal: controller.signal,
    });
    if (!response.ok) return null;
    const payload = await response.json();
    return payload && typeof payload === "object" ? payload : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
};
