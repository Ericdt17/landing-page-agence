/**
 * Lecture des tarifs exposés par GET /api/public/landing (LivSightCore,
 * LandingPublicResponse) : villes → zones → quartiers, et frais annexes.
 * Rien n'est inventé ici : sans réponse de l'API, ces fonctions renvoient vide.
 */

const toNumber = (value) => (typeof value === "number" && Number.isFinite(value) ? value : null);

export const formatFcfa = (amount) => `${new Intl.NumberFormat("fr-FR").format(amount)} FCFA`;

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

/** Frais annexes réellement configurés (enlèvement, express, client absent). */
export const feeExtras = (landing) => {
    const settings = landing?.fee_settings;
    if (!settings) return [];
    const extras = [];
    if (toNumber(settings.pickup_fee)) {
        extras.push({ label: "Enlèvement chez vous", value: formatFcfa(settings.pickup_fee) });
    }
    if (toNumber(settings.express_fee)) {
        extras.push({ label: "Livraison express", value: `+ ${formatFcfa(settings.express_fee)}` });
    }
    if (toNumber(settings.client_absent_fee_percent)) {
        extras.push({
            label: "Client absent",
            value: `${settings.client_absent_fee_percent} % des frais de la course`,
        });
    }
    return extras;
};
