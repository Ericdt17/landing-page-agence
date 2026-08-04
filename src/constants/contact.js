/**
 * Page Contact : contenu éditable.
 * Route : aligner `entrepriseContactPath` avec `App.jsx` et le footer Entreprise.
 */
import { aboutContactAddress, aboutLegalLine } from "./about";
import { securityAgencyPhone } from "./security";

export { securityAgencyPhone };

export const entrepriseContactPath = "/entreprise/contact";

export const contactPageTitle = "Contact";

export const contactPageTagline = "On vous répond vite. Vraiment.";

export const contactIntroParagraphs = [
    "Une question sur nos tarifs, un problème avec une livraison, ou vous voulez simplement démarrer : on est disponibles sur WhatsApp, par email ou en direct à l'Hippodrome.",
];

export const contactChannelsSectionTitle = "Nous contacter";

export const contactWhatsAppChannel = {
    eyebrow: "Canal principal",
    title: "WhatsApp",
    description:
        "Réponse en moins de 30 minutes pendant les heures d'ouverture. Canal le plus rapide.",
};

export const contactEmailChannel = {
    eyebrow: "Réponse sous 24h",
    title: "Email",
    description:
        "Pour les demandes formelles, partenariats ou questions détaillées.",
};

export const contactVisitChannel = {
    eyebrow: "En personne",
    title: "Nous rendre visite",
    addressLine: "Hippodrome, Yaoundé",
    description:
        "Notre bureau est ouvert du lundi au samedi. Venez déposer vos colis ou discuter d'un partenariat.",
};

export const contactPhoneChannel = {
    eyebrow: "Téléphone",
    title: "Appel direct",
    description:
        "Pour les urgences uniquement. Préférez WhatsApp pour un suivi écrit de votre demande.",
};

/** Affiché si `securityAgencyPhone` est vide dans `security.js` */
export const contactPhoneFallbackLine =
    "Le numéro vocal est le même que celui utilisé pour WhatsApp : ouvrez la conversation pour nous appeler.";

export const contactPracticalTitle = "Informations pratiques";

export const contactPracticalLabelAddress = "Adresse";
export const contactPracticalLabelHours = "Horaires";
export const contactPracticalLabelSunday = "Dimanche";
export const contactPracticalLabelCompany = "Entreprise";

export const contactPracticalAddress = aboutContactAddress;

export const contactPracticalWeekHours = "Lundi au Samedi · 8h00 à 18h00";

export const contactPracticalSunday = "Fermé : urgences sur WhatsApp uniquement";

export const contactPracticalCompany = aboutLegalLine;

export const contactResponsibleTitle = "Responsable";

export const contactResponsibleLine =
    "Eric Djou · CEO & Coordinateur des opérations";

export const contactReasonsTitle = "Pour quelle raison nous contacter";

export const contactReasonsItems = [
    {
        title: "Démarrer un partenariat",
        description:
            "Vous êtes commerçant et souhaitez confier vos livraisons à LivSight. On vous explique tout en 10 minutes.",
    },
    {
        title: "Problème avec une livraison",
        description:
            "Un colis en retard, un incident, un montant contesté. Contactez-nous sur WhatsApp avec votre numéro de commande.",
    },
    {
        title: "Question sur les tarifs",
        description:
            "Vous voulez connaître le coût pour votre zone ou votre volume de livraisons. On vous répond rapidement avec un tarif clair.",
    },
    {
        title: "Rejoindre l'équipe",
        description:
            "Vous souhaitez devenir livreur ou agent LivSight. Envoyez-nous un message avec votre profil et votre disponibilité.",
    },
    {
        title: "Presse & partenariat commercial",
        description:
            "Pour toute demande médiatique ou collaboration, contactez-nous par email.",
    },
];

export const contactCtaTitle = "Prêt à démarrer ?";

export const contactCtaBody =
    "Envoyez-nous un message sur WhatsApp : on vous répond en moins de 30 minutes.";
