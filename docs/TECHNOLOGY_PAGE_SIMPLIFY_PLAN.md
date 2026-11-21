# LIV-122 — Website | Simplify Technology Page

Plan for [LIV-122](https://linear.app/livsight-sarl/issue/LIV-122/website-simplify-technology-page):
simplify LivSight’s public Technology page so merchants and partners understand the benefits of
our software without unnecessary engineering detail. Final website copy is prepared and approved
separately before implementation or publication.

**Branch:** `edjou/liv-122-website-simplify-technology-page`  
**Base for PRs:** `main`  
**Route (unchanged):** `/technologie`  
**Primary files:** `src/pages/TechnologiePage.jsx`, `src/locales/fr/technologie.js`, `src/locales/en/technologie.js`  
**Last updated:** 2026-11-21  
**Current phase:** 3 (Done — FR approved); next = Phase 4 English translation

---

## Agent rules (all agents — Cursor, Claude Code, other)

These rules apply to **every** agent working this plan (including Claude Code on Linear).

1. **Propose first → human OK** before any edit to this MD, the Linear issue (text or checkboxes),
   or application code / locales.
2. **Open questions anytime** — pause while unanswered; do not proceed past unresolved questions.
3. **Ask before reading the codebase** when audit/design/impl needs it (except inventory already
   captured in this plan’s Context snapshot, which was human-authorized).
4. **Phases follow Linear checkboxes** — use the [Linear checkbox map](#linear-checkbox-map);
   do not invent out-of-scope work without asking. Propose dropping/editing unnecessary
   checkboxes; apply only after human OK; keep the map in sync.
5. **Linear may be updated by Claude Code too** — re-fetch the issue before flipping boxes;
   only complete still-open items for the finished phase; do not fight other agents’ updates.
6. Honor the [Hard gate](#hard-gate--linear--github-rules-claude-code--any-agent) and
   [Agent handoff protocol](#agent-handoff-protocol-every-phase) below.
7. **Do not publish or implement unapproved copy.** French draft → explicit FR approval → English
   → then implementation of approved content only.
8. **Do not write application code** without the human’s explicit permission for that phase.

---

## Hard gate — Linear ↔ GitHub rules (Claude Code / any agent)

**Do not start coding, continue an implementation phase, or create any commit on this issue unless
the same Linear linking rules as Cursor’s user rule “Linear ↔ GitHub” are configured and will be
applied.** Commits are how the branch links to Linear — missing those rules means work must not
begin, not only that PRs are blocked.

Required rules (must all be true):

| Rule | Requirement |
|---|---|
| Issue signal | Work is explicitly for **LIV-122** (branch, user, or Linear URL) |
| Branch name | Use Linear’s git branch name: `edjou/liv-122-website-simplify-technology-page` (contains `liv-122`) |
| **Commits (mandatory while coding)** | Conventional Commits, English, imperative; every commit on this work **must** link LIV-122 via subject `[LIV-122]` and/or body/trailer `Refs LIV-122` (use `Fixes LIV-122` only when the human says the issue is finished) |
| PR title | Conventional Commit + `[LIV-122]` (when a PR is requested) |
| PR body | Near the top: `Fixes LIV-122` (finishes) or `Refs LIV-122` (partial / related) |
| No invented links | Do not invent other Linear IDs |

If these rules are **not** configured in the agent/session, the agent must:

1. **Stop immediately** — do not write or edit application code
2. Tell the human that Linear ↔ GitHub linking is missing or incomplete
3. Refuse to code, commit, update this plan’s phase status as Done, or open a PR until the rules match

Paste or confirm this block is present **before starting to code** (Phase 5):

```text
Linear ↔ GitHub (required before coding): branch includes liv-122; every commit links LIV-122
(Refs/Fixes); PR title has [LIV-122]; PR body has Fixes/Refs LIV-122; do not invent Linear IDs.
```

---

## Agent handoff protocol (every phase)

**Before writing any code for a phase:** re-check the [Hard gate](#hard-gate--linear--github-rules-claude-code--any-agent) and [Agent rules](#agent-rules-all-agents--cursor-claude-code-other). If Linear commit-linking rules are not configured, stop — do not code. Ask before codebase reads; propose edits and wait for human OK.

When an agent (Cursor, Claude Code, or other) **finishes a phase**:

1. **Propose** MD updates (phase **Done**, **Current phase**, **Exit notes**); wait for human OK,
   then apply.
2. Run the phase’s verification (listed under that phase).
3. **Re-fetch** LIV-122 from Linear. **Propose** which still-open checkboxes this phase completed
   per [Linear checkbox map](#linear-checkbox-map); wait for human OK; then flip only those
   `- [ ]` → `- [x]` (preserve all other description text; do not invent boxes). Multi-phase
   items only when this phase is the last required one. If Linear update fails, record that in
   Exit notes and continue.
4. **Commit** all approved phase work **including this markdown update**, using Conventional
   Commits English, scope `technologie` when appropriate, and **always** link LIV-122 in the
   commit (see Hard gate).
5. Do **not** start the next phase in the same commit unless the human explicitly asks.
6. Do **not** open a PR unless the human explicitly asks (then base `main`, title/body per
   Linear rules).

Suggested commit shape when closing a phase:

```text
feat(technologie): <phase summary> [LIV-122]

Refs LIV-122
```

Use `docs:` if the phase only updated planning/docs. Never omit the LIV-122 link on commits for
this branch.

**Code permission:** Do not write or change production code unless (a) Linear ↔ GitHub rules
are configured for commits as above, and (b) the human explicitly allows implementation for
the current phase after a proposed plan of edits. Docs-only phases still require human OK
before editing this file, and LIV-122-linked commits when committing.

---

## Phase status

| Phase | Name | Status | Owner / agent | Completed |
|---|---|---|---|---|
| 0 | Preconditions, allowlist & Linear gate | Done (branch + plan) | Cursor | 2026-11-21 |
| 1 | Review existing page & lock simplified structure | Done (superseded by adopted FR outline) | Cursor | 2026-11-21 |
| 2 | French content draft (not published) | Done (draft in plan; not live) | Cursor | 2026-11-21 |
| 3 | Explicit French content approval (hard gate) | Done (human approved Appendix A) | Cursor | 2026-11-21 |
| 4 | English translation (after FR approval) | Not started | — | — |
| 5 | Implement approved FR+EN; desktop/mobile review | Not started | — | — |

Statuses: `Not started` · `In progress` · `Blocked` · `Done`

---

## Linear checkbox map

Source: LIV-122 description tasks. Phases must stay aligned with these boxes.

| Linear checkbox | Satisfied when phase(s) Done |
|---|---|
| Review the existing Technology page and its intended audience | **1** (started in 0 inventory) |
| Remove overly detailed algorithms, infrastructure terminology, and unsupported technical benchmarks | **2** (draft) + **5** (live; last = **5**) |
| Explain the connected merchant, agent, driver, and operations ecosystem in accessible language | **1** + **2** (commerçants / équipes-agents / livreurs) + **5** (last = **5**) |
| Highlight verified capabilities: order management, delivery tracking, route organization, and WhatsApp order intake | **1** + **2** (section 02 + terrain) + **5** (last = **5**) |
| Identify suitable real application screenshots or visuals | **0** (inventory) + **1** (slots locked); assets may stay pending |
| Clearly distinguish available functionality from upcoming features | **0** (allowlist) + **1** + **2** + **5** (last = **5**) |
| Preserve website visual identity and responsive layout | **5** |
| Draft page copy for review before implementation or publication | **2** (FR) + **4** (EN); publication only after **3** then **5** |

Acceptance criteria map to Phase **5** completion after Phase **3** (and **4**) gates, plus human
desktop/mobile review.

---

## Context snapshot (2026-11-21)

### Repo map

| Piece | Location | Notes |
|---|---|---|
| Route | `src/constants/routes.js` → `technologie: "/technologie"` | Nav + footer enabled; **do not change** without compelling reason |
| Page | `src/pages/TechnologiePage.jsx` | Lazy-loaded in `src/App.jsx` |
| FR copy | `src/locales/fr/technologie.js` | ~400 words today; engineering / benchmark heavy |
| EN copy | `src/locales/en/technologie.js` | Same shape as FR |
| Shell | `SiteLayout`, `SEO`, `ApiTeaser` | Design system / bilingual via `useCopy` |
| Company context | `docs/company-context.md` | Merchants primary; benefits before architecture |
| Design system | `docs/design-system.md` | `ls-*` tokens; `ls-soon` for upcoming |

### Current page composition (to simplify)

1. Hero + **tech stack pills** (typed backend, internal API, jobs, etc.)
2. Three long “problems” (routes / WhatsApp / offline) with algorithm/benchmark detail
3. Decorative SVG / mock figures (not product screenshots)
4. Aside: `ApiTeaser` (API bientôt) + recruitment card

### Audience priority (human-confirmed)

1. Merchants  
2. Business partners  
3. Technical audiences  

Communicate technological differentiation through **customer benefits** (reliability, visibility,
coordination, efficiency), not engineering implementation detail. Show that LivSight develops its
own software without stack theater or infra terminology.

### Verified capabilities to highlight (per adopted FR draft — operational only)

From section **02 — Des solutions conçues pour votre activité** (+ terrain section 03):

- Centralized order / delivery-request management (dates, fees by zone)  
- Delivery tracking and driver position during missions + notifications  
- Stock visibility and parcel-related stock operations  
- Reports and financial follow-up (encaissements, statuses, fees)  
- In-app assistance  
- WhatsApp order intake with essential-field extraction, then team verification  
- Field ops: organize by zone, manage reports/reschedules, keep info up to date  

Ecosystem (section 01): commerçants · équipes (agents) · livreurs. Ops dashboard not a
separate public block; agent tooling covers coordination.

### Assets inventory

| Asset | Path / barrel | Suitability for Technology page |
|---|---|---|
| Merchant screens | `src/assets/images/app/ecran-*.webp` (accueil, courses, stock, rapports, inbox, tarifs) | Prefer these for “available today”; already used on Application page |
| App mockup / warehouse | `app-accueil-mockup.webp`, `hero-entrepot.webp` | Optional; not a substitute for capability demos |
| Marketplace demo products | `src/assets/images/marketplace/demo/*` | Not for inventing tech UI; marketplace is upcoming |
| Ops / driver / agent screens | — | **Missing** — leave visual slots pending; do not invent UIs or use unapproved shots with customer data |

### Coming soon — allowlist (locked in Phase 1)

Both labeled **BIENTÔT** / planned (not available today). No launch dates. No extra promises.

| Product | On Technology page | Notes |
|---|---|---|
| **LivSight Marketplace** | **Yes** | Consumers ↔ merchants; discovery & ordering; logistics integration; merchant sales opportunities. Link to existing `/marketplace` soon page as appropriate. |
| **LivSight Delivery API** | **Yes** | E-commerce / business-software integrations; automated delivery requests; logistics integration. Existing `/api-livraison` + teaser patterns. |
| Product Trends & Discovery | **No** | Not approved for this page. |

Do **not** introduce additional upcoming features or availability promises without confirmation.

### Copy workflow (human-confirmed)

- French first; English after FR approval  
- Adopted FR draft is ~**925** words (longer than the earlier 400–600 guidance; human-accepted)  
- No backend changes  
- Preserve design system, branding, nav, responsive behavior, bilingual support  

### Out of scope

- Backend / Product Trends product work  
- New route (unless human later approves)  
- Unapproved screenshots or fabricated application interfaces  
- Publishing unapproved copy  

---

## Locked page structure (adopted FR outline — 2026-11-21)

**Supersedes** the earlier six-section outline (Delivery Workflow dropped; ops dashboard not a
separate block). Merchants → partners → technical. Route `/technologie` unchanged. Full French
draft recorded in [Appendix A](#appendix-a--french-draft-phase-2-not-published) and **approved
in Phase 3**. English = Phase 4. **No site implementation until Phase 5 permission.**

### Hero — Notre technologie

- Kicker: NOTRE TECHNOLOGIE  
- Headline: Vos livraisons, sous contrôle. Votre activité, en pleine visibilité.  
- Own-tech lede; control / visibility / connected platform.  
- CTAs: Commencer à livrer · Découvrir nos solutions  
- **No** stack pills or infrastructure terminology.

### 01 — Un écosystème connecté

Three audiences (what each enables):

- **Pour les commerçants** — orders, scheduling, tariffs, tracking, stock, encaissements, reports, notifications, assistance  
- **Pour nos équipes** — agents centralize orders, rounds, drivers; stock, tracking, assistance, cash, ops reports  
- **Pour les livreurs** — missions, itineraries, status updates, position sharing, agent coordination  

Prefer real screenshots; agent / driver visuals **pending** if missing (do not invent UIs).

### 02 — Des solutions conçues pour votre activité

Capability blocks (benefits, not implementation):

- Toutes vos commandes au même endroit  
- Suivez vos colis à chaque étape  
- Gérez vos stocks avec plus de visibilité  
- Rapports et suivi financier  
- Une assistance directement intégrée  
- WhatsApp, connecté à nos opérations  

### 03 — Une technologie développée pour le terrain

Urban delivery realities; zone organization, reports/reschedules, shared ops between agents and
drivers; merchants keep follow-up info.

### 04 — Prochainement sur LivSight

Both labeled **BIENTÔT**. Planned only. No launch dates.

- **LivSight Marketplace** — CTA: Marketplace — Bientôt disponible → `/marketplace`  
- **LivSight Delivery API** — CTA: API — En développement → `/api-livraison`  

### 05 — Commencez avec LivSight

Merchant CTAs:

- Créer mon compte  
- Contacter LivSight sur WhatsApp  
- Découvrir nos offres et tarifs  

**No recruitment aside** (hiring on `/recrutement`). Phase 5 must map CTAs to real routes
(confirm “Créer mon compte” vs WhatsApp/onboarding).

### Implementation constraints (carry into Phases 3–5)

- French first; English after approval.  
- Preserve branding, `ls-*` tokens, responsive patterns, bilingual `useCopy("technologie")`.  
- Prioritize real product screenshots; avoid excessive technical explanations.  
- No backend modifications.  
- No site implementation until content approval (Phase 3) and Phase 5 go-ahead.  
- Drop current stack pills, algorithm/benchmark essays, and recruitment card in Phase 5.

### Phase 5 structural note

`TechnologiePage.jsx` remaps to Hero + 01–05; locales reshape to match Appendix A (after
approval). Reuse `SiteLayout`, `ls-soon`, existing marketplace & API routes.

---

## Phase 0 — Preconditions, allowlist & Linear gate

**Status:** Done (branch + plan)  
**Goal:** Branch, plan, inventory; no site copy changes.

### Scope

- Create branch from `origin/main` using Linear’s `gitBranchName`.
- Write this plan (agent rules, hard gate, checkbox map, phases, structure proposal).
- Record route, assets, and existing soon markers.
- Coming-soon allowlist finalized in Phase 1 (Marketplace + Delivery API only).

### Out of scope

- FR/EN drafts, locale edits, page implementation.

### Verification

- Branch tip matches agreed base (`origin/main` at creation).
- Plan file present under `docs/`.

### Exit notes

- Branch `edjou/liv-122-website-simplify-technology-page` created from `origin/main` (tip
  `9c619cb` at creation).
- No `staging` branch in this repo; PR base is **`main`**.
- No application code in Phase 0.

### Commit (when human asks to commit Phase 0)

```text
docs(technologie): add LIV-122 simplify technology page plan

Refs LIV-122
```

---

## Phase 1 — Review existing page & lock simplified structure

**Status:** Done (2026-11-21; structure later superseded by adopted FR outline in Phase 2)  
**Goal:** Human-approved structure for the redesign (content outline only; no final copy live).

### Scope

- Confirm audience reading (merchants → partners → technical).
- Lock section order vs current hero/stack/problems/aside.
- Visual approach: real product screenshots; merchant `ecran-*` reusable; agent / driver pending.
- Coming-soon allowlist: Marketplace + Delivery API only (BIENTÔT); exclude Product Trends.
- CTA = merchant paths; no recruitment aside.

### Exit notes

- Initial six-section lock recorded, then **replaced** when human adopted the supplied FR outline
  (Hero + 01–05; no Delivery Workflow). Canonical structure:
  [Locked page structure](#locked-page-structure-adopted-fr-outline--2026-11-21).

### Commit

```text
docs(technologie): lock simplified technology page structure [LIV-122]

Refs LIV-122
```

---

## Phase 2 — French content draft (not published)

**Status:** Done (2026-11-21)  
**Goal:** FR draft for review only, matching the **adopted** Hero + 01–05 outline.

### Scope

- Accept human-supplied full French copy; store in plan Appendix A — **not** in live locales.
- Adopt this outline as the locked structure (supersedes Phase 1 six-section outline).
- Marketplace + Delivery API under 04, labeled BIENTÔT.
- Stay consistent with `docs/company-context.md` (no invented stats, prices, or promises).

### Out of scope

- English; implementation; publishing.

### Verification

- Draft recorded in Appendix A (~925 words; human-accepted length).
- Structure adoption confirmed by human (“Adopt this one”).

### Exit notes

- FR draft is ready for **Phase 3** explicit approval before EN or implementation.
- Phase 5 CTA mapping still open: “Créer mon compte” vs existing onboarding/WhatsApp routes.

### Commit

```text
docs(technologie): record adopted FR technology page draft [LIV-122]

Refs LIV-122
```

---

## Phase 3 — Explicit French content approval (hard gate)

**Status:** Done (2026-11-21)  
**Goal:** Human explicitly approves French copy before EN or implementation.

### Scope

- Capture approval (who / date) in Exit notes.
- No EN translation and no locale/page edits until this phase is **Done**.

### Verification

- Written human approval of the French draft recorded in this plan.

### Exit notes

- Human approved Appendix A French copy (“i approve”, 2026-11-21).
- Approved text = [Appendix A](#appendix-a--french-draft-phase-2-not-published).
- Still not in live locales; Phase 4 = EN; Phase 5 = implement after EN + explicit code permission.

### Commit

```text
docs(technologie): record French copy approval for LIV-122

Refs LIV-122
```

---

## Phase 4 — English translation (after FR approval)

**Status:** Not started  
**Goal:** EN draft with the **same shape** as approved FR; English falls back rules still apply.

### Scope

- Translate approved FR into `en` draft (same keys/structure).
- No publication until Phase 5.

### Verification

- Human review of EN (or explicit permission to proceed to Phase 5 with EN as proposed).

### Commit

```text
docs(technologie): draft English technology page copy [LIV-122]

Refs LIV-122
```

---

## Phase 5 — Implement approved FR+EN; desktop/mobile review

**Status:** Not started  
**Goal:** Ship approved content on `/technologie` without breaking design system or responsiveness.

### Scope

- Update `src/locales/fr/technologie.js` and `src/locales/en/technologie.js` with **approved** copy only.
- Adjust `src/pages/TechnologiePage.jsx` only as needed for the locked structure (reuse
  `SiteLayout`, tokens, patterns; prefer reuse of existing components/assets).
- Wire approved visuals; leave pending slots empty or without invented UI.
- Coming-soon treatment via existing `ls-soon` / teaser patterns for allowlisted items only.
- Desktop and mobile layout review against acceptance criteria.
- SEO strings from approved copy.

### Out of scope

- Backend; new frameworks; route rename without compelling reason; unapproved features.

### Verification

- `npm run lint` (and build if human requests).
- Manual desktop + mobile check of `/technologie`.
- No leftover engineering benchmarks / stack theater unless human re-approved.
- FR and EN shapes match.

### Commit

```text
feat(technologie): simplify technology page for merchants [LIV-122]

Refs LIV-122
```

(Use `Fixes LIV-122` only when the human says the issue is finished.)

---

## Open questions

1. **Phase 5 CTA:** Where does “Créer mon compte” go (existing route vs WhatsApp / Application)?

Resolved (2026-11-21): coming-soon = Marketplace + Delivery API only; real screenshots preferred;
no recruitment aside; **adopted FR outline** (Hero + 01–05) is canonical; **Appendix A FR
approved** (Phase 3).

---

## Appendix A — French draft (Phase 2, not published)

Source: human-supplied copy, 2026-11-21. Do **not** put into `src/locales` until Phase 3 approval
and Phase 5 implementation permission.

### Hero

**Kicker:** NOTRE TECHNOLOGIE  

**Title:** Vos livraisons, sous contrôle. Votre activité, en pleine visibilité.  

**Lede:** Gérez vos commandes, planifiez vos livraisons, suivez vos colis et gardez un œil sur vos performances depuis une plateforme connectée.  

**Own-tech:** Chez LivSight, nous développons nos propres technologies pour simplifier votre logistique et vous donner les informations nécessaires pour mieux piloter votre activité.  

**CTAs:** Commencer à livrer · Découvrir nos solutions  

### 01 — Un écosystème connecté

**Title:** Une plateforme. Des équipes connectées. Des opérations maîtrisées.  

**Intro:** Derrière chaque livraison, plusieurs acteurs interviennent. Nos applications les réunissent dans un même écosystème pour assurer la circulation des informations, faciliter la coordination et améliorer le suivi des opérations.  

**Pour les commerçants** — Votre commerce, à portée de main.  
Créez vos commandes, programmez vos livraisons, consultez les tarifs et suivez vos colis depuis votre application. Gardez une visibilité sur vos stocks, vos encaissements et vos rapports d’activité. Recevez des notifications importantes et échangez directement avec notre équipe d’assistance.  
*Vos commandes, vos livraisons et vos performances. Un seul espace.*  

**Pour nos équipes** — Une organisation efficace, du début à la fin.  
Nos agents centralisent les commandes, organisent les tournées et coordonnent les livreurs depuis une application dédiée. Gestion des stocks, suivi des colis, assistance, encaissements et rapports opérationnels : les informations essentielles sont réunies pour faciliter le travail quotidien.  
*Des équipes mieux coordonnées pour des livraisons mieux organisées.*  

**Pour les livreurs** — Chaque mission, clairement organisée.  
Nos livreurs accèdent à leurs missions, consultent leurs itinéraires et actualisent les statuts des livraisons depuis leur application. Le partage de leur position pendant les missions et les échanges avec nos agents facilitent la coordination sur le terrain.  
*Les bonnes informations, au bon moment.*  

### 02 — Des solutions conçues pour votre activité

**Title:** Moins de complications. Plus de contrôle.  

**Toutes vos commandes au même endroit** — Créez et gérez vos demandes de livraison depuis une seule application. Choisissez vos dates de livraison et consultez les frais applicables selon le service et la zone de destination. *Une gestion plus simple, même lorsque votre activité grandit.*  

**Suivez vos colis à chaque étape** — Consultez les statuts de vos livraisons et les dernières positions disponibles des livreurs pendant leurs missions. Recevez des notifications lors des événements importants, sans avoir à multiplier les appels. *Vous savez où en sont vos livraisons.*  

**Gérez vos stocks avec plus de visibilité** — Retrouvez les informations de vos produits en stock et suivez les opérations associées à vos colis. Nos outils facilitent la gestion des marchandises entre leur réception, leur stockage et leur distribution. *Vos produits mieux suivis, du stockage à la livraison.*  

**Rapports et suivi financier** — Vos chiffres vous aident à prendre de meilleures décisions. LivSight centralise les informations de vos livraisons pour vous aider à comprendre votre activité. Consultez vos rapports, suivez vos encaissements et retrouvez les informations nécessaires au contrôle de vos opérations. Visualisez les livraisons effectuées, en attente ou échouées, ainsi que les frais associés à votre activité logistique. Ces données vous permettent de suivre vos performances, de mieux comprendre vos opérations et d’identifier les points qui nécessitent votre attention. *Vos commandes. Vos encaissements. Vos performances. Une vision claire de votre activité.*  

**Une assistance directement intégrée** — Une question sur une commande ? Une livraison nécessite une intervention ? Échangez avec notre équipe depuis votre application grâce à un système d’assistance intégré. *Un accompagnement accessible quand vous en avez besoin.*  

**WhatsApp, connecté à nos opérations** — Vous recevez vos commandes sur WhatsApp ? Nos outils facilitent leur traitement en extrayant les informations essentielles des messages transmis, avant vérification par nos équipes. *Vos habitudes de travail, connectées à notre organisation logistique.*  

### 03 — Une technologie développée pour le terrain

**Title:** Pensée pour les réalités de la livraison urbaine.  

Adresses imprécises, changements de programme, destinataires absents ou contraintes de déplacement : chaque journée de livraison apporte ses défis. Nos applications permettent aux équipes d’organiser les livraisons par zone, de gérer les reports, de suivre les interventions et de maintenir les informations à jour. Les agents et les livreurs restent connectés aux mêmes opérations, tandis que les commerçants disposent des informations nécessaires au suivi de leurs commandes.  

*Une technologie conçue pour accompagner le travail sur le terrain.*  

### 04 — Prochainement sur LivSight

**Title:** Le commerce et la logistique, encore plus connectés.  

Nous développons de nouvelles solutions pour faciliter les ventes, simplifier les échanges entre entreprises et rapprocher les commerçants de notre réseau logistique.  

**LivSight Marketplace — BIENTÔT** — Une nouvelle façon de vendre et d’acheter. Nous préparons une marketplace qui réunira commerçants, consommateurs et services de livraison dans un même écosystème. Les commerçants pourront présenter leurs produits, gérer leurs commandes et accéder à un nouveau canal de vente. Les consommateurs pourront découvrir des produits, passer commande et suivre leurs achats. En s’appuyant sur notre infrastructure logistique et nos applications connectées, cette marketplace aura pour objectif de simplifier le parcours d’achat, de la découverte d’un produit jusqu’à sa livraison. *Vos produits. De nouveaux clients. Une logistique connectée.* CTA: Marketplace — Bientôt disponible  

**LivSight Delivery API — BIENTÔT** — Connectez votre activité à notre réseau logistique. Nous développons une API qui permettra aux entreprises de connecter leurs sites e-commerce et leurs logiciels professionnels à LivSight. Elle facilitera la transmission des demandes de livraison et l’échange d’informations entre leurs systèmes et notre plateforme. *Vos outils et notre logistique, connectés.* CTA: API — En développement  

### 05 — Commencez avec LivSight

**Title:** Concentrez-vous sur vos ventes. Gardez le contrôle sur vos livraisons.  

LivSight associe une équipe de terrain à des outils technologiques conçus pour simplifier votre logistique et vous offrir une meilleure visibilité sur votre activité. Que vous expédiiez quelques colis ou gériez des commandes chaque jour, nous vous accompagnons dans l’organisation et le suivi de vos livraisons.  

**CTAs:** Créer mon compte · Contacter LivSight sur WhatsApp · Découvrir nos offres et tarifs  

---

## Suggested Conventional Commit messages (summary)

| Phase | Message |
|---|---|
| 0 | `docs(technologie): add LIV-122 simplify technology page plan` |
| 1 | `docs(technologie): lock simplified technology page structure [LIV-122]` |
| 2 | `docs(technologie): record adopted FR technology page draft [LIV-122]` |
| 3 | `docs(technologie): record French copy approval for LIV-122` |
| 4 | `docs(technologie): draft English technology page copy [LIV-122]` |
| 5 | `feat(technologie): simplify technology page for merchants [LIV-122]` |

Always include `Refs LIV-122` in the body (or `Fixes LIV-122` when finishing).
