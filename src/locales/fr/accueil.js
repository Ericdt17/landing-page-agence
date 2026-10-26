/**
 * Accueil (français) : textes de la maquette « Site web / Accueil ».
 *
 * Écarts volontaires avec la maquette :
 * - pas de témoignages : ceux de la maquette sont des exemples inventés (#12) ;
 * - « 100 % livreurs salariés » remplacé par le tarif d'entrée (#9) ;
 * - pas de faux « Dernière livraison : Bastos » ni de compteur : uniquement des repères factuels.
 */
export default {
    seo: {
        title: "Agence de livraison à Yaoundé",
        description:
            "LivSight stocke vos produits, livre partout à Yaoundé et encaisse pour vous. Vos fonds reversés en fin de journée, stockage offert 3 mois.",
    },
    hero: {
        kicker: "Votre partenaire logistique",
        title: "Vous vendez. On gère la suite.",
        lede: "De la gestion de vos stocks à la livraison, en passant par le suivi de vos clients et vos encaissements. Une équipe et des applications pour tout gérer.",
        primary: "Commencer sur WhatsApp",
        secondary: "Découvrir nos services",
        reassurance: "Aucun abonnement · Mise en place le jour même · À Yaoundé pour l'instant",
    },
    proof: {
        title: "La logistique simplifiée, les avantages en plus.",
        subtitle: "Des tarifs accessibles, des paiements rapides et des services pensés pour faciliter votre quotidien.",
        figures: [
            { value: "Dès 1 000 FCFA", label: "Livraison à Yaoundé" },
            { value: "Fin de journée", label: "Reversement de vos encaissements" },
            { value: "3 mois offerts", label: "Stockage de vos marchandises" },
            { value: "< 10 min", label: "Temps de réponse WhatsApp" },
        ],
    },
    app: {
        kicker: "L'application",
        title: "Votre commerce continue de tourner, même sans vous.",
        body: "Plus d'appels pour savoir où est un colis. Chaque statut se met à jour tout seul, chaque franc encaissé est enregistré, et le relevé se lit sans explication.",
        link: "Voir les écrans de l'application",
        captions: {
            orders: { title: "Vos commandes, en quelques clics.", text: "Créez vos livraisons depuis l'application. Nous nous occupons du reste." },
            stock: { title: "Votre stock, sous contrôle.", text: "Consultez vos produits et leurs quantités à tout moment." },
            payout: { title: "Vos encaissements, en toute transparence.", text: "Suivez les montants collectés et vos opérations financières." },
            tracking: { title: "Bientôt : vos livreurs en temps réel.", text: "Suivez l'avancement de vos livraisons directement sur une carte." },
        },
    },
    differences: {
        kicker: "Ce qui nous différencie",
        title: "Le problème n'est pas vos ventes. C'est ce qui se passe après.",
        body: "Les clients qu'il faut relancer, les colis égarés, les livraisons en retard et les encaissements qui ne correspondent pas toujours aux ventes.",
        body2: "Chez LivSight, nous avons construit un écosystème qui combine des agents encadrés, des livreurs sélectionnés, WhatsApp et nos propres applications pour reprendre le contrôle de vos opérations.",
        body3: "Vous vous concentrez sur vos ventes. Nous nous occupons du reste.",
        rows: [
            {
                title: "Des agents qui s'occupent vraiment de vos commandes",
                text: "Nos agents prennent en charge vos commandes, contactent vos clients, coordonnent les livreurs et assurent le suivi des livraisons. Vous vous concentrez sur vos ventes, nous gérons les opérations.",
            },
            {
                title: "WhatsApp pour commencer, nos applications pour aller plus loin",
                text: "Pas besoin de changer vos habitudes pour démarrer. Envoyez vos commandes sur WhatsApp et notre équipe les prend en charge. Grâce à notre écosystème d'applications, retrouvez ensuite vos livraisons et vos encaissements au même endroit.",
            },
            {
                title: "Des livreurs sélectionnés et encadrés",
                text: "Nos livreurs sont sélectionnés, formés et suivis par notre équipe. En cas de difficulté, LivSight reste votre interlocuteur et assure la coordination nécessaire.",
            },
            {
                title: "Votre argent en fin de journée",
                text: "Vos encaissements sont reversés en fin de journée, selon les conditions convenues. Vous gardez une meilleure visibilité sur votre trésorerie.",
            },
            {
                title: "Des livraisons mieux organisées",
                text: "Nous regroupons les commandes par zone et organisons les tournées pour limiter les déplacements inutiles et améliorer l'efficacité des livraisons.",
            },
            {
                title: "Une équipe qui vous répond",
                text: "Une question, un imprévu ou une livraison à vérifier ? Nos agents restent disponibles sur WhatsApp pendant les heures d'ouverture, avec un objectif de réponse en moins de 10 minutes.",
            },
            {
                title: "Votre commerce, où que vous soyez",
                text: "À Yaoundé, dans une autre ville ou à l'étranger, gardez le contrôle grâce à nos applications : suivez vos livraisons et vos encaissements à distance, pendant que notre équipe s'occupe du terrain.",
            },
        ],
        link: "Découvrir nos tarifs",
    },
    steps: {
        title: "Commencez à livrer en moins d'une journée.",
        cta: "Démarrer aujourd'hui",
        steps: [
            { number: "01", title: "On échange sur WhatsApp", text: "Parlez-nous de votre activité, de vos produits et de vos volumes." },
            { number: "02", title: "On met tout en place", text: "Compte créé, stock déposé si besoin, application installée, votre équipe formée." },
            { number: "03", title: "Vos commandes partent", text: "Envoyez vos premières commandes : nos livreurs prennent le relais, depuis notre entrepôt ou chez vous." },
        ],
    },
    marketplace: {
        kicker: "Bientôt · la marketplace LivSight",
        title: "Et si nous vous amenions les clients aussi ?",
        body: "Une place de marché où vos produits sont en vitrine et où les acheteurs de Yaoundé commandent directement. Même entrepôt, mêmes livreurs, même reversement.",
        cta: "Écrire sur WhatsApp",
        link: "Comment ça va marcher",
    },
    finalCta: {
        title: "Aucun engagement. Mise en place le jour même.",
        primary: "Commencer à livrer",
        secondary: "Nous écrire",
    },
};
