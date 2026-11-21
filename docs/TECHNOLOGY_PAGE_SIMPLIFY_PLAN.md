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
**Current phase:** 1 (Done — six-section structure locked); next = Phase 2 when human provides FR copy

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
| 1 | Review existing page & lock simplified structure | Done (six-section lock) | Cursor | 2026-11-21 |
| 2 | French content draft (not published) | Not started | — | — |
| 3 | Explicit French content approval (hard gate) | Not started | — | — |
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
| Explain the connected merchant, agent, driver, and operations ecosystem in accessible language | **1** (structure) + **2** + **5** (last = **5**) |
| Highlight verified capabilities: order management, delivery tracking, route organization, and WhatsApp order intake | **1** + **2** + **5** (last = **5**) |
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

### Verified capabilities to highlight (Technology in Action — operational only)

- WhatsApp order intake and information extraction  
- Centralized order management  
- Route organization  
- Delivery tracking and status updates  
- Operational visibility  

Only describe features confirmed to be operational. Ecosystem apps: merchant, agent, driver,
operations dashboard.

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
- Target ~**400–600** French words  
- No backend changes  
- Preserve design system, branding, nav, responsive behavior, bilingual support  

### Out of scope

- Backend / Product Trends product work  
- New route (unless human later approves)  
- Unapproved screenshots or fabricated application interfaces  
- Publishing unapproved copy  

---

## Locked page structure (Phase 1 — human-approved 2026-11-21)

Six sections. Merchants → partners → technical. Benefits before implementation. Route
`/technologie` unchanged. French copy first (human will supply full copy); English after FR
approval; **no implementation until structure + content are approved** (Phases 3 then 5).

### 1. Hero — La technologie au cœur de chaque livraison

- Strong headline: technology-driven logistics company.
- Short intro: LivSight develops its own software.
- Emphasize reliability, visibility, coordination, and efficiency.
- **No** technology-stack pills or infrastructure terminology.

### 2. Connected Ecosystem — Une plateforme, des opérations connectées

Four connected components (what each enables):

- Merchant application  
- Agent application  
- Driver application  
- Operations dashboard  

Use a visual representation of the ecosystem where appropriate. Prefer real product screenshots;
leave agent / driver / ops slots **pending** if approved shots are missing (do not invent UIs).

### 3. Delivery Workflow — De la commande à la livraison

Four short, accessible stages:

1. Order reception  
2. Order verification and organization  
3. Driver assignment and delivery  
4. Delivery tracking and status updates  

### 4. Technology in Action — Conçue pour les réalités du terrain

Existing, verified capabilities only (practical benefits, not implementation):

- WhatsApp order intake and information extraction  
- Centralized order management  
- Route organization  
- Delivery tracking and status updates  
- Operational visibility  

Prioritize real product screenshots (e.g. existing merchant `ecran-*`).

### 5. Upcoming Innovations — Nos prochaines innovations

Two products, both clearly labeled **BIENTÔT**. Planned capabilities, not current services.
No launch dates; no unapproved functionality.

**LivSight Marketplace**

- Future marketplace connecting consumers with merchants  
- Product discovery and online ordering  
- Integration with LivSight’s logistics ecosystem  
- New sales opportunities for merchants  

**LivSight Delivery API**

- Future integration for e-commerce sites and business software  
- Automated delivery request creation  
- Integration with LivSight’s logistics infrastructure  

### 6. CTA — Une logistique connectée à votre activité

Clear merchant paths:

- Access the merchant application  
- Contact LivSight via WhatsApp  
- Explore delivery services and pricing  

**No recruitment aside** on this page (hiring stays on `/recrutement`).

### Implementation constraints (carry into Phases 2–5)

- French copy first; English after approval.  
- Preserve branding, `ls-*` tokens, responsive patterns, bilingual `useCopy("technologie")`.  
- Prioritize real product screenshots; avoid excessive technical explanations.  
- No backend modifications.  
- No site implementation until content and structure receive approval.  
- Drop current stack pills, algorithm/benchmark “problems” essays, and recruitment card in Phase 5.

