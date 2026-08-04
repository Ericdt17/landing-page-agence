/**
 * Page Sécurité & confiance : contenu éditable.
 * Route SPA : aligner `legalSecurityPath` avec `App.jsx`.
 */

/** Route SPA */
export const legalSecurityPath = "/legal/securite";

export const securityPageTitle = "Sécurité";

export const securityPageUpdated = "Dernière mise à jour : avril 2026";

export const securityPageIntro =
    "Cette page présente les engagements de LivSight en matière d’identification des livreurs, de protection de vos données et de sécurité financière. Elle complète notre politique de confidentialité.";

/** Texte sous la carte « Nous contacter » en bas de page */
export const securityContactIntro =
    "Pour toute question ou signalement, notre équipe est joignable aux coordonnées ci-dessous.";

/** Adresse physique de l’agence (Art. 8) */
export const securityAgencyAddress = "Hippodrome, Yaoundé, Cameroun";

/**
 * Numéro de téléphone vocal (affiché si non vide, avec lien `tel:`).
 * Laisser vide pour n’afficher que le WhatsApp officiel.
 */
export const securityAgencyPhone = "";

export const securityGroups = [
    {
        groupTitle: "Identité & livreurs",
        articles: [
            {
                art: 1,
                title: "Identification des livreurs",
                paragraphs: [
                    "Tous les livreurs LivSight sont recrutés, formés et identifiés par l'agence. Chaque livreur est rattaché à un compte nominatif sur la plateforme. Aucun livreur non enregistré ne peut effectuer une livraison au nom de LivSight. En cas de doute sur l'identité d'un livreur, le destinataire peut contacter l'agence directement avant de remettre le paiement.",
                ],
                highlightLine:
                    "Un vrai livreur LivSight ne vous demandera jamais de payer plus que le montant indiqué à la commande.",
            },
            {
                art: 2,
                title: "Vérification à la livraison",
                paragraphs: [
                    "Le destinataire est en droit de vérifier le contenu du colis avant de signer ou de payer. En cas de colis endommagé, incomplet ou non conforme, il peut refuser la livraison et en informer immédiatement l'agence. Tout paiement effectué vaut acceptation du colis en l'état.",
                ],
            },
        ],
    },
    {
        groupTitle: "Protection des données",
        articles: [
            {
                art: 3,
                title: "Données personnelles",
                paragraphs: [
                    "Les informations collectées (nom, numéro de téléphone, adresse) sont utilisées uniquement pour traiter et coordonner la livraison. Elles sont transmises au livreur assigné et à l'agent en charge, et à nul autre. LivSight ne vend, ne loue et ne partage aucune donnée personnelle avec des tiers.",
                ],
            },
            {
                art: 4,
                title: "Numéro de téléphone",
                paragraphs: [
                    "Votre numéro de téléphone est utilisé uniquement pour coordonner la livraison (appel ou message du livreur, confirmation de passage). Il ne sera jamais utilisé à des fins commerciales, publicitaires ou partagé à des tiers sans votre consentement explicite.",
                ],
            },
            {
                art: 5,
                title: "Position GPS des livreurs",
                paragraphs: [
                    "La géolocalisation est activée uniquement sur les appareils des livreurs, avec leur consentement explicite, pendant les heures de service. Cette donnée est visible par l'agent de l'agence pour optimiser les assignations. Elle n'est ni stockée de façon permanente ni partagée avec des tiers.",
                ],
            },
        ],
    },
    {
        groupTitle: "Sécurité financière",
        articles: [
            {
                art: 6,
                title: "Aucune donnée bancaire collectée",
                paragraphs: [
                    "LivSight ne collecte, ne stocke et ne traite aucune donnée bancaire ou de carte de paiement. Tous les paiements s'effectuent en espèces à la livraison. Aucun virement de votre part n'est demandé avant la livraison.",
                ],
                highlightLine:
                    "Si quelqu'un vous demande un virement ou un dépôt au nom de LivSight avant livraison, il s'agit d'une tentative de fraude. Contactez-nous immédiatement.",
            },
            {
                art: 7,
                title: "Traçabilité des encaissements",
                paragraphs: [
                    "Chaque montant encaissé par un livreur est enregistré et horodaté sur la plateforme LivSight au moment de la confirmation de livraison. Cette traçabilité garantit au commerçant un suivi clair de chaque transaction et protège toutes les parties en cas de litige.",
                ],
            },
        ],
    },
    {
        groupTitle: "Signalement & contact",
        articles: [
            {
                art: 8,
                title: "Signaler un incident",
                paragraphs: [
                    "Pour signaler un incident de sécurité, un comportement suspect de la part d'un livreur, une tentative de fraude ou tout problème lié à vos données, contactez l'agence directement :",
                ],
                showAgencyContactLines: true,
            },
        ],
    },
];
