/**
 * Lecture tolérante d'une offre renvoyée par l'API de recrutement : les noms
 * de champs ont varié selon les versions du back-office.
 */

export const resolveJob = (job, { jobFallback = "", unknownLocation = "" } = {}) => ({
    id: job.id ?? job.uuid ?? job.slug ?? job._id ?? job.job_offer_id,
    title: job.title ?? job.name ?? jobFallback,
    location: job.location ?? job.city ?? job.zone ?? unknownLocation,
    hasLocation: Boolean(job.location ?? job.city ?? job.zone),
    positions: job.open_positions ?? job.positions_count ?? job.headcount ?? job.slots ?? null,
    typeKey: String(job.job_type ?? job.role_type ?? job.type ?? "").toLowerCase(),
});

/** « agent », « livreur » ou « default », pour choisir le libellé traduit. */
export const jobType = (typeKey) => {
    if (typeKey.includes("agent")) return "agent";
    if (typeKey.includes("livreur")) return "livreur";
    return "default";
};

export const jobDescription = (job) => {
    if (!job || typeof job !== "object") return "";
    const raw =
        job.description ?? job.body ?? job.details ?? job.content ?? job.summary ?? job.role_description ?? job.long_description;
    return typeof raw === "string" ? raw.trim() : "";
};
