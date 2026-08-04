/**
 * API landing publique.
 * - En local : laisser VITE_API_BASE_URL vide → fetch same-origin `/api/...`
 *   (proxy Vite → gateway :4040, évite CORS).
 * - En prod : VITE_API_BASE_URL=https://votre-gateway
 * GET /api/public/landing : pas de JWT, credentials: "omit".
 */

const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

/**
 * @returns {Promise<{ success: true, data: object } | { success: false, error?: string, status?: number }>}
 */
export const fetchLandingPublic = async () => {
  try {
    const res = await fetch(`${API_BASE}/api/public/landing`, {
      method: "GET",
      credentials: "omit",
    });

    if (!res.ok) {
      return { success: false, error: "http", status: res.status };
    }

    const data = await res.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return { success: false, error: "invalid_json" };
    }

    return { success: true, data };
  } catch {
    return { success: false, error: "network" };
  }
};

export const getLandingLogoUrl = (landing) => {
  if (!landing?.has_logo || !landing?.logo_url) return null;
  if (landing.logo_url.startsWith("http")) return landing.logo_url;
  return `${API_BASE}${landing.logo_url}`;
};
