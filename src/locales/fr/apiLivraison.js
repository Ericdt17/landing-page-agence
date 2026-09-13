/**
 * Page « API de livraison » (français). Service annoncé : les commerçants
 * connectent leur propre site ou leur logiciel de commandes, et font appel aux
 * livreurs LivSight à la demande.
 *
 * Volontairement absent, faute de décision : connecteurs de plateformes
 * e-commerce, webhooks, import CSV, synchronisation de stock, SDK,
 * environnement de test, exemple de requête et tarifs.
 */
export default {
    seo: {
        title: "API de livraison, bientôt",
        description:
            "Bientôt, connectez votre site à LivSight : chaque commande crée une demande de livraison, et un livreur LivSight s'en charge, à la demande.",
    },
    hero: {
        badge: "Bientôt",
        kicker: "API de livraison",
        title: "Vos commandes en ligne, livrées par nos livreurs, à la demande.",
        lede: "Bientôt, vous pourrez connecter votre site ou votre logiciel de commandes à LivSight. Une commande passée chez vous crée une demande de livraison, et un livreur LivSight s'en charge.",
        cta: "Être prévenu au lancement",
        note: "Nous prévenons d'abord les commerçants qui livrent déjà avec nous.",
    },
    steps: {
        kicker: "Comment ça va marcher",
        title: "Votre site commande, nos livreurs livrent.",
        steps: [
            { number: "01", title: "Votre site envoie la commande", text: "À chaque commande, votre site ou votre logiciel crée une demande de livraison chez LivSight, sans ressaisie." },
            { number: "02", title: "Nous envoyons un livreur", text: "Un livreur LivSight récupère le colis et le livre à votre client." },
            { number: "03", title: "À la demande", text: "Vous faites appel à nos livreurs quand vous en avez besoin, commande par commande." },
        ],
    },
    audience: {
        kicker: "Pour qui",
        rows: [
            { title: "Votre propre site", text: "Vous vendez sur un site que vous avez fait développer : il pourra créer vos livraisons directement." },
            { title: "Votre logiciel de commandes", text: "Vous gérez vos commandes dans un outil interne : il pourra déclencher les livraisons sans changer vos habitudes." },
        ],
    },
    contact: {
        title: "Vous voulez intégrer LivSight à votre site ?",
        body: "L'API n'est pas encore ouverte. Parlez-nous de votre site et de vos volumes : nous vous préviendrons au lancement.",
        cta: "En parler sur WhatsApp",
    },
};
