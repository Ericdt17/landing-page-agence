/**
 * Page Intégrations API : contenu éditable.
 * Route : aligner `plateformeIntegrationsApiPath` avec `App.jsx` et le footer Plateforme.
 */

export const plateformeIntegrationsApiPath = "/plateforme/integrations-api";

export const integrationsApiPageTitle = "Intégrations API";

export const integrationsApiPageTagline =
    "Connectez votre boutique en ligne directement à LivSight.";

export const integrationsApiBadge = "Bientôt disponible";

export const integrationsApiIntroParagraphs = [
    "Bientôt, vous pourrez connecter votre site, votre boutique Shopify ou votre système de gestion de commandes à LivSight via une API. Chaque nouvelle commande créée chez vous génère automatiquement une livraison : sans ressaisie, sans copier-coller.",
    "Cette fonctionnalité est en cours de développement. Elle sera disponible dans une prochaine version de LivSight. Vous pouvez d'ores et déjà rejoindre la liste d'attente pour être notifié en priorité à la sortie.",
];

export const integrationsApiFeaturesTitle = "Ce que l'API permettra";

export const integrationsApiVersionLabel = "V2";

/** iconId : bolt | webhook | cube | document | shop | book */
export const integrationsApiFeatures = [
    {
        iconId: "bolt",
        title: "Création automatique de livraisons",
        description:
            "Une commande passée sur votre boutique en ligne crée automatiquement une livraison LivSight sans aucune action manuelle de votre part.",
    },
    {
        iconId: "webhook",
        title: "Webhooks de statuts",
        description:
            "Recevez une notification automatique sur votre système à chaque changement de statut : assigné, en route, livré, échoué.",
    },
    {
        iconId: "cube",
        title: "Synchronisation du stock",
        description:
            "Votre stock LivSight se met à jour automatiquement en fonction des ventes enregistrées sur votre plateforme e-commerce.",
    },
    {
        iconId: "document",
        title: "Import en masse CSV",
        description:
            "Importez des centaines de commandes en une seule fois via un fichier CSV. Idéal pour les commerçants à fort volume.",
    },
    {
        iconId: "shop",
        title: "Connexion Shopify",
        description:
            "Un connecteur natif Shopify permettra de synchroniser vos commandes, produits et statuts sans configuration technique.",
    },
    {
        iconId: "book",
        title: "Documentation développeur",
        description:
            "Une documentation technique complète sera publiée avec des exemples de requêtes, des SDKs et un environnement de test sandbox.",
    },
];

export const integrationsApiAudienceTitle = "Qui pourra en bénéficier";

/** iconId : shop | server | chart */
export const integrationsApiAudienceItems = [
    {
        iconId: "shop",
        title: "Boutiques Shopify & WooCommerce",
        description:
            "Connectez votre boutique en ligne et déclenchez une livraison LivSight automatiquement à chaque nouvelle commande client.",
    },
    {
        iconId: "server",
        title: "Systèmes de gestion internes",
        description:
            "Vous avez votre propre logiciel de gestion de commandes ? L'API LivSight s'y connecte pour déclencher les livraisons sans changer vos habitudes.",
    },
    {
        iconId: "chart",
        title: "Commerçants à fort volume",
        description:
            "Si vous gérez plus de 30 commandes par jour, l'import CSV et les webhooks vous feront gagner un temps considérable sur la gestion quotidienne.",
    },
];

export const integrationsApiCodeTitle = "Aperçu de ce que l'API ressemblera";

export const integrationsApiCodeSample = `// Créer une livraison via l'API LivSight (V2)
POST /api/v1/deliveries

{
  "customer_name": "Jean Mbarga",
  "phone": "+237 6XX XXX XXX",
  "quartier": "Bastos",
  "items": "Robe bleue x1",
  "amount_due": 15000,
  "notes": "Appeler avant d'arriver"
}

// Réponse
{ "delivery_id": "LV-2026-00412", "status": "pending" }`;

export const integrationsApiWaitlistTitle = "Soyez notifié en priorité";

export const integrationsApiWaitlistBody =
    "Laissez votre contact et nous vous préviendrons dès que l'API est disponible.";

export const integrationsApiWaitlistButtonLabel = "Rejoindre la liste";
