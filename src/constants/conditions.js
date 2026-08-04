/**
 * Conditions générales d’utilisation (CGU) : contenu éditable indépendamment du reste de la config.
 * Route SPA : voir `legalConditionsPath`.
 */

/** Route SPA : doit rester alignée avec la route dans `App.jsx` */
export const legalConditionsPath = "/legal/conditions";

export const termsPageTitle = "Conditions Générales d'Utilisation";

export const termsPageUpdated = "Dernière mise à jour : avril 2026";

export const termsPageIntro =
    "Les présentes conditions encadrent l'utilisation du service LivSight par les commerçants partenaires. En utilisant la plateforme, vous acceptez l'ensemble des dispositions ci-dessous.";

export const termsContactIntro =
    "Pour toute question relative à ces conditions générales, notre équipe est disponible :";

export const termsGroups = [
    {
        groupTitle: "Service & livraisons",
        articles: [
            {
                art: 1,
                title: "Périmètre du service",
                paragraphs: [
                    "LivSight assure des livraisons à Yaoundé dans les zones couvertes par l'agence. Toute commande passée en dehors des zones définies peut être refusée ou tarifée différemment. Les délais annoncés sont indicatifs et peuvent varier selon les conditions de circulation, météo ou disponibilité des livreurs.",
                ],
            },
            {
                art: 2,
                title: "Prise en charge des colis",
                paragraphs: [
                    "Le commerçant s'engage à remettre un colis conforme à la description transmise lors de la commande. Tout colis contenant des produits illicites, dangereux, contrefaits ou non déclarés est refusé. En cas de non-conformité constatée à la prise en charge, LivSight se réserve le droit d'annuler la livraison sans indemnité.",
                ],
            },
            {
                art: 3,
                title: "Responsabilité en cas d'échec de livraison",
                paragraphs: [
                    "En cas de client absent, injoignable ou refus de réception, le colis est retourné à l'agence. Des frais de retour peuvent s'appliquer. LivSight ne saurait être tenu responsable des pertes commerciales liées à un échec de livraison imputable au destinataire.",
                ],
            },
        ],
    },
    {
        groupTitle: "Paiement & reversement",
        articles: [
            {
                art: 4,
                title: "Mode de paiement",
                paragraphs: [
                    "Le paiement s'effectue exclusivement en espèces à la livraison COD (Cash on Delivery) en francs CFA (XAF). Aucun paiement par virement, mobile money ou crédit n'est accepté en V1. Le montant à collecter est défini par le commerçant au moment de la création de la commande et ne peut être modifié après assignation au livreur.",
                    "Lorsque le commerçant confie une livraison pour laquelle le règlement a déjà été opéré par l'intermédiaire du livreur (hors encaissement COD classique pour le compte du commerçant), les frais de livraison applicables sont soit déduits du solde du commerçant chez LivSight, soit réglés directement par le commerçant, selon les modalités indiquées sur la plateforme.",
                ],
            },
            {
                art: 5,
                title: "Reversement des fonds encaissés",
                paragraphs: [
                    "LivSight s'engage à reverser au commerçant les fonds collectés lors de la livraison dans un délai maximum de 3 heures suivant la confirmation de livraison. Ce reversement est effectué après déduction des frais de livraison applicables et de toute dette en cours du commerçant envers l'agence.",
                ],
                highlightLine:
                    "Le montant reversé = Montant encaissé − Frais de livraison − Dettes en cours du commerçant.",
            },
            {
                art: 6,
                title: "Compensation des dettes",
                paragraphs: [
                    "Toute somme due par le commerçant à LivSight (frais impayés, avances, pénalités) est automatiquement déduite des encaissements avant reversement. Le commerçant est informé du détail de chaque déduction via la plateforme ou par message. En cas de solde insuffisant pour couvrir la dette, le solde restant dû est reporté sur les prochains reversements.",
                ],
            },
            {
                art: 7,
                title: "Litige sur un reversement",
                paragraphs: [
                    "Tout litige concernant un reversement doit être signalé à l'agence dans les 24 heures suivant la livraison. Passé ce délai, le montant versé est considéré comme accepté. LivSight conserve un historique horodaté de chaque transaction accessible sur demande.",
                ],
            },
        ],
    },
    {
        groupTitle: "Stock & marchandises",
        articles: [
            {
                art: 8,
                title: "Stockage des marchandises",
                paragraphs: [
                    "LivSight propose un service de stockage gratuit dans ses locaux de l'Hippodrome. Le commerçant reste propriétaire de ses marchandises. LivSight s'engage à les conserver en bon état dans des conditions normales. En cas de dommage dû à la négligence prouvée de l'agence, une procédure de réclamation peut être ouverte.",
                ],
            },
            {
                art: 9,
                title: "Exactitude du stock déclaré",
                paragraphs: [
                    "Le commerçant s'engage à maintenir son stock à jour sur la plateforme. LivSight ne peut être tenu responsable d'une livraison échouée ou d'une rupture non signalée due à un stock mal renseigné. Toute discordance entre le stock déclaré et le stock réel engage la responsabilité du commerçant.",
                ],
            },
        ],
    },
    {
        groupTitle: "Résiliation & sanctions",
        articles: [
            {
                art: 10,
                title: "Suspension de compte",
                paragraphs: [
                    "LivSight se réserve le droit de suspendre immédiatement un compte commerçant en cas de : fausses déclarations, commandes fictives répétées, colis non conformes, ou dette non régularisée après mise en demeure. La suspension n'exonère pas le commerçant de ses dettes envers l'agence.",
                ],
            },
            {
                art: 11,
                title: "Résiliation du partenariat",
                paragraphs: [
                    "Chaque partie peut mettre fin au partenariat avec un préavis de 72 heures. En cas de résiliation, les livraisons en cours sont menées à terme. Toute somme due à LivSight reste exigible après résiliation.",
                ],
            },
            {
                art: 12,
                title: "Droit applicable",
                paragraphs: [
                    "Les présentes conditions sont régies par le droit camerounais. Tout litige non résolu à l'amiable sera porté devant les juridictions compétentes de Yaoundé.",
                ],
            },
        ],
    },
];
