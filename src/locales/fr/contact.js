/**
 * Page « Contact » (français), d'après la maquette.
 *
 * Pas de numéro de téléphone publié tant qu'il n'est pas fourni : la ligne
 * « Téléphone » renvoie vers le WhatsApp officiel, qui accepte aussi les appels.
 */
export default {
    seo: {
        title: "Contact",
        description:
            "Écrivez à LivSight sur WhatsApp, réponse en moins de 10 minutes pendant les heures d'ouverture, ou par email. Hippodrome, Yaoundé.",
    },
    hero: {
        kicker: "Contact",
        title: "On vous répond vite. Vraiment.",
        lede: "WhatsApp est le canal le plus rapide : réponse en moins de 10 minutes pendant les heures d'ouverture, avec un suivi écrit de votre demande.",
    },
    channelsLabel: "Nous joindre",
    channels: {
        whatsapp: { title: "WhatsApp", text: "Réponse en moins de 10 min · le canal le plus rapide", cta: "Écrire sur WhatsApp" },
        email: { title: "Email", text: "Demandes formelles, partenariats, presse", cta: "Envoyer un email" },
        phone: { title: "Téléphone", text: "Pour les urgences uniquement : appelez le numéro WhatsApp de LivSight" },
    },
    place: {
        mapLabel: "Plan de situation : Hippodrome, Yaoundé",
        title: "Hippodrome, Yaoundé",
        lines: ["Cameroun", "Lundi au samedi · 8h00 à 18h00", "Fermé le dimanche : urgences sur WhatsApp uniquement"],
    },
    reasons: {
        title: "Pour quelle raison nous contacter",
        items: [
            { id: "demarrer", label: "Commencer à livrer", channel: "whatsapp" },
            { id: "probleme", label: "Problème avec une livraison", channel: "whatsapp" },
            { id: "suivi", label: "Suivi de commande", channel: "whatsapp" },
            { id: "partenariat", label: "Partenariat", channel: "email", subject: "Partenariat" },
            { id: "presse", label: "Presse", channel: "email", subject: "Presse" },
        ],
    },
    company: {
        title: "L'entreprise",
        name: "LivSight SARL · Yaoundé, Cameroun",
    },
};
