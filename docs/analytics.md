# Mesure d'audience PostHog

Intégration de PostHog sur le site (issue LIV-21). Le code est dans
`src/services/analytics.js` et `src/components/AnalyticsTracker.jsx`.

## Configuration

| Variable | Rôle |
| -- | -- |
| `VITE_POSTHOG_KEY` | Clé du projet PostHog. Vide : aucune collecte. |
| `VITE_POSTHOG_HOST` | Hôte PostHog (défaut `https://eu.i.posthog.com`). |
| `VITE_APP_ENV` | `staging` (défaut) ou `production`, ajouté à chaque événement. |

Staging et production utilisent deux projets PostHog distincts, donc deux clés
différentes. Sur Vercel, définir les variables par environnement (Preview pour
staging, Production pour prod), puis redéployer : les `VITE_*` sont figées au build.

## Ce qui est suivi

- `$pageview` à chaque changement de route.
- `whatsapp_click` : clic sur un lien WhatsApp (`wa.me`).
- `app_download_click` : clic sur un lien Play Store, App Store ou `.apk`.

Chaque événement porte `app: "landing-page"` et `environment`. L'autocapture et
l'enregistrement de sessions sont désactivés.

## Vie privée et consentement

- Aucune requête vers PostHog, et le SDK n'est pas téléchargé, tant que le
  visiteur n'a pas accepté les cookies de mesure (`analyticsAllowed()`).
- Un refus ultérieur coupe la collecte et réinitialise l'identifiant.
- Cohérent avec la politique cookies (`legalCookies.js`) : mesure optionnelle.

## Vérifier la collecte

1. Définir `VITE_POSTHOG_KEY` (projet staging) et lancer `npm run dev`.
2. Accepter le bandeau cookies, naviguer, cliquer un bouton WhatsApp.
3. Dans PostHog, projet staging, Activity : filtrer `app = landing-page`.
