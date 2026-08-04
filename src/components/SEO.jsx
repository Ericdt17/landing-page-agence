import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, canonical }) {
  const siteName = "LivSight";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDesc =
    "LivSight est l'agence de livraison rapide de Yaoundé. Stockage gratuit, suivi en temps réel, reversement en 3h.";
  const baseUrl = "https://livsight.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name='description' content={description || defaultDesc} />
      <link rel='canonical' href={`${baseUrl}${canonical || "/"}`} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description || defaultDesc} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${baseUrl}${canonical || "/"}`} />
      <meta property='og:site_name' content={siteName} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description || defaultDesc} />
    </Helmet>
  );
}
