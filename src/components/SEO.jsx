import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  canonical = "/",
  image = "/og-livsight.jpg",
}) {
  const siteName = "LivSight";
  const baseUrl = "https://livsight.com";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const pageUrl = `${baseUrl}${canonical}`;
  const imageUrl = `${baseUrl}${image}`;

  const defaultDesc =
    "Développez votre business en ligne avec LivSight : livraison à Yaoundé, stockage gratuit, suivi en temps réel et reversement en moins de 3 heures.";

  const metaDescription = description || defaultDesc;

  return (
    <Helmet>
      <html lang="fr" />

      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_CM" />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
