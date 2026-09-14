// Budget de poids, à lancer après `npm run build` : `npm run size`.
// Échoue si un fichier dépasse sa limite, pour qu'une régression se voie
// avant la mise en ligne plutôt que sur une connexion mobile à Yaoundé.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const dist = "dist";
const kb = (bytes) => Math.round(bytes / 102.4) / 10;

// Limites en ko, gzip pour le JS et le CSS, brut pour le reste.
const budgets = [
  { label: "JS de l'accueil (entrée)", test: /^assets\/index-.*\.js$/, gzip: true, max: 110 },
  /* Démo interactive de la marketplace : chargée seulement quand on ouvre /marketplace */
  { label: "Démo marketplace", test: /^assets\/MarketplaceDemo-.*\.js$/, gzip: true, max: 20 },
  { label: "JS d'une page", test: /^assets\/(?!index-|SuccessAnimation-|MarketplaceDemo-).*\.js$/, gzip: true, max: 15 },
  { label: "Animation de succès", test: /^assets\/SuccessAnimation-.*\.js$/, gzip: true, max: 150 },
  { label: "CSS", test: /\.css$/, gzip: true, max: 12 },
  /* Aperçu marketplace sur ordinateur, en haute définition (écrans Retina), chargé à la demande */
  { label: "Aperçu marketplace HD", test: /^assets\/accueil-web-.*\.webp$/, gzip: false, max: 180 },
  { label: "Image", test: /\.(png|jpe?g|webp|avif|svg|ico)$/, gzip: false, max: 120 },
];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

let failed = false;
for (const file of walk(dist)) {
  const rel = file.slice(dist.length + 1);
  const budget = budgets.find((b) => b.test.test(rel));
  if (!budget) continue;
  const raw = readFileSync(file);
  const size = kb(budget.gzip ? gzipSync(raw).length : raw.length);
  const over = size > budget.max;
  if (over) failed = true;
  if (over || /index-|SuccessAnimation-|MarketplaceDemo-|\.css$/.test(rel)) {
    console.log(`${over ? "✗" : "✓"} ${budget.label.padEnd(26)} ${String(size).padStart(7)} ko / ${budget.max} ko  ${rel}`);
  }
}

if (failed) {
  console.error("\nBudget dépassé.");
  process.exit(1);
}
console.log("\nBudget respecté.");
