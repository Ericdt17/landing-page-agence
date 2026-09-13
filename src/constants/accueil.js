/**
 * Accueil du nouveau site : textes repris de la maquette « Site web / Accueil ».
 *
 * Écarts volontaires avec la maquette :
 * - pas de témoignages : ceux de la maquette sont des exemples inventés (#12) ;
 * - « 100 % livreurs salariés » remplacé par le tarif d'entrée, le statut des
 *   livreurs attendant l'avis de l'avocat (#9) ;
 * - pas de faux « Dernière livraison : Bastos », seul le total réel est affiché.
 */

export const accueilSeo = {
    title: "Agence de livraison à Yaoundé",
    description:
        "LivSight stocke vos produits, livre partout à Yaoundé et encaisse pour vous. Vos fonds reversés en fin de journée, stockage offert 3 mois.",
};

export const accueilHero = {
    kicker: "Agence de livraison",
    title: "Vos colis livrés. Votre argent le même jour.",
    lede: "Nous stockons, nous livrons partout à Yaoundé, nous encaissons pour vous, et vous êtes payé en fin de journée.",
    primary: "Commencer à livrer",
    secondary: "Voir les tarifs",
    reassurance: "Aucun abonnement · Mise en place le jour même · À Yaoundé pour l’instant",
};

export const accueilProof = {
    liveLabel: "En direct",
    counterLabel: "colis livrés depuis le début",
    figures: [
        { value: "Fin de journée", label: "Vos fonds reversés" },
        { value: "3 mois", label: "Stockage offert" },
        { value: "< 30 min", label: "Réponse WhatsApp" },
        { value: "1 000 FCFA", label: "La livraison, dès" },
    ],
};

export const accueilApp = {
    kicker: "L'application",
    title: "Tout ce qui se passe, vous le voyez.",
    body: "Plus d'appels pour savoir où est un colis. Chaque statut se met à jour tout seul, chaque franc encaissé est enregistré, et le relevé se lit sans explication.",
    link: "Voir les écrans de l'application",
    captions: {
        orders: { title: "La file de commandes", text: "Ce qui attend, en haut. Un geste pour accepter." },
        stock: { title: "Le stock, à jour", text: "Un clavier, pas un formulaire." },
        payout: { title: "L'argent, tracé", text: "Chaque ligne, expliquée." },
        tracking: { title: "Le suivi en direct", text: "Vous et votre client, la même vue." },
    },
};

export const accueilDifferences = {
    kicker: "Ce qui nous différencie",
    title: "Le problème n'est pas vos ventes.",
    body: "C'est ce qui se passe après. Les colis oubliés, les clients qui appellent, l'argent qui met une semaine à revenir.",
    rows: [
        {
            title: "Des livreurs de l'agence",
            text: "Recrutés, testés et formés par l'agence, pas des prestataires inconnus. Quand un colis se perd, c'est nous qui répondons.",
        },
        {
            title: "L'argent en fin de journée",
            text: "Reversé dès que vos livraisons sont terminées, pas une semaine plus tard.",
        },
        {
            title: "Assignation calculée",
            text: "Les livraisons proches sont regroupées, et l'échéance passe avant l'ordre d'arrivée.",
        },
        {
            title: "Une réponse, vraiment",
            text: "Sur WhatsApp, en moins de 30 minutes pendant les heures d'ouverture.",
        },
    ],
};

export const accueilSteps = {
    title: "Commencez à livrer en moins d'une journée.",
    cta: "Parler à quelqu'un",
    steps: [
        { number: "01", title: "On vous écoute", text: "Nous comprenons votre activité et vos volumes." },
        { number: "02", title: "On installe tout", text: "Compte créé, application installée, équipe formée." },
        { number: "03", title: "Vous livrez", text: "Vos colis partent de l'Hippodrome ou de chez vous." },
    ],
};

export const accueilMarketplace = {
    kicker: "Bientôt · la marketplace LivSight",
    title: "Et si nous vous amenions les clients aussi ?",
    body: "Une place de marché où vos produits sont en vitrine et où les acheteurs de Yaoundé commandent directement. Même entrepôt, mêmes livreurs, même reversement.",
    cta: "Être prévenu",
};

export const accueilFinalCta = {
    title: "Aucun engagement. Mise en place le jour même.",
    primary: "Commencer à livrer",
    secondary: "Nous écrire",
};
