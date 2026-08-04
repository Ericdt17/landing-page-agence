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

export const solutionClientSteps = [
    {
        step: "1",
        title: "Inscrivez-vous avec votre numéro de téléphone",
        description:
            "Entrez votre numéro, recevez un code OTP par SMS, finalisez votre profil et choisissez LivSight comme agence partenaire. Moins de 2 minutes.",
    },
    {
        step: "2",
        title: "Ajoutez vos produits à votre catalogue",
        description:
            "Créez vos références produits avec nom, description et quantité disponible. Votre stock est géré automatiquement à chaque livraison confirmée.",
    },
    {
        step: "3",
        title: "Créez votre première livraison",
        description:
            "Sélectionnez la zone de livraison, choisissez le produit depuis votre catalogue, renseignez le montant et envoyez. Votre agent reçoit la commande instantanément.",
    },
    {
        step: "4",
        title: "Suivez en temps réel et recevez vos fonds",
        description:
            "Recevez une notification à chaque étape. Une fois la livraison confirmée, vos fonds sont reversés dans les 3 heures, déduction faite des frais de livraison.",
    },
];

export const solutionClientStoresTitle = "Disponible sur";

export const solutionClientStores = [
    { platform: "Android", store: "Google Play Store" },
    { platform: "iOS", store: "Apple App Store" },
];

export const solutionClientPricingTitle = "Gratuit";

export const solutionClientPricingBody = "Aucun abonnement client";

export const solutionClientCtaTitle = "Prêt à démarrer ?";

export const solutionClientCtaBody =
    "Inscrivez-vous gratuitement et faites votre première livraison aujourd'hui.";
