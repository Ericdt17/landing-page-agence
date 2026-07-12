/**
 * API recrutement — base URL : import.meta.env.VITE_API_URL (Vite), repli local.
 * Routes publiques : credentials: "omit" (pas de cookie).
 *
 * POST /apply : FormData attendu (clés typiques, à aligner avec le backend) :
 * - job_offer_id (string)
 * - full_name, phone, email, quartier (string)
 * - education_level (bac | licence | master | doctorat)
 * - field_of_study, school_name (string)
 * - languages (comma-separated: francais, anglais — au moins une)
 * - currently_employed, in_other_company (oui | non)
 * - transport, availability (string)
 * - photo (File), cv (File, PDF), cover_letter (File, PDF) — max 10 Mo
 * - answers : chaîne JSON `"[]"` ou `[{ question_id, answer_text }, ...]`
 *
 * Listes / détail : réponses du type `{ success: true, data: ... }` sont normalisées.
 *
 * Ne pas définir Content-Type sur le fetch multipart — le navigateur envoie le boundary.
 */

const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost:3000";

const normalizeJobsPayload = (json) => {
    if (!json || typeof json !== "object") return [];
    if (Array.isArray(json)) return json;
    if (json.success === true && Array.isArray(json.data)) return json.data;
    if (Array.isArray(json.data)) return json.data;
    if (Array.isArray(json.jobs)) return json.jobs;
    if (
        json.data &&
        typeof json.data === "object" &&
        Array.isArray(json.data.jobs)
    )
        return json.data.jobs;
    return [];
};

const normalizeQuestionsPayload = (json) => {
    if (!json || typeof json !== "object") return [];
    if (Array.isArray(json)) return json;
    if (json.success === true && Array.isArray(json.data)) return json.data;
    if (Array.isArray(json.data)) return json.data;
    if (Array.isArray(json.questions)) return json.questions;
    return [];
};

const pickJobLike = (node) => {
    if (!node || typeof node !== "object" || Array.isArray(node)) return null;
    if (
        node.id != null ||
        node.uuid != null ||
        node.slug != null ||
        node._id != null ||
        node.job_offer_id != null
    )
        return node;
    return null;
};

/** Accepte `{ success, data }`, `{ data }`, `{ job }`, `{ data: { job } }`, etc. */
const normalizeJobDetail = (json) => {
    if (!json || typeof json !== "object") return null;
    const tryNode = (node) => pickJobLike(node);
    if (json.success === true) {
        const hit = tryNode(json.data);
        if (hit) return hit;
    }
    const direct = tryNode(json);
    if (direct) return direct;
    const topKeys = [json.data, json.job, json.offer, json.payload, json.result];
    for (const c of topKeys) {
        const hit = tryNode(c);
        if (hit) return hit;
    }
    const data = json.data;
    if (data != null && typeof data === "object" && !Array.isArray(data)) {
        for (const k of ["job", "offer", "position", "item", "record"]) {
            const hit = tryNode(data[k]);
            if (hit) return hit;
        }
    }
    return null;
};

const findJobInOpenList = async (jobId) => {
    const want = String(jobId);
    const listResult = await getOpenJobs();
    if (!listResult.success || !Array.isArray(listResult.data)) return null;
    return (
        listResult.data.find(
            (j) =>
                String(
                    j?.id ??
                        j?.uuid ??
                        j?.slug ??
                        j?._id ??
                        j?.job_offer_id ??
                        "",
                ) === want,
        ) ?? null
    );
};

