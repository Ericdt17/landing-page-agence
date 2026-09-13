# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint (max-warnings 0, zero tolerance)
npm run size      # Bundle and image size budgets (scripts/check-bundle-size.mjs)
```

## Architecture

React 18 + Vite + React Router + Tailwind CSS site for LivSight, deployed on Vercel (`vercel.json` holds redirects and the SPA rewrite).

- `src/App.jsx`: routes. The home page is bundled; every other page is lazy-loaded. Retired URLs redirect through `legacyRedirects` (keep `vercel.json` in sync).
- `src/pages/`: one file per route.
- `src/sections/`: larger blocks used by pages (`accueil/`, `application/`, `offre/`, `recruitment/`).
- `src/components/site/`: the site shell (`SiteLayout`, `SiteNav` with the FR · EN switch, `SiteFooter`, `InkHero`, `LegalPage`, `ScreenTour`, `ApiTeaser`).
- `src/constants/routes.js`: the only source for paths, external links, nav and footer structure (links carry `enabled` / `soon` flags).
- `src/services/`: API clients and data helpers (public landing API, recruitment API, tariffs, jobs).

## Text and translations

- All visible text lives in `src/locales/{fr,en}/<namespace>.js`, one namespace per page (plus `site` for shared text). Both languages must keep the same shape.
- Read text with `useCopy("<namespace>")` from `src/i18n/useCopy.js`; interpolate with `fill(text, { key })`. English falls back to French key by key.
- `site` and `accueil` are bundled; other namespaces load with their page.
- French is the default and the reference; legal pages in English show a note that the French version prevails.
- Option `value`s sent to APIs stay identical across languages; only labels are translated. Data from APIs (job titles, neighbourhoods) is not translated.

## Rules

- Theming: use the `ls-*` tokens (CSS variables in `src/index.css`, mapped in `tailwind.config.js`), which handle light and dark mode. No raw grays or hex colors in components.
- Assets: import via barrel files (`src/assets/images/index.js`, `src/assets/icons/index.js`).
- No third-party runtime calls that send visitor data abroad (law 2024/017): fonts, images and maps are self-hosted; maps are drawn, not real map tiles.
- Copy: no em dashes; do not publish features, prices or promises that are not confirmed.
- Contact email: contact@livsight.com.
