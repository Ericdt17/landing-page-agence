/**
 * Lecture des tarifs exposés par GET /api/public/landing (LivSightCore,
 * LandingPublicResponse) : villes → zones → quartiers, et frais annexes.
 * Rien n'est inventé ici : sans réponse de l'API, ces fonctions renvoient vide.
 */

const toNumber = (value) => (typeof value === "number" && Number.isFinite(value) ? value : null);

/* Mots français qui restent en minuscules à l'intérieur d'un nom de quartier */
const MOTS_MINUSCULES = new Set([
    "de", "du", "des", "la", "le", "les", "à", "a", "au", "aux", "et", "en",
    "sur", "sous", "chez", "par", "pour", "vers", "un", "une", "face",
]);

/**
 * Les noms de quartiers arrivent de l'API avec des casses disparates
 * (« anguissa », « CARREFOUR REGIS », « Bastos »). On les affiche en
 * capitalisant chaque mot, sans toucher à la donnée source.
 */
export const formatQuartierName = (raw) => {
    if (typeof raw !== "string" || raw.trim() === "") return raw;
    return raw
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .map((word, index) => {
            if (index > 0 && MOTS_MINUSCULES.has(word)) return word;
            // « l'hippodrome » → « l'Hippodrome »
            const apostrophe = word.match(/^([a-z]['’])(.+)$/);
            if (apostrophe) return apostrophe[1] + apostrophe[2].charAt(0).toUpperCase() + apostrophe[2].slice(1);
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
};

/** Montant en francs CFA, séparateurs de milliers selon la langue (« 1 000 » ou « 1,000 »). */
export const formatFcfa = (amount, language = "fr") =>
    `${new Intl.NumberFormat(language === "en" ? "en-GB" : "fr-FR").format(amount)} FCFA`;

/** Villes ayant au moins une zone tarifée, zones triées comme dans le back-office. */
export const cityZones = (landing) =>
    (Array.isArray(landing?.cities) ? landing.cities : [])
        .map((city) => ({
            id: city.id,
            name: city.name,
            zones: (Array.isArray(city.zones) ? city.zones : [])
                .filter((zone) => toNumber(zone.delivery_fee) != null)
                .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
                .map((zone) => ({
                    id: zone.id,
                    fee: zone.delivery_fee,
                    distance: zone.distance_label || null,
                    eta: zone.eta_label || null,
                    neighborhoods: (Array.isArray(zone.neighborhoods) ? zone.neighborhoods : []).map(
                        (neighborhood) => ({
                            id: neighborhood.id,
                            name: neighborhood.name,
                            fee: toNumber(neighborhood.delivery_fee),
                            entryFee: Boolean(neighborhood.requires_entry_fee),
                        }),
                    ),
                })),
        }))
        .filter((city) => city.zones.length > 0);

/** Tarif de livraison le plus bas et le plus haut, zones et quartiers confondus. */
export const deliveryFeeRange = (landing) => {
    const fees = cityZones(landing)
        .flatMap((city) => city.zones.flatMap((zone) => [zone.fee, ...zone.neighborhoods.map((n) => n.fee)]))
        .filter((fee) => fee != null && fee > 0);
    if (fees.length === 0) return null;
    return { min: Math.min(...fees), max: Math.max(...fees) };
};

/**
 * Frais annexes réellement configurés (enlèvement, express, client absent).
 * Renvoie des clés et des valeurs : les libellés viennent des traductions.
 */
export const feeExtras = (landing) => {
    const settings = landing?.fee_settings;
    if (!settings) return [];
    const extras = [];
    if (toNumber(settings.pickup_fee)) extras.push({ id: "pickup", amount: settings.pickup_fee });
    if (toNumber(settings.express_fee)) extras.push({ id: "express", amount: settings.express_fee });
    if (toNumber(settings.client_absent_fee_percent)) {
        extras.push({ id: "clientAbsent", percent: settings.client_absent_fee_percent });
    }
    return extras;
};