export async function getOpenJobs() {
    try {
        const res = await fetch(`${API_BASE}/api/v1/recruitment/jobs`, {
            method: "GET",
            credentials: "omit",
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
            return { success: false, data: [], error: "http", status: res.status };
        }
        return { success: true, data: normalizeJobsPayload(json) };
    } catch {
        return { success: false, data: [], error: "network" };
    }
}

/**
 * Détail d’une offre (texte long, métadonnées).
 * GET /api/v1/recruitment/jobs/:id
 */
export async function getJobDetail(jobId) {
    try {
        const res = await fetch(
            `${API_BASE}/api/v1/recruitment/jobs/${encodeURIComponent(jobId)}`,
            { method: "GET", credentials: "omit" },
        );
        const json = await res.json().catch(() => ({}));
        if (res.ok) {
            let data = normalizeJobDetail(json);
            if (!data) data = await findJobInOpenList(jobId);
            return { success: true, data };
        }
        if (res.status === 404) {
            const fromList = await findJobInOpenList(jobId);
            if (fromList) return { success: true, data: fromList };
            return {
                success: false,
                data: null,
                error: "http",
                status: 404,
            };
        }
        return {
            success: false,
            data: null,
            error: "http",
            status: res.status,
        };
    } catch {
        return { success: false, data: null, error: "network" };
    }
}

export async function getJobQuestions(jobId) {
    try {
        const res = await fetch(
            `${API_BASE}/api/v1/recruitment/jobs/${encodeURIComponent(jobId)}/questions`,
            { method: "GET", credentials: "omit" },
        );
        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
            return { success: false, data: [], error: "http", status: res.status };
        }
        const list = normalizeQuestionsPayload(json);
        list.sort(
            (a, b) =>
                (a.order_index ?? a.order ?? 0) - (b.order_index ?? b.order ?? 0),
        );
        return { success: true, data: list };
    } catch {
        return { success: false, data: [], error: "network" };
    }
}

/** Extrait un message lisible depuis les réponses 4xx (NestJS, Zod, invalidFields, etc.) */
const extractApplyErrorMessage = (body) => {
    if (!body || typeof body !== "object") return undefined;
    if (Array.isArray(body.invalidFields) && body.invalidFields.length) {
        return body.invalidFields
            .map((x) =>
                typeof x === "string" ? x : x?.field || JSON.stringify(x),
            )
            .join(" ; ");
    }
    if (body.invalidFields && typeof body.invalidFields === "object") {
        return Object.entries(body.invalidFields)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join(" ; ");
    }
    if (body.details) {
        const d = body.details;
        if (typeof d === "string") return d;
        if (Array.isArray(d))
            return d
                .map((x) =>
                    typeof x === "string" ? x : JSON.stringify(x),
                )
                .join(" ");
        if (typeof d === "object")
            return JSON.stringify(d);
    }
    if (typeof body.detail === "string") return body.detail;
    if (Array.isArray(body.detail)) {
        return body.detail
            .map((d) => (typeof d === "string" ? d : d?.msg || JSON.stringify(d)))
            .join(" ");
    }
    if (typeof body.message === "string") return body.message;
    if (Array.isArray(body.message)) return body.message.join(" ");
    if (typeof body.error === "string" && body.error !== "Bad Request")
        return body.error;
    if (Array.isArray(body.errors)) {
        const parts = body.errors.map((e) =>
            typeof e === "string"
                ? e
                : e?.msg || e?.message || e?.constraint || JSON.stringify(e),
        );
        return parts.filter(Boolean).join(" ");
    }
    if (body.errors && typeof body.errors === "object") {
        return Object.entries(body.errors)
            .map(([k, v]) => {
                const val = Array.isArray(v) ? v.join(", ") : String(v);
                return `${k}: ${val}`;
            })
            .join(" ");
    }
    return undefined;
};

/**
 * @param {FormData} formData — corps multipart déjà rempli côté UI
 * @returns {Promise<{ success: boolean, data?: object, error?: string, status?: number, message?: string }>}
 */
export async function submitApplication(formData) {
    try {
        const res = await fetch(`${API_BASE}/api/v1/recruitment/apply`, {
            method: "POST",
            body: formData,
            credentials: "omit",
        });
        const body = await res.json().catch(() => ({}));
        if (res.ok) {
            return { success: true, data: body };
        }
        const message = extractApplyErrorMessage(body);
        return {
            success: false,
            status: res.status,
            message,
            data: body,
        };
    } catch {
        return { success: false, error: "network" };
    }
}
