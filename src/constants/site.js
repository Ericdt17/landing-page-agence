/**
 * Nouveau site : navigation et pied de page, partagés par toutes les pages.
 *
 * `enabled: false` = la page existe dans la maquette mais pas encore dans le
 * code. Le lien reste décrit ici et s'active dans la PR qui construit la page,
 * pour ne jamais publier un lien qui mène nulle part.
 */
import { facebook, instagram } from "../assets/icons";
import { entrepriseAProposPath } from "./about";
import { legalConditionsPath } from "./conditions";
import { entrepriseContactPath } from "./contact";
import { legalCookiesPath } from "./cookies";
import { plateformeCoursesParticuliersPath } from "./coursesParticuliers";
import { plateformeIntegrationsApiPath } from "./integrationsApi";
import { entrepriseRecrutementPath } from "./recruitment";
import { plateformeSolutionClientPath } from "./solutionClient";

/** Point d'entrée WhatsApp unique (même lien que l'ancien site). */
export const siteWhatsappHref = "https://wa.link/zc5ijs";

export const siteConfidentialitePath = "/legal/confidentialite";

export const siteNavLinks = [
    /* Pointe vers l'ancienne page tant que « Livraison & stockage » n'est pas construite */
    { label: "Livraison & stockage", to: plateformeSolutionClientPath, enabled: true },
    { label: "Tarifs", to: "/tarifs", enabled: false },
    { label: "Technologie", to: "/technologie", enabled: false },
    { label: "Blog", to: "/blog", enabled: false },
    { label: "Rejoindre l'équipe", to: entrepriseRecrutementPath, enabled: true },
    { label: "Marketplace", to: "/marketplace", soon: true, enabled: false },
];

export const siteNavCta = { label: "Commencer à livrer", href: siteWhatsappHref };

export const siteFooterAddressLines = [
    "Hippodrome, Yaoundé · Cameroun",
    "Lundi au samedi · 8h00 à 18h00",
];

export const siteFooterColumns = [
    {
        title: "Le service",
        links: [
            { label: "Livraison & stockage", to: plateformeSolutionClientPath, enabled: true },
            { label: "Tarifs", to: "/tarifs", enabled: false },
            { label: "Courses particuliers", to: plateformeCoursesParticuliersPath, enabled: true },
            { label: "Suivre un colis", to: "/suivi", enabled: false },
        ],
    },
    {
        title: "Commerçants",
        links: [
            { label: "Commencer à livrer", href: siteWhatsappHref, enabled: true },
            { label: "Base de connaissances", to: "/base-de-connaissances", enabled: false },
            { label: "API", to: plateformeIntegrationsApiPath, soon: true, enabled: true },
            { label: "Marketplace", to: "/marketplace", soon: true, enabled: false },
        ],
    },
    {
        title: "L'entreprise",
        links: [
            { label: "Technologie", to: "/technologie", enabled: false },
            { label: "Blog technique", to: "/blog", enabled: false },
            { label: "Rejoindre l'équipe", to: entrepriseRecrutementPath, enabled: true },
            { label: "À propos", to: entrepriseAProposPath, enabled: true },
        ],
    },
    {
        title: "Aide",
        links: [
            { label: "Contact · WhatsApp", to: entrepriseContactPath, enabled: true },
            { label: "Conditions d'utilisation", to: legalConditionsPath, enabled: true },
            { label: "Confidentialité", to: siteConfidentialitePath, enabled: true },
            { label: "Cookies", to: legalCookiesPath, enabled: true },
        ],
    },
];

/* Pas de raison sociale ici tant que le bloc d'identité légale (#7) n'est pas tranché */
export const siteFooterCopyright = "© 2026 LivSight · Yaoundé, Cameroun";

export const siteSocialLinks = [
    {
        label: "LivSight sur Facebook",
        href: "https://www.facebook.com/share/1J4aQ42T2t/?mibextid=wwXIfr",
        icon: facebook,
    },
    {
        label: "LivSight sur Instagram",
        href: "https://www.instagram.com/livsight7?igsh=eHkyMjQyZWVkeGc4&utm_source=qr",
        icon: instagram,
    },
];
