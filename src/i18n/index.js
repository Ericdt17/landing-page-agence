/**
 * Traductions du site (français par défaut, anglais).
 *
 * - Langue : français par défaut, sur toutes les adresses. L'anglais s'affiche
 *   seulement quand le visiteur le choisit avec le sélecteur FR · EN, et ce
 *   choix est mémorisé. La langue du navigateur n'est pas utilisée : pas de
 *   bascule automatique (les adresses /en viendront avec le pré-rendu).
 * - Textes : un fichier par page et par langue dans src/locales/. Les textes
 *   communs (navigation, pied de page…) et l'accueil sont inclus d'emblée ;
 *   ceux des autres pages sont chargés à la demande, avec la page.
 * - Aucune traduction automatique dans le navigateur : l'anglais est écrit
 *   dans le dépôt, relu comme le français.
 */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

import enAccueil from "../locales/en/accueil";
import enSite from "../locales/en/site";
import frAccueil from "../locales/fr/accueil";
import frSite from "../locales/fr/site";

export const LANGUAGES = ["fr", "en"];
export const LANGUAGE_STORAGE_KEY = "livsight.lang";

i18n
    .use(LanguageDetector)
    .use(resourcesToBackend((language, namespace) => import(`../locales/${language}/${namespace}.js`)))
    .use(initReactI18next)
    .init({
        resources: {
            fr: { site: frSite, accueil: frAccueil },
            en: { site: enSite, accueil: enAccueil },
        },
        partialBundledLanguages: true,
        supportedLngs: LANGUAGES,
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        fallbackLng: "fr",
        ns: ["site"],
        defaultNS: "site",
        detection: {
            order: ["localStorage"],
            lookupLocalStorage: LANGUAGE_STORAGE_KEY,
            caches: ["localStorage"],
        },
        interpolation: { escapeValue: false },
        react: { useSuspense: true },
    });

const syncDocumentLanguage = (language) => {
    if (typeof document !== "undefined") {
        document.documentElement.lang = String(language || "fr").startsWith("en") ? "en" : "fr";
    }
};

syncDocumentLanguage(i18n.language);
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
