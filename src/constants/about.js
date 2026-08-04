/**
 * Page À propos : contenu éditable.
 * Route : aligner `entrepriseAProposPath` avec `App.jsx` et le footer Entreprise.
 */

export const entrepriseAProposPath = "/entreprise/a-propos";

export const aboutPageTitle = "À propos";

export const aboutPageTagline =
    "L'agence de livraison qui prend soin de vos colis et de vos clients.";

export const aboutIntroParagraphs = [
    "LivSight est une agence de livraison basée à Yaoundé, fondée par des commerçants et des livreurs qui ont vécu les mêmes problèmes que vous : colis perdus, livreurs injoignables, argent qui ne revient pas. On a construit ce qu'on aurait voulu avoir.",
];

/** Blocs chiffres (sous l’intro). `id: "clients"` est remplacé par clients_count API. */
export const aboutStats = [
    {
        id: "presence",
        value: "2 ans",
        label: "de présence physique à l'Hippodrome",
    },
    {
        id: "clients",
        value: "8+",
        label: "commerçants partenaires",
    },
    {
        id: "payout",
        value: "3h max",
        label: "pour reverser vos fonds après livraison",
    },
];

export const aboutStoryTitle = "Notre histoire";

export const aboutStoryParagraphs = [
    "Tout a commencé par une frustration simple : gérer ses livraisons sur WhatsApp, c'est du chaos. Colis perdus, livreurs qui ne mettent pas à jour, argent mal compté, clients qui appellent à toute heure. On a décidé de construire la solution qu'aucune agence à Yaoundé n'offrait vraiment.",
    "Aujourd'hui, LivSight est installé au cœur de la ville, à l'Hippodrome. Nos livreurs sont recrutés, testés et formés. Nos agents sont disponibles. Et chaque livraison est tracée, de la prise en charge jusqu'au reversement de vos fonds.",
];

export const aboutDifferentiatorsTitle = "Ce qui nous différencie";

/** iconId : shield | clock | archive | chart */
export const aboutDifferentiators = [
    {
        iconId: "shield",
        title: "Livreurs identifiés",
        description:
            "Chaque livreur est recruté, testé et rattaché à l'agence. Pas de prestataire inconnu.",
    },
    {
        iconId: "clock",
        title: "Reversement en 3h",
        description:
            "Vos fonds encaissés à la livraison vous sont reversés en maximum 3 heures.",
    },
    {
        iconId: "archive",
        title: "Stockage gratuit",
        description:
            "Vos colis stockés gratuitement dans nos locaux de l'Hippodrome, Yaoundé.",
    },
    {
        iconId: "chart",
        title: "Suivi en temps réel",
        description:
            "Chaque livraison est tracée sur notre plateforme, statut mis à jour à chaque étape.",
    },
];

export const aboutContactTitle = "Nous contacter";

/** Libellés du bloc contact */
export const aboutContactLabels = {
    address: "Adresse",
    whatsapp: "WhatsApp",
    email: "Email",
    hours: "Horaires",
    company: "Entreprise",
};

export const aboutContactAddress = "Hippodrome, Yaoundé, Cameroun";

export const aboutContactHours = "Lun au Sam · de 8h à 18h";

export const aboutLegalLine = "H-Groupe SARL · Yaoundé, Cameroun";
