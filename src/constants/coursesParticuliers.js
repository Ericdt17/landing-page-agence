/**
 * Page Courses particuliers : contenu éditable.
 * Route : aligner `plateformeCoursesParticuliersPath` avec `App.jsx` et le footer Plateforme.
 */

export const plateformeCoursesParticuliersPath = "/plateforme/courses-particuliers";

/** CTA WhatsApp : `VITE_WHATSAPP_WA_ME` (ex. https://wa.me/2376XXXXXXXX) ou repli sur le lien marketing existant */
export const coursesParticuliersWhatsAppHref =
    import.meta.env.VITE_WHATSAPP_WA_ME || "https://wa.link/zc5ijs";

export const coursesParticuliersPageTitle = "Courses particuliers";

export const coursesParticuliersPageTagline =
    "Vous ne voulez pas vous déplacer. On s'en charge.";

export const coursesParticuliersIntroParagraphs = [
    "LivSight ne livre pas que des colis e-commerce. Toute personne à Yaoundé peut commander une course : récupérer un document, déposer un colis, faire une commission, sans bouger de chez elle.",
];

/** Trois accroches sous l'intro */
export const coursesParticuliersHighlights = [
    {
        title: "1 message",
        body: "sur WhatsApp suffit pour commander",
    },
    {
        title: "Tarifs",
        body: "discutés en fonction de la tâche",
    },
    {
        title: "Yaoundé",
        body: "toutes les zones couvertes par l'agence",
    },
];

export const coursesParticuliersServicesTitle = "Ce qu'on peut faire pour vous";

/** iconId : document | shopping | cube | gift | arrow | chat */
export const coursesParticuliersServices = [
    {
        iconId: "document",
        title: "Documents & papiers",
        description:
            "Récupérer ou déposer un document, un contrat, une carte, un acte : n'importe quel papier à faire circuler dans la ville.",
    },
    {
        iconId: "shopping",
        title: "Achats & commissions",
        description:
            "Vous avez besoin qu'on passe acheter quelque chose pour vous ? Marché, pharmacie, boutique : on s'en charge et on vous livre.",
    },
    {
        iconId: "cube",
        title: "Colis & paquets",
        description:
            "Envoyer un colis à quelqu'un en ville sans vous déplacer. On récupère chez vous et on livre à l'adresse indiquée.",
    },
    {
        iconId: "gift",
        title: "Cadeaux & surprises",
        description:
            "Faire livrer un cadeau, des fleurs ou un repas à un proche : discret, rapide et livré par un livreur professionnel.",
    },
    {
        iconId: "arrow",
        title: "Dépôt & récupération",
        description:
            "Déposer quelque chose chez quelqu'un ou récupérer un objet à une adresse : sans avoir à vous déplacer vous-même.",
    },
    {
        iconId: "chat",
        title: "Autre chose ?",
        description:
            "Si vous avez besoin qu'on se déplace pour vous à Yaoundé et que ça ne rentre pas dans une case : écrivez-nous, on vous répond.",
    },
];

export const coursesParticuliersHowTitle = "Comment ça marche";

export const coursesParticuliersSteps = [
    {
        step: "1",
        title: "Envoyez un message sur WhatsApp",
        description:
            "Décrivez ce que vous voulez faire : récupérer, déposer, acheter, livrer. Donnez les adresses et on vous confirme le tarif en quelques minutes.",
    },
    {
        step: "2",
        title: "On confirme et on assigne un livreur",
        description:
            "Dès que vous validez, on assigne le livreur le plus proche. Vous restez informé de l'avancement de la course.",
    },
    {
        step: "3",
        title: "Le livreur s'en occupe",
        description:
            "Votre livreur LivSight (identifié, formé et rattaché à l'agence) prend en charge la course. Vous payez à la livraison en espèces.",
    },
];

export const coursesParticuliersPricingTitle = "Tarifs";

export const coursesParticuliersPricingBody =
    "Les tarifs des courses particuliers sont discutés avec vous en fonction de la tâche : nature de la course, trajets, temps sur place. Écrivez-nous sur WhatsApp pour une estimation adaptée à votre besoin.";

export const coursesParticuliersCtaTitle = "Vous avez une course ?";

export const coursesParticuliersCtaBody =
    "Écrivez-nous sur WhatsApp : on vous répond en moins de 30 minutes.";

export const coursesParticuliersCtaButtonLabel = "Commander sur WhatsApp";
