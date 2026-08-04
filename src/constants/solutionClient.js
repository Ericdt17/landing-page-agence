/**
 * Page Solution client : contenu éditable.
 * Route : aligner `plateformeSolutionClientPath` avec `App.jsx` et le footer Plateforme.
 */

export const plateformeSolutionClientPath = "/plateforme/solution-client";

export const solutionClientPageTitle = "Solution client";

export const solutionClientPageTagline =
    "Gérez toutes vos livraisons depuis votre téléphone.";

export const solutionClientIntroParagraphs = [
    "L'application LivSight pour commerçants vous permet de créer une livraison en 3 étapes, suivre vos colis en temps réel, gérer votre stock et communiquer avec votre agent : sans appel, sans WhatsApp, sans chaos.",
];

export const solutionClientFeaturesTitle = "Ce que vous pouvez faire";

/** iconId : clipboard | truck | cube | chat | chart | banknotes */
export const solutionClientFeatures = [
    {
        iconId: "clipboard",
        title: "Créer une livraison en 3 étapes",
        description:
            "Sélectionnez la zone, renseignez le colis et confirmez. La livraison apparaît instantanément chez votre agent.",
    },
    {
        iconId: "truck",
        title: "Suivre vos commandes en temps réel",
        description:
            "Timeline horodatée à chaque étape : commande confirmée, en route, livrée. Notifications push automatiques.",
    },
    {
        iconId: "cube",
        title: "Gérer votre stock",
        description:
            "Ajoutez vos produits, ajustez les quantités et sélectionnez-les directement à la création de chaque livraison.",
    },
    {
        iconId: "chat",
        title: "Chat direct avec votre agent",
        description:
            "Posez vos questions, signalez un problème ou demandez un suivi : depuis l'app, sans appel.",
    },
    {
        iconId: "chart",
        title: "Rapports & statistiques",
        description:
            "Consultez vos livraisons journalières, hebdomadaires et mensuelles avec taux de réussite et montants totaux.",
    },
    {
        iconId: "banknotes",
        title: "Reversement tracé",
        description:
            "Chaque encaissement est enregistré. Vos fonds vous sont reversés en maximum 3h après confirmation de livraison.",
    },
];

export const solutionClientHowTitle = "Comment ça marche";

/** Aligné sur `howItWorksSteps` (landing) : source unique côté page Solution client */
export const solutionClientHowSubheadline =
    "Commencez à livrer en moins d’une journée.";

export const solutionClientSteps = [
    {
        step: "1",
        title: "Contactez-nous sur WhatsApp",
        description:
            "Nous échangeons avec vous pour comprendre votre activité et vos besoins.",
    },
    {
        step: "2",
        title: "Nous créons votre espace LivSight",
        description:
            "Nous créons votre groupe WhatsApp dédié afin que vous puissiez commencer à nous envoyer vos commandes immédiatement.",
    },
    {
        step: "3",
        title: "Nous configurons votre compte",
        description:
            "Nous créons votre compte, installons l’application LivSight et vous montrons comment l’utiliser.",
    },
    {
        step: "4",
        title: "Vous vendez, nous livrons",
        description:
            "Recevez vos commandes comme d’habitude. LivSight prend en charge les livraisons, le suivi et le reversement de vos fonds.",
    },
];

export const solutionClientStoresTitle = "Disponible sur";

export const solutionClientStores = [
    {
        platform: "Android",
        store: "Contactez-nous directement pour obtenir l’accès à la version Android",
        href: "https://wa.link/zc5ijs",
    },
    {
        platform: "iOS",
        store: "Apple App Store",
        href: "https://apps.apple.com/fr/app/livsight/id6788786430?l=en-GB",
    },
];

export const solutionClientPricingTitle = "Gratuit";

export const solutionClientPricingBody = "Aucun abonnement client";

export const solutionClientCtaTitle = "Prêt à démarrer ?";

export const solutionClientCtaBody =
    "Inscrivez-vous gratuitement et faites votre première livraison aujourd'hui.";
