/**
 * Page « Technologie » : chaque affirmation ici a été vérifiée dans le code.
 *
 * Sources : LivSightCore (ZoneAssigner, ExactRouteOptimizer, ZoneEditManager,
 * RouteTaskRepository, DeliveryRequest, GoogleGeocodingProvider,
 * WhatsAppBroadcastService) et parcoursLivreur (useDeliveryLocationTracking).
 *
 * Écarts volontaires avec la maquette, faute d'existence dans le code :
 * - pas d'« algorithme qui assigne les livreurs » : un agent choisit le livreur ;
 * - pas d'ordonnancement « par échéance » ;
 * - pas de « montant verrouillé » par contrainte en base, ni de file d'actions
 *   hors ligne ou de redimensionnement d'images dans l'application livreur.
 */

export const technologiePath = "/technologie";

export const technologieSeo = {
    title: "Technologie",
    description:
        "Le logiciel qui fait tourner l'agence LivSight : tournées calculées, commandes WhatsApp remises en forme, suivi qui tient sans réseau.",
};

export const technologieHero = {
    kicker: "Technologie",
    title: "Une agence de livraison qui se construit comme un produit.",
    lede: "Nous écrivons nous-mêmes le logiciel qui fait tourner l'agence : les tournées, les statuts, l'encaissement. Voici trois problèmes réels, et ce que nous en avons fait.",
    stackTitle: "Ce que nous construisons",
    stack: [
        "Backend typé",
        "API interne",
        "Base transactionnelle",
        "Tâches asynchrones",
        "Géolocalisation",
        "Applications mobiles",
        "Web",
    ],
    stackNote: "Nous écrivons du code que la prochaine personne peut lire.",
};

export const technologieProblems = {
    kicker: "Ce que fait le système",
    title: "Trois problèmes que nous avons dû résoudre pour de vrai.",
    items: [
        {
            id: "tournees",
            kicker: "01 · Les tournées",
            title: "Un livreur ne devrait pas traverser la ville deux fois.",
            text: "Chaque livraison rejoint la tournée prévue la plus proche, dix arrêts au plus. L'ordre des arrêts est ensuite calculé exactement, pas au plus proche voisin : sur 85 tournées réelles, la méthode simple se trompait 46 fois et faisait rouler 5 % de trop, soit 76 km en six semaines. Un agent choisit ensuite le livreur de chaque tournée.",
            limit: "Limite connue : les distances sont à vol d'oiseau. À Yaoundé, deux arrêts à 500 m peuvent être à vingt minutes de route.",
        },
        {
            id: "whatsapp",
            kicker: "02 · Les commandes",
            title: "Les commandes arrivent en vrac sur WhatsApp.",
            text: "Un commerçant colle un message : un numéro, un quartier, des produits, un montant, dans n'importe quel ordre. Un assistant le remet en forme, un agent vérifie, puis la livraison est créée. Un même message ne peut jamais créer deux livraisons.",
        },
        {
            id: "terrain",
            kicker: "03 · Le terrain",
            title: "Le suivi doit tenir quand le réseau ne tient pas.",
            text: "Un livreur perd le réseau dans un quartier, pas dans un centre de données. Ses positions restent sur le téléphone et partent dès que la connexion revient. Côté serveur, les tâches se répartissent entre machines sans jamais être traitées deux fois, et une adresse trouvée hors de la zone de service est refusée plutôt que placée au mauvais endroit.",
        },
    ],
};

export const technologieRecrutement = {
    title: "Nous recrutons.",
    body: "Logistique réelle, argent réel, contraintes réelles, sur le terrain comme dans le code. Livreurs, entrepôt, conseillers, support, ingénieurs : si ça vous parle, écrivez-nous.",
    cta: "Rejoindre l'équipe",
};
