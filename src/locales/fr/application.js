/**
 * Page « Espace commerçant » (français) : l'application des commerçants.
 *
 * Écarts volontaires avec la maquette :
 * - « Base de connaissances » remplacé par un lien vers les écrans, la base
 *   n'étant pas encore construite ;
 * - la prise de rendez-vous passe par WhatsApp, seul canal disponible.
 */
export default {
    seo: {
        title: "Espace commerçant",
        description:
            "Commandes, stock, livraisons et argent au même endroit, sur votre téléphone. Installation et formation chez vous, sans abonnement.",
    },
    hero: {
        kicker: "Espace commerçant",
        title: "Vos livraisons tiennent dans votre poche.",
        lede: "Les commandes, le stock, les livraisons, l'argent. Tout au même endroit, sur le téléphone que vous avez déjà. Et nous venons vous montrer comment l'utiliser.",
        primary: "Commencer à livrer",
        secondary: "Voir les écrans",
        mockupAlt: "Écran d'accueil de l'application commerçant LivSight sur un téléphone",
        facts: [
            { label: "Installation", value: "le jour même" },
            { label: "Formation", value: "chez vous, incluse" },
            { label: "Abonnement", value: "aucun" },
            { label: "Aide", value: "WhatsApp < 10 min" },
        ],
    },
    soon: {
        kicker: "Une application en constante évolution",
        title: "Nous construisons l'avenir de votre logistique, avec vous.",
        body: "Chez LivSight, nous travaillons chaque jour à améliorer notre application pour l'adapter à vos besoins réels. Notre ambition : vous offrir des outils toujours plus simples, performants et efficaces pour vous permettre de tirer le meilleur de votre activité.",
        columns: [
            {
                title: "Nous vous écoutons",
                text: "Vos retours et vos besoins nous aident à faire évoluer notre application et à développer des solutions qui répondent à vos défis quotidiens.",
            },
            {
                title: "Nous innovons pour vous",
                text: "Notre équipe améliore continuellement les fonctionnalités et l'expérience utilisateur pour simplifier la gestion de votre activité.",
            },
            {
                title: "Vous vous concentrez sur votre croissance",
                text: "Notre objectif est de vous faire gagner du temps, de réduire vos contraintes logistiques et de vous permettre de vous concentrer sur l'essentiel : développer vos ventes.",
            },
        ],
    },
    today: {
        kicker: "Disponible aujourd'hui",
        title: "Six écrans, et votre journée est faite.",
        tourLabel: "Écrans de l'application",
        tabs: [
            { id: "accueil", label: "Accueil", caption: "Vos services et votre dernière commande, d'un coup d'œil." },
            { id: "courses", label: "Courses", caption: "Chaque course, son statut, le montant à encaisser." },
            { id: "stock", label: "Stock", caption: "Vos produits, les quantités, ce qui est en rupture." },
            { id: "rapports", label: "Rapports", caption: "Vos livraisons, leurs statuts, le montant à vous reverser." },
            { id: "inbox", label: "Notifications", caption: "Chaque mise à jour de votre stock et votre bilan du jour." },
            { id: "tarifs", label: "Tarifs par zone", caption: "Le prix connu d'avance, quartier par quartier." },
        ],
    },
    install: {
        title: "Vous nous écrivez sur WhatsApp. On s'occupe du reste.",
        body: "Pas besoin de maîtriser une application pour commencer. Contactez-nous sur WhatsApp, notre équipe met tout en place et vous pouvez rapidement commencer à envoyer vos commandes.",
        body2: "Ensuite, à votre rythme, nous vous accompagnons pour découvrir l'application LivSight et profiter progressivement de tous ses avantages.",
        tagline: "Vous commencez simplement. Nous évoluons ensemble.",
        primary: "Écrire sur WhatsApp",
        secondary: "Nous écrire",
    },
    screensNote: "",
};
