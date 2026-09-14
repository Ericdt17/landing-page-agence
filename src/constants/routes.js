/**
 * Adresses du site et liens externes : la seule source pour les chemins.
 * Les textes (libellés de liens compris) vivent dans src/locales/{fr,en}/.
 */

export const routes = {
    home: "/",
    application: "/espace-commercant",
    livraison: "/livraison-stockage",
    tarifs: "/tarifs",
    technologie: "/technologie",
    marketplace: "/marketplace",
    apiLivraison: "/api-livraison",
    recrutement: "/entreprise/recrutement",
    apropos: "/entreprise/a-propos",
    contact: "/entreprise/contact",
    courses: "/plateforme/courses-particuliers",
    confidentialite: "/legal/confidentialite",
    conditions: "/legal/conditions",
    cookies: "/legal/cookies",
    securite: "/legal/securite",
    blog: "/blog",
    baseConnaissances: "/base-de-connaissances",
    suivi: "/suivi",
};

export const recruitmentOfferPath = (jobId) =>
    `${routes.recrutement}/offre/${encodeURIComponent(String(jobId))}`;

export const recruitmentApplyPath = (jobId) => `${recruitmentOfferPath(jobId)}/postuler`;

/** Anciennes adresses du site, redirigées (aussi déclarées dans vercel.json). */
export const legacyRedirects = {
    "/plateforme/solution-client": routes.livraison,
    "/plateforme/portail-agent": routes.application,
    "/application": routes.application,
    "/plateforme/portail-livreur": routes.livraison,
    "/plateforme/integrations-api": routes.apiLivraison,
};

export const links = {
    whatsapp: "https://wa.link/zc5ijs",
    email: "contact@livsight.com",
    facebook: "https://www.facebook.com/share/1J4aQ42T2t/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/livsight7?igsh=eHkyMjQyZWVkeGc4&utm_source=qr",
};

/**
 * Navigation principale. `enabled: false` = page prévue mais pas construite :
 * le lien reste décrit ici et s'active avec sa page.
 */
export const navItems = [
    { id: "application", to: routes.application, enabled: true },
    { id: "livraison", to: routes.livraison, enabled: true },
    { id: "tarifs", to: routes.tarifs, enabled: true },
    { id: "blog", to: routes.blog, enabled: false },
    { id: "marketplace", to: routes.marketplace, soon: true, enabled: true },
    /* Pages de l'entreprise regroupées dans un menu déroulant */
    {
        id: "entreprise",
        enabled: true,
        children: [
            { id: "technologie", to: routes.technologie, enabled: true },
            { id: "recrutement", to: routes.recrutement, enabled: true },
            { id: "apropos", to: routes.apropos, enabled: true },
            { id: "contact", to: routes.contact, enabled: true },
        ],
    },
];

export const footerColumns = [
    {
        id: "service",
        links: [
            { id: "livraison", to: routes.livraison, enabled: true },
            { id: "tarifs", to: routes.tarifs, enabled: true },
            { id: "courses", to: routes.courses, enabled: true },
            { id: "suivi", to: routes.suivi, enabled: false },
        ],
    },
    {
        id: "commercants",
        links: [
            { id: "application", to: routes.application, enabled: true },
            { id: "commencer", href: links.whatsapp, enabled: true },
            { id: "baseConnaissances", to: routes.baseConnaissances, enabled: false },
            { id: "apiLivraison", to: routes.apiLivraison, soon: true, enabled: true },
            { id: "marketplace", to: routes.marketplace, soon: true, enabled: true },
        ],
    },
    {
        id: "entreprise",
        links: [
            { id: "technologie", to: routes.technologie, enabled: true },
            { id: "blog", to: routes.blog, enabled: false },
            { id: "recrutement", to: routes.recrutement, enabled: true },
            { id: "apropos", to: routes.apropos, enabled: true },
        ],
    },
    {
        id: "aide",
        links: [
            { id: "contact", to: routes.contact, enabled: true },
            { id: "conditions", to: routes.conditions, enabled: true },
            { id: "confidentialite", to: routes.confidentialite, enabled: true },
            { id: "cookies", to: routes.cookies, enabled: true },
        ],
    },
];
