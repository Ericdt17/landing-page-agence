/**
 * Page « Marketplace · bientôt ». Une histoire à venir, pas une offre : aucun
 * tarif ni frais n'est publié tant qu'ils ne sont pas fixés avec les
 * commerçants.
 *
 * Écarts volontaires avec la maquette :
 * - pas de champ e-mail (aucun endpoint d'inscription) : WhatsApp à la place ;
 * - le relevé d'exemple ne montre plus de frais chiffrés (12 900 − 887) ;
 * - « paiement par carte » et « livreurs salariés » retirés, non confirmés.
 */

export const marketplacePath = "/marketplace";

export const marketplaceSeo = {
    title: "Marketplace, bientôt",
    description:
        "Bientôt, la marketplace LivSight : vos produits en vitrine, les acheteurs de Yaoundé commandent, nous livrons et vous reversons comme aujourd'hui.",
};

export const marketplaceHero = {
    badge: "Bientôt",
    kicker: "La marketplace LivSight",
    title: "Nous livrons déjà pour vous. Bientôt, nous vous amènerons les clients.",
    lede: "Une place de marché où vos produits sont en vitrine et où les acheteurs de Yaoundé commandent directement. Même entrepôt, mêmes livreurs, même reversement. Vous n'avez rien à changer à votre façon de travailler.",
    cta: "Être prévenu au lancement",
    note: "Nous prévenons d'abord les commerçants qui livrent déjà avec nous.",
};

export const marketplaceSteps = {
    kicker: "Comment ça va marcher",
    title: "Quatre étapes, et rien de nouveau à apprendre.",
    steps: [
        {
            number: "01",
            title: "Vos produits en vitrine",
            text: "Photographiez un article, la fiche se prépare, vous la validez. Elle apparaît sur la marketplace avec votre prix et votre stock.",
        },
        {
            number: "02",
            title: "L'acheteur commande",
            text: "Il paie par Mobile Money ou à la livraison. La commande arrive dans la file que vous connaissez déjà.",
        },
        {
            number: "03",
            title: "Nous livrons",
            text: "Depuis l'Hippodrome si votre stock est chez nous, sinon nous venons le chercher. Les mêmes livreurs, le même suivi.",
        },
        {
            number: "04",
            title: "Vous êtes reversé",
            text: "Comme aujourd'hui, sur votre numéro Mobile Money, avec un relevé détaillé commande par commande.",
        },
    ],
};

export const marketplaceChanges = {
    kicker: "Ce qui change pour vous",
    title: "Un produit en vitrine, une commande dans votre application.",
    body: "La commande arrive dans l'onglet Courses que vous utilisez déjà, et le reversement suit le même chemin.",
    note: "La boutique côté acheteur n'est pas encore montrée publiquement : nous la présentons d'abord aux commerçants qui livrent avec nous.",
    figures: [
        { title: "1 · Votre produit", text: "Tel qu'un acheteur le voit, avec votre prix." },
        { title: "2 · La commande", text: "Dans l'onglet Courses, comme les autres." },
        { title: "3 · Votre argent", text: "Même relevé, même numéro Mobile Money." },
    ],
};

export const marketplaceSame = {
    kicker: "Ce qui ne change pas",
    items: [
        "Le stockage à l'Hippodrome",
        "Les mêmes livreurs",
        "Le reversement sur votre Mobile Money",
        "L'application que vous utilisez déjà",
        "Aucun abonnement",
    ],
};

export const marketplaceOpen = {
    kicker: "Ce qu'il reste à fixer",
    body: [
        "Nous ne publions pas encore les tarifs de la marketplace : nous voulons les fixer avec les commerçants qui livrent déjà avec nous, pas les décider seuls.",
        "Si vous voulez en discuter avant le lancement, écrivez-nous.",
    ],
    cta: "En discuter sur WhatsApp",
};
