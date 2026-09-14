import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const isObject = (value) => value && typeof value === "object" && !Array.isArray(value);

/* Anglais par-dessus le français : une clé oubliée en anglais reste lisible */
const mergeDeep = (base, override) => {
    if (!isObject(base) || !isObject(override)) return override ?? base;
    const result = { ...base };
    for (const [key, value] of Object.entries(override)) {
        result[key] = isObject(value) && isObject(base[key]) ? mergeDeep(base[key], value) : value;
    }
    return result;
};

export const currentLanguage = (i18n) =>
    String(i18n.resolvedLanguage || i18n.language || "fr").startsWith("en") ? "en" : "fr";

/**
 * Les textes d'une page dans la langue du visiteur, sous forme d'objet :
 * `const copy = useCopy("tarifs")` puis `copy.hero.title`.
 * Suspend le rendu le temps de charger le fichier de la page.
 */
export const useCopy = (namespace = "site") => {
    const { i18n } = useTranslation(namespace);
    const language = currentLanguage(i18n);
    return useMemo(() => {
        const fr = i18n.getResourceBundle("fr", namespace) ?? {};
        if (language === "fr") return fr;
        return mergeDeep(fr, i18n.getResourceBundle("en", namespace) ?? {});
    }, [i18n, namespace, language]);
};

export const useLanguage = () => {
    const { i18n } = useTranslation();
    return { language: currentLanguage(i18n), setLanguage: (language) => i18n.changeLanguage(language) };
};

/** Remplace les {{variables}} d'un texte. */
export const fill = (text, values = {}) =>
    String(text ?? "").replace(/\{\{(\w+)\}\}/g, (_, key) => (values[key] ?? "").toString());
