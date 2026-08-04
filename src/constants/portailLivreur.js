/**
 * Page Portail livreur : contenu éditable.
 * Route : aligner `plateformePortailLivreurPath` avec `App.jsx` et le footer Plateforme.
 */

export const plateformePortailLivreurPath = "/plateforme/portail-livreur";

export const portailLivreurPageTitle = "Portail livreur";

export const portailLivreurPageTagline =
    "Nos livreurs sont guidés par des algorithmes pour livrer vos colis plus vite.";

export const portailLivreurIntroParagraphs = [
    "L'application LivSight Livreur n'est pas une simple liste de missions. C'est un outil intelligent qui calcule, optimise et guide chaque livreur en temps réel : pour que votre colis arrive le plus rapidement possible, sans erreur.",
];

export const portailLivreurStats = [
    {
        value: "Temps réel",
        label: "calculs de proximité et de charge à chaque assignation",
    },
    {
        value: "6 statuts",
        label: "pour vous informer de chaque situation terrain",
    },
    {
        value: "0 appel",
        label: "nécessaire de votre part pour savoir où est votre colis",
    },
];

export const portailLivreurAppSectionTitle =
    "Ce que l'application fait pour votre livraison";

export const portailLivreurLeadQuote =
    "Le bon livreur, au bon moment, au bon endroit.";

export const portailLivreurLeadParagraph =
    "Quand votre commande est créée, nos algorithmes analysent en temps réel la position de chaque livreur, sa charge actuelle et sa note de performance. Le système guide l'agent vers le choix le plus optimal : pas le plus rapide sur le papier, mais celui qui va réellement livrer votre colis dans les meilleures conditions.";

/** iconId : cpu | mappin | lock | queue | alert | star */
export const portailLivreurFeatures = [
    {
        iconId: "cpu",
        title: "Assignation calculée, pas au hasard",
        description:
            "Le livreur assigné à votre commande est choisi selon sa distance, sa note et son nombre de colis en charge. Pas le premier disponible : le meilleur disponible.",
    },
    {
        iconId: "mappin",
        title: "GPS actif pendant toute la livraison",
        description:
            "La position de votre livreur est transmise en temps réel à votre agent. Si quelque chose se passe, l'agent le voit immédiatement sans attendre un appel.",
    },
    {
        iconId: "lock",
        title: "Montant à encaisser verrouillé",
        description:
            "Le livreur voit le montant exact à collecter avant même de partir. Il ne peut pas modifier ce montant sur le terrain : ce que vous avez fixé, c'est ce qui est encaissé.",
    },
    {
        iconId: "queue",
        title: "Statuts mis à jour à chaque étape",
        description:
            "Prise en charge, en route, livré : chaque changement est enregistré et vous est notifié instantanément. Vous ne vous demandez plus jamais où en est votre colis.",
    },
    {
        iconId: "alert",
        title: "Incidents signalés en temps réel",
        description:
            "Si le destinataire est absent, ne répond pas ou refuse le colis, le livreur le signale immédiatement depuis l'app. Votre agent est alerté et réagit sans délai.",
    },
    {
        iconId: "star",
        title: "Livreurs notés et suivis",
        description:
            "Chaque livreur accumule une note basée sur ses performances. Les livreurs les moins performants sont écartés des assignations prioritaires automatiquement.",
    },
];

export const portailLivreurImpactTitle = "Ce que ça change pour vous";

export const portailLivreurImpactItems = [
    {
        title: "Moins de retards",
        description:
            "Un livreur surchargé n'est jamais assigné à votre commande. L'algorithme répartit la charge pour maintenir les délais.",
    },
    {
        title: "Moins d'erreurs d'encaissement",
        description:
            "Le montant est verrouillé dans l'app. Le livreur sait exactement quoi collecter : aucune confusion, aucune perte.",
    },
    {
        title: "Zéro opacité",
        description:
            "Vous êtes notifié à chaque étape. Votre agent voit tout. Rien ne se passe dans votre dos.",
    },
    {
        title: "Plus de livraisons réussies",
        description:
            "Des livreurs mieux guidés, mieux informés et mieux suivis : c'est directement plus de livraisons confirmées pour votre boutique.",
    },
];
