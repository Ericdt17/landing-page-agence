/**
 * Page « L'application commerçant » (français).
 *
 * Écarts volontaires avec la maquette :
 * - « Base de connaissances » remplacé par un lien vers les écrans, la base
 *   n'étant pas encore construite ;
 * - la prise de rendez-vous passe par WhatsApp, seul canal disponible.
 */
export default {
    seo: {
        title: "L'application commerçant",
        description:
            "Commandes, stock, livraisons et argent au même endroit, sur votre téléphone. Installation et formation chez vous, sans abonnement.",
    },
    hero: {
        kicker: "L'application commerçant",
        title: "Vos livraisons tiennent dans votre poche.",
        lede: "Les commandes, le stock, les livraisons, l'argent. Tout au même endroit, sur le téléphone que vous avez déjà. Et nous venons vous montrer comment l'utiliser.",
        primary: "Commencer à livrer",
        secondary: "Voir les écrans",
        facts: [
            { label: "Installation", value: "le jour même" },
            { label: "Formation", value: "chez vous, incluse" },
            { label: "Abonnement", value: "aucun" },
            { label: "Aide", value: "WhatsApp < 10 min" },
        ],
    },
    soon: {
        kicker: "Bientôt dans l'application",
        title: "Votre journée et votre argent, en direct.",
        body: "La position du livreur sur la carte, et votre solde qui monte à chaque livraison, retirable quand vous voulez.",
        tourLabel: "Fonctionnalités à venir",
        tabs: [
            { id: "planning", label: "Le planning du jour", caption: "Chaque enlèvement, chaque livraison, l'heure du reversement.", lift: 17 },
            { id: "livreur", label: "Où est votre livreur", caption: "Sa position sur la carte, l'ordre de sa tournée, le temps restant.", lift: 0 },
            { id: "retrait", label: "Retrait à la demande", caption: "Votre solde en direct, retirable quand vous voulez dans la journée.", lift: 17 },
        ],
        columns: [
            {
                title: "Vous voyez la tournée",
                text: "L'ordre des arrêts, ce qui est livré, ce qui reste. Vous ne rappelez plus personne pour savoir.",
            },
            {
                title: "Vous voyez le livreur",
                text: "Sa position sur la carte et le temps restant avant chaque client. Votre acheteur voit la même chose.",
            },
            {
                title: "Vous prenez votre argent",
                text: "Dès qu'une livraison est encaissée, la somme est retirable. Vous déclenchez le retrait vous-même, à tout moment de la journée.",
            },
        ],
    },
    today: {
        kicker: "Disponible aujourd'hui",
        title: "Six écrans, et votre journée est faite.",
        body: "Un conseiller LivSight vient chez vous, installe l'application et fait votre première course avec vous.",
        tourLabel: "Écrans de l'application",
        tabs: [
            { id: "accueil", label: "Accueil", caption: "Vos chiffres du jour et les dernières courses.", lift: 42 },
            { id: "courses", label: "Courses", caption: "Chaque course, son statut, le montant à encaisser.", lift: 26 },
            { id: "stock", label: "Stock", caption: "Ce qui est à l'Hippodrome, ce qui est en rupture.", lift: 8 },
            { id: "rapports", label: "Rapports", caption: "Taux de réussite, totaux, et l'export PDF.", lift: 8 },
            { id: "inbox", label: "Inbox", caption: "Le livreur, le support, la course, au même endroit.", lift: 26 },
            { id: "tarifs", label: "Tarifs par zone", caption: "Le prix connu d'avance, quartier par quartier.", lift: 42 },
        ],
    },
    install: {
        title: "On vient l'installer et vous montrer, chez vous.",
        body: "Pas de tutoriel à lire seul. Un conseiller passe, crée votre compte, lance votre première course avec vous. Vous gardez son WhatsApp.",
        primary: "Écrire sur WhatsApp",
        secondary: "Nous écrire",
    },
    screensNote: "",
};
