/**
 * Page « À propos » (français), d'après la maquette « Notre histoire ».
 *
 * Écarts volontaires avec la maquette :
 * - « livreurs salariés » retiré, le statut des livreurs n'est pas tranché (#9) ;
 * - « montant à encaisser verrouillé avant le départ » retiré : ce verrou
 *   n'existe pas dans le code ;
 * - « le prix tient » retiré, aucune garantie de prix n'est publiée.
 */
export default {
    seo: {
        title: "À propos",
        description:
            "LivSight est née à Yaoundé d'un constat simple : le problème des commerçants n'est pas de vendre, c'est tout ce qui se passe après.",
    },
    hero: {
        kicker: "Notre histoire",
        title: "Nous avons commencé par livrer. Nous continuons par vendre.",
        lede: "LivSight est née à Yaoundé d'un constat simple : le problème des commerçants n'est pas de vendre, c'est tout ce qui se passe après. Les colis oubliés, les clients qui appellent pour savoir où en est leur commande, l'argent qui met une semaine à revenir.",
    },
    principlesLabel: "Nos principes",
    principles: [
        {
            number: "01",
            title: "Une agence, pas une plateforme de mise en relation",
            text: "Nos livreurs sont recrutés, formés et rattachés à l'agence. Quand un colis se perd, c'est nous qui répondons, pas un prestataire inconnu.",
        },
        {
            number: "02",
            title: "Votre argent ne dort pas chez nous",
            text: "Un commerçant qui attend son argent ne peut pas racheter du stock. C'est pour ça que le reversement se fait en fin de journée, dès que les livraisons sont terminées.",
        },
        {
            number: "03",
            title: "Couvrir mieux plutôt que couvrir plus",
            text: "La densité fait tout : plus les points de livraison sont proches, plus la tournée est courte. Nous préférons être excellents à Yaoundé avant d'ouvrir d'autres villes.",
        },
    ],
    closing:
        "Nous grandissons petit à petit : un quartier après l'autre, un commerçant après l'autre. Ce qui marche, nous le gardons ; ce qui ne marche pas, nous l'arrêtons avant de l'étendre.",
    statsLabel: "LivSight en chiffres",
    stats: {
        presence: { value: "2 ans", label: "de présence à l'Hippodrome" },
        clients: { label: "commerçants partenaires" },
        payout: { value: "Fin de journée", label: "vos fonds reversés" },
    },
    company: {
        title: "L'entreprise",
        lines: ["H-Groupe SARL · Yaoundé, Cameroun", "Hippodrome, Yaoundé", "Lundi au samedi · 8h00 à 18h00"],
        cta: "Nous contacter",
    },
};
