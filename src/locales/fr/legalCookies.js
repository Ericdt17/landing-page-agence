/** Politique cookies (français, version qui fait foi). */
export default {
    seo: {
        title: "Politique cookies",
        description: "Comment le site LivSight utilise les cookies et le stockage du navigateur, et comment gérer vos préférences.",
    },
    title: "Politique cookies",
    updated: "Dernière mise à jour : septembre 2026",
    intro: "Cette page décrit comment le site LivSight utilise les cookies et le stockage du navigateur, et comment vous pouvez gérer vos préférences.",
    contactIntro: "Pour toute question sur cette politique ou vos données, notre équipe est disponible :",
    tableLabel: "Tableau des cookies",
    columns: { type: "Type", name: "Nom", role: "Rôle", duration: "Durée", active: "Actif" },
    rows: [
        { type: "Technique", name: "session_id", role: "Maintenir la session de navigation", duration: "Fin de session", active: "Oui" },
        { type: "Préférence", name: "livsight.lang (stockage local)", role: "Mémoriser la langue choisie, français ou anglais", duration: "Jusqu'à effacement par vous", active: "Oui" },
        { type: "Analytics", name: "_ga / _gid", role: "Statistiques de visite anonymes (Google Analytics)", duration: "2 ans / 24 h", active: "Optionnel" },
        { type: "Publicitaire", name: "Non applicable", role: "Ciblage, reciblage, revente de données", duration: "Non applicable", active: "Non utilisé" },
    ],
    browsers: [
        { browser: "Chrome", steps: "Paramètres → Confidentialité et sécurité → Cookies" },
        { browser: "Firefox", steps: "Paramètres → Vie privée et sécurité → Cookies" },
        { browser: "Safari", steps: "Préférences → Confidentialité → Cookies" },
        { browser: "Edge", steps: "Paramètres → Confidentialité, recherche et services → Cookies" },
    ],
    groups: [
        {
            title: "Qu'est-ce qu'un cookie",
            articles: [
                {
                    art: 1,
                    title: "Définition",
                    paragraphs: [
                        "Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous visitez un site web. Il permet au site de mémoriser certaines informations entre deux visites. Le stockage local du navigateur joue le même rôle pour de petites préférences. Ni l'un ni l'autre ne contient de virus ni ne peut accéder à vos fichiers personnels.",
                    ],
                },
            ],
        },
        {
            title: "Cookies utilisés sur ce site",
            articles: [
                {
                    art: 2,
                    title: "Récapitulatif",
                    paragraphs: [
                        "Le site LivSight utilise uniquement des cookies et un stockage strictement nécessaires à son bon fonctionnement, plus une mesure d'audience optionnelle. Aucun cookie publicitaire ou de profilage n'est déposé.",
                    ],
                    table: true,
                },
                {
                    art: 3,
                    title: "Cookies techniques (obligatoires)",
                    paragraphs: [
                        "Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation, la mémorisation de votre langue et la sécurité de votre session. Ils ne collectent aucune information personnelle identifiable et ne peuvent pas être désactivés sans altérer votre navigation.",
                    ],
                },
                {
                    art: 4,
                    title: "Cookies analytics (optionnels)",
                    paragraphs: [
                        "S'ils sont activés, ces cookies permettent de mesurer le trafic du site de façon anonyme et agrégée (pages visitées, durée de visite, source du trafic). Ces données servent uniquement à améliorer le site. Aucune donnée personnelle identifiable n'est transmise à un tiers à des fins commerciales.",
                        "Ces cookies ne sont activés qu'avec votre consentement explicite, donné dans la bannière cookies lors de votre première visite.",
                    ],
                },
            ],
        },
        {
            title: "Vos droits & gestion",
            articles: [
                {
                    art: 5,
                    title: "Gérer vos préférences",
                    paragraphs: [
                        "Vous pouvez à tout moment modifier vos préférences depuis les paramètres de votre navigateur. Voici comment procéder selon votre navigateur :",
                    ],
                    browsers: true,
                },
                {
                    art: 6,
                    title: "Désactivation & conséquences",
                    paragraphs: [
                        "La désactivation des cookies techniques peut entraîner un dysfonctionnement partiel du site (perte de session, langue à choisir à chaque visite). La désactivation des cookies analytics n'affecte pas votre navigation. LivSight ne peut être tenu responsable des limitations liées à la désactivation des cookies par l'utilisateur.",
                    ],
                },
                {
                    art: 7,
                    title: "Mise à jour de cette politique",
                    paragraphs: [
                        "Cette politique peut être mise à jour à tout moment pour refléter l'évolution des technologies utilisées ou de la réglementation applicable. La date de dernière mise à jour est indiquée en haut de page.",
                    ],
                },
            ],
        },
    ],
};
