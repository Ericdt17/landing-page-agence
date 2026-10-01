/**
 * API publique de signature de contrat marchand (lien à usage unique).
 * - En local : laisser VITE_API_BASE_URL vide → fetch same-origin `/api/...`
 *   (proxy Vite → gateway :4040, évite CORS).
 * - En prod : la gateway doit laisser passer /api/public/** sans JWT.
 * États portés par le statut HTTP : 404 lien inconnu, 410 lien expiré.
 */

const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

const base = (token) =>
  `${API_BASE}/api/public/contract-signing/${encodeURIComponent(token)}`;

/** URL du PDF (inline) — version scellée une fois le contrat signé. */
export const contractDocumentUrl = (token) => `${base(token)}/document`;

/**
 * @returns {Promise<{ success: true, data: object } | { success: false, error: "invalid" | "expired" | "http" | "network", status?: number }>}
 */
export const fetchSigningSummary = async (token) => {
  try {
    const res = await fetch(base(token), { credentials: "omit" });
    if (res.status === 404) return { success: false, error: "invalid" };
    if (res.status === 410) return { success: false, error: "expired" };
    if (!res.ok) return { success: false, error: "http", status: res.status };
    const data = await res.json().catch(() => null);
    if (!data || typeof data !== "object")
      return { success: false, error: "http" };
    return { success: true, data };
  } catch {
    return { success: false, error: "network" };
  }
};

const post = async (token, path, body) => {
  try {
    const res = await fetch(`${base(token)}${path}`, {
      method: "POST",
      credentials: "omit",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 404) return { success: false, error: "invalid" };
    if (res.status === 410) return { success: false, error: "expired" };
    if (!res.ok) return { success: false, error: "http", status: res.status };
    const data = await res.json().catch(() => null);
    if (!data || typeof data !== "object")
      return { success: false, error: "http" };
    return { success: true, data };
  } catch {
    return { success: false, error: "network" };
  }
};

/** Mention « Lu et approuvé » obligatoire côté backend. */
export const signContract = (token) => post(token, "/sign", { consent: true });

export const declineContract = (token, reason) =>
  post(token, "/decline", { reason });
