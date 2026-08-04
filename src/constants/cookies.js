/**
 * Politique cookies : contenu éditable.
 * Aligner `legalCookiesPath` avec la route dans `App.jsx`.
 */

export const legalCookiesPath = "/legal/cookies";

export const cookiesPageTitle = "Politique cookies";

export const cookiesPageUpdated = "Dernière mise à jour : avril 2026";

export const cookiesPageIntro =
    "Cette page décrit comment le site LivSight utilise les cookies et comment vous pouvez gérer vos préférences.";

export const cookiesContactIntro =
    "Pour toute question sur cette politique ou vos données, notre équipe est disponible :";

/** Colonnes du tableau Art. 2 (ordre d’affichage) */
export const cookieRecapColumnLabels = {
    type: "Type",
    name: "Nom",
    role: "Rôle",
    duration: "Durée",
    active: "Actif",
};

/** Lignes du récapitulatif cookies (Art. 2) */
export const cookieRecapRows = [
    {
        type: "Technique",
        name: "session_id",
        role: "Maintenir la session de navigation",
        duration: "Fin de session",
        active: "Oui",
    },
    {
        type: "Préférence",
        name: "lang_pref",
        role: "Mémoriser la langue choisie",
        duration: "30 jours",
        active: "Oui",
    },
    {
        type: "Analytics",
        name: "_ga / _gid",
        role: "Statistiques de visite anonymes (Google Analytics)",
        duration: "2 ans / 24h",
        active: "Optionnel",
    },
    {
        type: "Publicitaire",
        name: "Non applicable",
        role: "Ciblage, retargeting, revente de données",
        duration: "Non applicable",
        active: "Non utilisé",
    },
];

/** Art. 5 : raccourcis navigateurs (texte après l’intro) */
export const cookieBrowserHints = [
    {
        browser: "Chrome",
        steps: "Paramètres → Confidentialité et sécurité → Cookies",
    },
    {
        browser: "Firefox",
        steps: "Paramètres → Vie privée et sécurité → Cookies",
    },
    {
        browser: "Safari",
        steps: "Préférences → Confidentialité → Cookies",
    },
    {
        browser: "Edge",
        steps: "Paramètres → Confidentialité, recherche et services → Cookies",
    },
];

export const cookieGroups = [
    {
        groupTitle: "Qu'est-ce qu'un cookie",
        articles: [
            {
                art: 1,
                title: "Définition",
                paragraphs: [
                    "Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous visitez un site web. Il permet au site de mémoriser certaines informations entre deux visites. Les cookies ne contiennent pas de virus et ne peuvent pas accéder à vos fichiers personnels.",
                ],
            },
        ],
    },
    {
        groupTitle: "Cookies utilisés sur ce site",
        articles: [
            {
                art: 2,
                title: "Récapitulatif des cookies",
                paragraphs: [
                    "Le site LivSight utilise uniquement des cookies strictement nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de profilage n'est déposé.",
                ],
                showCookieTable: true,
            },
            {
                art: 3,
                title: "Cookies techniques (obligatoires)",
                paragraphs: [
                    "Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation, la mémorisation de vos préférences de langue et la sécurité de votre session. Ils ne collectent aucune information personnelle identifiable et ne peuvent pas être désactivés sans altérer votre expérience de navigation.",
                ],
            },
            {
                art: 4,
                title: "Cookies analytics (optionnels)",
                paragraphs: [
                    "Si activés, ces cookies permettent de mesurer le trafic du site de façon anonyme et agrégée (pages visitées, durée de visite, source du trafic). Ces données sont utilisées uniquement pour améliorer l'expérience utilisateur du site. Aucune donnée personnelle identifiable n'est transmise à un tiers à des fins commerciales.",
                    "Ces cookies ne sont activés qu'avec votre consentement explicite via la bannière de gestion des cookies à votre première visite.",
                ],
            },
        ],
    },
    {
        groupTitle: "Vos droits & gestion",
        articles: [
            {
                art: 5,
                title: "Gérer vos préférences",
                paragraphs: [
                    "Vous pouvez à tout moment modifier vos préférences de cookies depuis les paramètres de votre navigateur. Voici comment procéder selon votre navigateur :",
                ],
                showBrowserHints: true,
            },
            {
                art: 6,
                title: "Désactivation & conséquences",
                paragraphs: [
                    "La désactivation des cookies techniques peut entraîner un dysfonctionnement partiel du site (perte de session, rechargement des préférences à chaque visite). La désactivation des cookies analytics n'affecte pas votre navigation. LivSight ne peut être tenu responsable des limitations d'expérience liées à la désactivation des cookies par l'utilisateur.",
                ],
            },
            {
                art: 7,
                title: "Mise à jour de cette politique",
                paragraphs: [
                    "Cette politique peut être mise à jour à tout moment pour refléter l'évolution des technologies utilisées ou de la réglementation applicable. La date de dernière mise à jour est indiquée en bas de page. Nous vous encourageons à la consulter régulièrement.",
                ],
            },
        ],
    },
];
