/**
 * Page Portail agent : contenu éditable.
 * Route : aligner `plateformePortailAgentPath` avec `App.jsx` et le footer Plateforme.
 */

export const plateformePortailAgentPath = "/plateforme/portail-agent";

export const portailAgentPageTitle = "Portail agent";

export const portailAgentPageTagline =
    "Votre agent suit chaque livraison en direct depuis son application.";

export const portailAgentIntroParagraphs = [
    "Quand vous créez une commande, elle arrive instantanément sur l'application de votre agent dédié. Il prend en charge, assigne le meilleur livreur disponible et gère tout : vous n'avez plus qu'à attendre la notification de livraison.",
];

export const portailAgentStats = [
    {
        value: "1 agent",
        label: "dédié à votre compte",
    },
    {
        value: "< 5 sec",
        label: "pour recevoir votre commande",
    },
    {
        value: "24/7",
        label: "suivi des incidents actifs",
    },
];

export const portailAgentForYouTitle = "Ce que fait votre agent pour vous";

/** iconId : users | map | shield | chat | cube | clipboard */
export const portailAgentForYouItems = [
    {
        iconId: "users",
        title: "Assignation intelligente du livreur",
        description:
            "Votre agent choisit le livreur le plus proche, le mieux noté et le moins chargé : pour que votre colis parte le plus vite possible.",
    },
    {
        iconId: "map",
        title: "Suivi GPS des livreurs en direct",
        description:
            "Votre agent voit la position de chaque livreur en temps réel sur une carte. Il sait exactement où est votre colis à tout moment.",
    },
    {
        iconId: "shield",
        title: "Gestion des incidents",
        description:
            "Client absent, livreur en retard, colis bloqué : votre agent détecte les problèmes en temps réel et les résout sans que vous ayez à intervenir.",
    },
    {
        iconId: "chat",
        title: "Chat dédié avec vous",
        description:
            "Votre agent vous répond directement depuis son application. Vos échanges sont liés à chaque commande, rien ne se perd.",
    },
    {
        iconId: "cube",
        title: "Gestion de votre stock",
        description:
            "Votre agent peut consulter et corriger votre stock directement depuis son application. Il vous alerte si un produit est en rupture.",
    },
    {
        iconId: "clipboard",
        title: "Confirmation manuelle si besoin",
        description:
            "Si une livraison nécessite une validation de sa part, votre agent peut confirmer manuellement avec horodatage. Tout est tracé.",
    },
];

export const portailAgentNeverTitle = "Ce que vous ne verrez jamais plus";

export const portailAgentNeverItems = [
    {
        title: "Plus d'appels pour savoir où est votre colis",
        description:
            "Chaque statut est mis à jour automatiquement et vous est notifié en temps réel sur votre application.",
    },
    {
        title: "Plus de gestion sur WhatsApp",
        description:
            "Tout passe par la plateforme. Vos commandes, vos échanges et vos paiements sont centralisés et traçables.",
    },
    {
        title: "Plus d'incertitude sur vos reversements",
        description:
            "Chaque encaissement est enregistré. Votre agent ne peut pas reverser un montant différent de ce qui a été collecté.",
    },
    {
        title: "Plus de livreurs fantômes",
        description:
            "Chaque livreur est identifié, tracé et rattaché à un compte nominatif. Votre agent sait où il est à tout moment.",
    },
];

export const portailAgentClosingParagraphs = [
    "Le portail agent est réservé à l'équipe LivSight. En tant que commerçant partenaire, vous interagissez avec votre agent directement depuis votre application client. Vous n'avez pas besoin d'accéder au portail agent : tout ce dont vous avez besoin est déjà dans votre app.",
];
