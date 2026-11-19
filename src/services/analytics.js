import { analyticsAllowed } from "./cookieConsent";

/*
 * Mesure d'audience PostHog (LIV-21).
 *
 * - Inactive sans VITE_POSTHOG_KEY : le build local et les aperçus n'envoient rien.
 * - Inactive sans accord du visiteur (cookieConsent.analyticsAllowed) : aucune
 *   requête, et le SDK n'est même pas téléchargé (import dynamique).
 * - Un refus ultérieur coupe la collecte et efface l'identifiant.
 * - Chaque événement porte `app: "landing-page"` et `environment`, pour séparer
 *   staging et production et reconnaître l'origine des données.
 */

const KEY = (import.meta.env.VITE_POSTHOG_KEY || "").trim();
const HOST = (
  import.meta.env.VITE_POSTHOG_HOST || "https://eu.i.posthog.com"
).trim();
const ENVIRONMENT = (import.meta.env.VITE_APP_ENV || "staging").trim();

export const analyticsConfigured = () => KEY !== "";

let client = null;
let loading = null;

const load = () => {
  if (client) return Promise.resolve(client);
  if (!loading) {
    loading = import("posthog-js")
      .then(({ default: posthog }) => {
        posthog.init(KEY, {
          api_host: HOST,
          autocapture: false,
          capture_pageview: false,
          capture_pageleave: false,
          disable_session_recording: true,
          persistence: "localStorage",
          person_profiles: "identified_only",
        });
        posthog.register({ app: "landing-page", environment: ENVIRONMENT });
        client = posthog;
        return client;
      })
      .catch(() => {
        loading = null;
        return null;
      });
  }
  return loading;
};

/** Enregistre un événement, seulement si la config et l'accord le permettent. */
export const track = (event, properties = {}) => {
  if (!analyticsConfigured() || !analyticsAllowed()) return;
  load().then((posthog) => posthog?.capture(event, properties));
};

export const trackPageview = (path) =>
  track("$pageview", {
    $current_url: window.location.href,
    path,
  });

/** À appeler quand le visiteur change son choix de cookies. */
export const syncConsent = (choice) => {
  if (!analyticsConfigured()) return;
  if (choice === "accepted") {
    load().then((posthog) => posthog?.opt_in_capturing());
  } else if (client) {
    client.opt_out_capturing();
    client.reset();
  }
};

const STORE_HOSTS = ["play.google.com", "apps.apple.com"];

/** Classe un lien sortant en événement de conversion, ou null. */
export const conversionEventFor = (href, whatsappLink) => {
  if (!href) return null;
  if (whatsappLink && href.startsWith(whatsappLink)) return "whatsapp_click";
  try {
    const url = new URL(href, window.location.href);
    if (url.hostname === "wa.me") return "whatsapp_click";
    if (
      STORE_HOSTS.includes(url.hostname) ||
      url.pathname.toLowerCase().endsWith(".apk")
    ) {
      return "app_download_click";
    }
  } catch {
    /* lien non analysable : pas de suivi */
  }
  return null;
};