### Phase 5 structural note

`TechnologiePage.jsx` remaps to these six sections; locales reshape to match. Reuse `SiteLayout`,
`ls-soon` / existing API & marketplace routes for section 5. Exact strings = human-supplied FR
(Phase 2+) then approved EN.

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

**Status:** Done (six-section lock, 2026-11-21)  
**Goal:** Human-approved structure for the redesign (content outline only; no final copy live).

### Scope

- Confirm audience reading (merchants → partners → technical).
- Lock six-section order and purpose vs current hero/stack/problems/aside.
- Decide visual approach: prioritize real product screenshots; merchant `ecran-*` reusable;
  agent / driver / ops shots pending if missing.
- Lock coming-soon allowlist: Marketplace + Delivery API only (BIENTÔT); exclude Product Trends.
- CTA = merchant paths only; no recruitment aside.
- Note Phase 5 remapping of `TechnologiePage.jsx` (no code until Phase 5 permission).

### Out of scope

- Writing final FR/EN strings into locales; shipping UI changes. Human will supply full FR copy
  for Phase 2.

### Verification

- Human explicitly approved the locked six-section structure (message 2026-11-21).

### Exit notes

- Structure locked: Hero → Connected Ecosystem → Delivery Workflow → Technology in Action →
  Upcoming Innovations → CTA (see [Locked page structure](#locked-page-structure-phase-1--human-approved-2026-11-21)).
- Allowlist: Marketplace + Delivery API; Product Trends out.
- Recruitment aside removed from Technology page intent.
- Ready for Phase 2 when human provides full French copy (draft for review, not published).

### Commit

```text
docs(technologie): lock simplified technology page structure [LIV-122]

Refs LIV-122
```

---

## Phase 2 — French content draft (not published)

**Status:** Not started  
**Goal:** FR draft for review only (~400–600 words), matching the locked six-section structure.

### Scope

- Accept human-supplied full French copy (preferred) and/or assist with drafting; review only —
  **not** into live locales until Phase 5.
- Cover all six locked sections (Hero → … → CTA); remove algorithm/infra/benchmark language.
- Marketplace + Delivery API only under Upcoming Innovations, labeled BIENTÔT.
- Stay consistent with `docs/company-context.md` (no invented stats, prices, or promises).

### Out of scope

- English; implementation; publishing.

### Verification

- Word-count band ~400–600 FR; human can review without deploying.

### Commit

Only if a draft artifact is intentionally committed (prefer review in chat/docs until Phase 5):

```text
docs(technologie): draft French technology page copy [LIV-122]

Refs LIV-122
```

---

## Phase 3 — Explicit French content approval (hard gate)

**Status:** Not started  
**Goal:** Human explicitly approves French copy before EN or implementation.

### Scope

- Capture approval (who / date) in Exit notes.
- No EN translation and no locale/page edits until this phase is **Done**.

### Verification

- Written human approval of the French draft recorded in this plan.

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

None for Phase 1. Phase 2 waits on **full French copy** from the human.

Resolved (2026-11-21): coming-soon = Marketplace + Delivery API only; prioritize real screenshots
(pending slots OK); no recruitment aside on Technology.

---

## Suggested Conventional Commit messages (summary)

| Phase | Message |
|---|---|
| 0 | `docs(technologie): add LIV-122 simplify technology page plan` |
| 1 | `docs(technologie): lock simplified technology page structure [LIV-122]` |
| 2 | `docs(technologie): draft French technology page copy [LIV-122]` |
| 3 | `docs(technologie): record French copy approval for LIV-122` |
| 4 | `docs(technologie): draft English technology page copy [LIV-122]` |
| 5 | `feat(technologie): simplify technology page for merchants [LIV-122]` |

Always include `Refs LIV-122` in the body (or `Fixes LIV-122` when finishing).
