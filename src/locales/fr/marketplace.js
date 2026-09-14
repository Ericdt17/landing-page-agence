/**
 * Page « Marketplace · bientôt » (français). Une histoire à venir, pas une
 * offre : aucun tarif ni frais n'est publié tant qu'ils ne sont pas fixés.
 *
 * Écarts volontaires avec la maquette :
 * - pas de champ email tant que l'inscription n'existe pas (#35) ;
 * - le relevé d'exemple ne montre pas de frais chiffrés ;
 * - « paiement par carte » et « livreurs salariés » retirés, non confirmés ;
 * - écrans d'aperçu situés à Yaoundé, avec des photos sous licence libre.
 */
export default {
    seo: {
        title: "Marketplace, bientôt",
        description:
            "Bientôt, la marketplace LivSight : vos produits en vitrine, les acheteurs de Yaoundé commandent, nous livrons et vous reversons comme aujourd'hui.",
    },
    hero: {
        badge: "Bientôt",
        kicker: "La marketplace LivSight",
        title: "Nous livrons déjà pour vous. Bientôt, nous vous amènerons les clients.",
        lede: "Une place de marché où vos produits sont en vitrine et où les acheteurs de Yaoundé commandent directement. Même entrepôt, mêmes livreurs, même reversement. Vous n'avez rien à changer à votre façon de travailler.",
        cta: "Écrire sur WhatsApp",
        note: "Nous prévenons d'abord les commerçants qui livrent déjà avec nous.",
    },
    steps: {
        kicker: "Comment ça va marcher",
        title: "Quatre étapes, et rien de nouveau à apprendre.",
        steps: [
            { number: "01", title: "Vos produits en vitrine", text: "Photographiez un article, la fiche se prépare, vous la validez. Elle apparaît sur la marketplace avec votre prix et votre stock." },
            { number: "02", title: "L'acheteur commande", text: "Il paie par Mobile Money ou à la livraison. La commande arrive dans la file que vous connaissez déjà." },
            { number: "03", title: "Nous livrons", text: "Depuis l'Hippodrome si votre stock est chez nous, sinon nous venons le chercher. Les mêmes livreurs, le même suivi." },
            { number: "04", title: "Vous êtes reversé", text: "Comme aujourd'hui, sur votre numéro Mobile Money, avec un relevé détaillé commande par commande." },
        ],
    },
    changes: {
        kicker: "Ce qui change pour vous",
        title: "Un produit en vitrine, une commande dans votre application.",
        body: "La commande arrive dans l'onglet Courses que vous utilisez déjà, et le reversement suit le même chemin.",
        figures: [
            { title: "1 · Votre produit", text: "Tel qu'un acheteur le voit, avec votre prix." },
            { title: "2 · La commande", text: "Dans l'onglet Courses, comme les autres." },
            { title: "3 · Votre argent", text: "Même relevé, même numéro Mobile Money." },
        ],
    },
    same: {
        kicker: "Ce qui ne change pas",
        items: [
            "Le stockage à l'Hippodrome",
            "Les mêmes livreurs",
            "Le reversement sur votre Mobile Money",
            "L'application que vous utilisez déjà",
            "Aucun abonnement",
        ],
    },
    closingLabel: "Ce qui ne change pas et ce qui reste à fixer",
    open: {
        kicker: "Ce qu'il reste à fixer",
        body: [
            "Nous ne publions pas encore les tarifs de la marketplace : nous voulons les fixer avec les commerçants qui livrent déjà avec nous, pas les décider seuls.",
            "Si vous voulez en discuter avant le lancement, écrivez-nous.",
        ],
        cta: "Écrire sur WhatsApp",
    },
    preview: {
        kicker: "Aperçu",
        title: "Voilà à quoi ressemblera la marketplace.",
        body: "Écrans en cours de conception : les produits, les prix et les avis sont des exemples.",
        webAlt: "Page d'accueil de la marketplace sur ordinateur : recherche, rayons alimentaire, téléphones, mode et beauté, commandes à racheter et suivi de commande en cours.",
        browserLabel: "marketplace.livsight.com",
        mobile: [
            { key: "accueil", caption: "L'accueil sur téléphone", alt: "Accueil de la marketplace sur téléphone : livraison à Bastos, commande en route, rayons et produits populaires." },
            { key: "produit", caption: "Une fiche produit", alt: "Fiche d'un casque Bluetooth sans fil à 12 900 FCFA, vendu par une boutique et expédié par LivSight, livrable le jour même." },
            { key: "suivi", caption: "Le suivi du livreur", alt: "Suivi en direct du livreur sur une carte, arrivée dans 25 minutes, étapes de la commande." },
        ],
        creditsLabel: "Crédits des photos",
        creditsIntro: "Photos de produits sous licence CC0 (domaine public) ou CC BY, via Openverse.",
        creditBy: "par",
    },
};
