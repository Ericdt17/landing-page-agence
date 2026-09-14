import { Helmet } from "react-helmet-async";
import { useCopy, useLanguage } from "../i18n/useCopy";

/**
 * Balises de la page. La langue (`<html lang>`, `og:locale`) et la description
 * par défaut suivent la langue choisie par le visiteur. Les adresses restent
 * les mêmes dans les deux langues.
 */
export default function SEO({
  title,
  description,
  canonical = "/",
  image = "/og-livsight.jpg",
  noindex = false,
}) {
  const { seo } = useCopy("site");
  const { language } = useLanguage();
  const baseUrl = "https://www.livsight.com";
  const fullTitle = title ? `${title} | ${seo.siteName}` : seo.siteName;
  const pageUrl = `${baseUrl}${canonical}`;
  const imageUrl = `${baseUrl}${image}`;
  const metaDescription = description || seo.defaultDescription;
  const alternateLocale = language === "en" ? "fr_CM" : "en_CM";

  return (
    <Helmet>
      <html lang={language} />

      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
