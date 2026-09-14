/**
 * Pages « Livraison & stockage » et « Tarifs » (français).
 *
 * Écarts volontaires avec les maquettes :
 * - « 0 FCFA de stockage » remplacé par « 3 mois offerts » ;
 * - « 100 % de nos livreurs sont salariés » retiré (#9) ;
 * - « Enlèvement chez vous inclus » retiré : l'API expose des frais
 *   d'enlèvement, affichés tels quels quand ils existent ;
 * - les tarifs par quartier sont lus en direct depuis l'API.
 */
export default {
    livraison: {
        seo: {
            title: "Livraison et stockage à Yaoundé",
            description:
                "LivSight livre vos colis partout à Yaoundé, du lundi au samedi, encaisse pour vous et stocke vos produits à l'Hippodrome, 3 mois offerts.",
        },
        hero: {
            kicker: "Livraison & stockage",
            title: "L'agence de livraison des commerçants de Yaoundé.",
            lede: "Notre métier d'origine, et il ne change pas. Que vous vendiez sur les réseaux sociaux ou sur votre propre site, nous stockons, nous livrons et nous encaissons.",
            primary: "Écrire sur WhatsApp",
            secondary: "Voir les tarifs",
            facts: [
                { label: "Reversement", value: "en fin de journée" },
                { label: "Stockage à l'Hippodrome", value: "3 mois offerts" },
                { label: "Livraison", value: "du lundi au samedi" },
                { label: "Réponse WhatsApp", value: "< 10 min" },
            ],
        },
        services: {
            kicker: "Ce que nous livrons",
            title: "Partout à Yaoundé, du lundi au samedi.",
            rows: [
                {
                    title: "Colis & paquets",
                    text: "Le cœur du service. Enlèvement chez vous, ou expédition directe depuis notre entrepôt de l'Hippodrome.",
                },
                {
                    title: "Documents & commissions",
                    text: "Pour les particuliers : un dossier à déposer, une commission à faire faire.",
                    link: "Courses particuliers",
                },
                {
                    title: "Gros volumes",
                    text: "Commerçants à fort volume : tournées dédiées et tarif négocié.",
                },
            ],
        },
        asideLabel: "API et adresse",
        adresse: {
            kicker: "Horaires & adresse",
            title: "Hippodrome, Yaoundé.",
            lines: [
                "Lundi au samedi · 8h00 à 18h00",
                "WhatsApp, réponse en moins de 10 min",
                "Téléphone pour les urgences uniquement",
            ],
            cta: "Écrire sur WhatsApp",
        },
    },
    reversement: {
        kicker: "Le reversement",
        title: "Une formule, pas une surprise.",
        body: "Chaque encaissement est enregistré, livraison par livraison, et chaque ligne de la formule apparaît dans votre relevé.",
        note: "Versé sur votre numéro Mobile Money. Aucune donnée bancaire n'est collectée.",
        exampleLabel: "Exemple de relevé",
        formulaResult: "Montant reversé",
        formulaTerms: ["Montant encaissé", "Frais de livraison", "Dettes en cours"],
        formulaSr: "Montant reversé égale montant encaissé, moins les frais de livraison, moins les dettes en cours.",
        example: [
            { label: "Encaissé", value: "195 900" },
            { label: "Livraisons (8)", value: "−11 600" },
            { label: "Dettes", value: "0" },
            { label: "Vous recevez", value: "184 300", highlight: true },
        ],
    },
    tarifs: {
        seo: {
            title: "Tarifs de livraison",
            description:
                "Pas d'abonnement : vous payez la livraison, de 1 000 à 5 000 FCFA selon le quartier. Stockage offert 3 mois, reversement en fin de journée.",
        },
        hero: {
            kicker: "Tarifs",
            title: "Pas d'abonnement. Vos 3 premiers mois de stockage sont offerts.",
            lede: "Vous payez la livraison, rien d'autre. Le tarif de votre quartier est connu avant la course.",
        },
        columnsLabel: "Ce que vous payez",
        othersLabel: "Autres offres",
        calculKicker: "Le calcul",
        rangeUnit: "à {{max}} FCFA",
        currency: "FCFA",
        columns: {
            livraison: {
                kicker: "Livraison",
                text: "Selon le quartier de livraison dans Yaoundé. Le tarif exact vous est donné avant la course.",
                bullets: ["Encaissement à la livraison inclus", "Statut de chaque course dans l'application", "Tarif connu avant la course"],
            },
            stockage: {
                kicker: "Stockage",
                value: "3 mois",
                unit: "offerts",
                text: "Nous stockons vos produits à l'Hippodrome, offert pendant vos 3 premiers mois. Ils partent le jour même, sans enlèvement à faire.",
                bullets: ["Réception et rangement", "Préparation des colis", "Inventaire visible dans l'application", "Au-delà de 3 mois, selon la taille : nous en discutons"],
            },
            reversement: {
                kicker: "Reversement",
                value: "Fin de journée",
                text: "En fin de journée de travail, livraisons terminées, sur votre numéro Mobile Money.",
                bullets: ["Chaque encaissement enregistré", "Relevé détaillé dans l'application", "Sur votre numéro Mobile Money"],
            },
        },
        zones: {
            kicker: "Par quartier",
            title: "Le prix connu d'avance, quartier par quartier.",
            body: "Ces tarifs sont lus en direct depuis notre système : ce sont ceux que l'application applique à chaque course.",
            loading: "Chargement des tarifs…",
            unavailable:
                "Les tarifs par quartier s'affichent dès que notre service répond. En attendant, demandez le tarif de votre quartier sur WhatsApp : nous répondons en moins de 10 minutes.",
            unavailableCta: "Écrire sur WhatsApp",
            extrasTitle: "Frais annexes",
            entryFeeNote: "Des frais d'accès peuvent s'ajouter pour ce quartier.",
            regionLabel: "Tarifs par zone, {{city}}",
            zoneName: "Zone {{number}}",
            headings: ["Zone", "Distance", "Délai indicatif", "Quartiers", "Tarif"],
            extras: {
                pickup: "Enlèvement chez vous",
                express: "Livraison express",
                expressValue: "+ {{amount}}",
                clientAbsent: "Client absent",
                clientAbsentValue: "{{percent}} % des frais de la course",
            },
        },
        volumes: {
            title: "Gros volumes",
            body: "Commerçants à fort volume : tournées dédiées et tarif négocié. Parlons-en.",
            cta: "Écrire sur WhatsApp",
        },
        marketplace: {
            badge: "Bientôt",
            title: "Tarifs marketplace",
            body: "Les tarifs de la place de marché ne sont pas encore fixés. Nous les définirons avec les commerçants qui livrent déjà avec nous.",
            link: "Comment ça va marcher",
        },
    },
};
