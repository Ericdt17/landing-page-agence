# LivSight design system

Implementation-ready rules for the LivSight landing site. Grounded in the existing `ls-*` tokens (`src/index.css`, mapped in `tailwind.config.js`). Light theme only. Every rule marked **must** is non-negotiable; **should** is the default unless a documented exception exists.

Status: draft for review. Nothing here changes code by itself; application happens page by page after approval.

---

## 1. Context and goals

This site is the official corporate and commercial website of LivSight SARL, a technology-driven logistics and delivery company headquartered in Yaoundé, Cameroon (slogan: "Plus de livraisons. Moins de stress."). LivSight is a logistics operator first; its proprietary software (merchant app, delivery app, operations dashboard, WhatsApp integration) is the competitive advantage, not the product being sold. Full business context lives in `docs/company-context.md`, which governs all content and design decisions.

Design consequences:

- The primary conversion is merchant acquisition: every page **must** lead a merchant (e-commerce, Instagram/Facebook/TikTok/WhatsApp sellers, SMBs) toward contacting LivSight or starting onboarding. Recruitment of delivery partners is secondary and must never visually compete with the merchant CTA.
- Visuals and copy **must** communicate a professional logistics operator (reliability, operational efficiency, trust), never a SaaS vendor or a simple marketing/recruitment site. Benefits before technology.
- The marketplace is a major upcoming surface (Amazon-like ambition). Until confirmed live, it **must** be presented with the `ls-soon` treatment (section 3.5) and never as an available service. The design system must scale to commerce components (product cards, listings, search) when it ships; section 3 patterns are written to extend there.
- French is the reference language; English is opt-in via the switch, never browser-detected. Legal constraint (law 2024/017): no third-party runtime calls that send visitor data abroad; fonts, images and maps are self-hosted.

Goals of this system:

1. One source of truth for color, type, spacing, radius and motion, expressed as tokens, never raw values in components.
2. Every interactive component defines all its states: default, hover, focus-visible, active, disabled, loading, error.
3. WCAG 2.2 AA, verified with testable criteria, not intentions.
4. Consistency over local exceptions: a new page must be buildable from these rules alone.

---

## 2. Design tokens and foundations

### 2.1 Color

All color in components **must** come from `ls-*` Tailwind classes (or `var(--ls-*)` in `index.css`). Raw hex or Tailwind gray/blue palettes in components are prohibited.

Light theme (page default):

| Token | Value | Role |
| --- | --- | --- |
| `ls-bg` | `#FFFFFF` | Page background (pure white since 2026-10-24; was `#F8F9FA`) |
| `ls-surface` | `#FFFFFF` | Cards, panels, inputs. Same as the page background, so cards **must** keep their `border-ls-rule` to stay visible |
| `ls-fill` | `#F8F9FA` | Subtle fills inside surfaces |
| `ls-stroke` | `#E2E8F0` | Decorative strokes |
| `ls-rule` | `#DCE3E5` | Borders on cards and inputs |
| `ls-text` | `#191C1D` | Primary text (15.7:1 on white). "Dark to read, blue to sign" (2026-10-25): body and section headings are dark; the logo blue carries the hero title, buttons, kickers, numbers and route lines |
| `ls-muted` | `#3C4A3C` | Secondary text (8.6:1) |
| `ls-faint` | `#5F6873` | Tertiary text, captions (5.4:1) |
| `ls-primary` | `#2697D0` | Official logo blue. Solid CTA fill under white text, brand marker, focus ring on inputs, display-size headings (AA-large: 3.1:1 ≥ 3:1 at `ls-d1`/`ls-d2` sizes) and the hero kicker. Never for body-size text. **Documented AA exception**: white on logo blue is 3.3:1 (below 4.5:1), accepted as a deliberate brand decision (owner, 2026-10-24) and limited to bold button labels and ink bands; do not extend this pair to body text |
| `ls-accent` | `#2697D0` | Links, kickers, focus outline — aligned on the logo blue since 2026-10-24 (focus outline 3.3:1 ≥ 3:1 for non-text UI) |
| `ls-cta-hover` | `#11698F` | Hover of primary-filled buttons (the former accent blue) |
| `ls-ph` | `#EEF2F7` | Placeholders, skeletons |
| `ls-ok` / `ls-warn` / `ls-bad` | `#2E7D32` / `#6E5406` / `#C62828` | Feedback text (all ≥ 4.5:1) |
| `ls-ok-bg` | `#EAF7EE` | Success surface |
| `ls-dim` | `#C7CDD2` | Disabled strokes, inactive dots |
| `ls-speed` | `#8A5700` | "Soon" badge, emphasis accents |
| `ls-select` | `#F2F8FC` | Selected row or option background |
| `ls-primary-soft` | `rgba(38,151,208,.14)` | Input focus ring, soft highlights |

Ink context (dark panels inside the light page, such as the marketplace band and the footer; this is not a dark mode). Dark restored on 2026-10-25 after a one-day logo-blue experiment; the brand lives inside these bands through the logo-blue accent:

| Token | Value | Role |
| --- | --- | --- |
| `ls-ink-bg` | `#0E1518` | Panel background |
| `ls-ink-fg` | `#F2F5F6` | Text on ink (16.9:1) |
| `ls-ink-mute` | `#A3B4BB` | Secondary text on ink (7.4:1) |
| `ls-ink-line` | `#2A3B42` | Borders on ink |
| `ls-ink-speed` | `#2697D0` | Accent on ink: logo blue (5.6:1 on ink-bg), used for badges and kickers |

Rules:

- Text on `ls-bg`/`ls-surface` **must** use `ls-text`, `ls-muted` or `ls-faint`. Text on ink **must** use `ls-ink-fg` or `ls-ink-mute`. No other combination carries text.
- `ls-dim`, `ls-stroke`, `ls-ph` **must not** carry text.
- Ink tokens **must not** be mixed with light tokens inside the same element (no `ls-ink-fg` text on `ls-surface`).
- Adding a color means adding a CSS variable in `index.css` plus its mapping in `tailwind.config.js`, with a contrast check recorded in this doc.

### 2.2 Typography

Font: Montserrat (self-hosted), stack `Montserrat, system-ui, Segoe UI, sans-serif` via `font-montserrat`. No other family may be introduced.

Scale (classes in `index.css`, mobile first, desktop at 768px):

| Class | Mobile | Desktop (≥768px) | Use |
| --- | --- | --- | --- |
| `ls-d1` | 38px / 1.06 / 800 | 72px / 1.03 | Page title (one `h1` per page) |
| `ls-d2` | 27px / 1.12 | 42px / 1.1 | Section titles |
| `ls-d3` | 20px / 1.2 | 26px | Sub-sections, card titles |
| `ls-d4` | 18px / 1.3 | 20px / 1.25 | Small headings |
| `ls-lede` | 16px / 1.62 | 19px | Intro paragraph under a title |
| `ls-body` | 16px / 1.68 | same | Body text |
| `ls-cap` | 14px / 1.55 | same | Captions, meta |
| `ls-kicker` | 12px / 1.4 / 700 / uppercase, tracking .13em | same | Eyebrow above titles |
| `ls-num` | inherits size, tabular-nums, 700 | same | Figures, stats |
| `ls-stat` | 24px / 1.2 | 32px | Stat figure size, combined with `ls-num` |

Rules:

- Headings **must** combine `ls-h` with a display class (`ls-h ls-d2`). `ls-h` carries weight 700, balanced wrapping and tightened tracking.
- Body copy **must not** exceed 60ch: use `ls-measure` on paragraphs, or `max-w-[Nch]` on headings (existing pattern, N between 15 and 24 for titles, 46 to 62 for paragraphs).
- Font sizes outside the scale **must not** be introduced. The one tolerated outlier is the hero reassurance line at 13px; treat it as `ls-cap` when touched.
- Heading levels **must** follow document order (`h1` then `h2` then `h3`), chosen for structure, styled with classes, never with the tag's default.

### 2.3 Spacing and layout

8px-based rhythm. Components use Tailwind spacing; sections follow this rhythm:

| Role | Mobile | Desktop (≥768px) |
| --- | --- | --- |
| Page gutter | `px-[18px]` | `md:px-16` |
| Section vertical padding | `pt-11`..`pt-14` / `pb-14`..`pb-16` | `md:pt-[68px]`..`[88px]` / `md:pb-[72px]`..`[88px]` |
| Gap title block | `gap-6` | `md:gap-[30px]` |
| Card padding | `p-7` | `md:p-8` or `md:p-9` |
| Content width | full | `max-w-[1440px] mx-auto` |

Rules:

- New sections **must** pick values from the table, not invent new ones. When touching an existing section with off-scale values, converge to the nearest table value.
- Interactive targets **must** be at least 44x44px (`ls-btn` already guarantees `min-height: 44px`; icon-only buttons need explicit `min-w`).
- Adjacent sections **should** alternate `ls-bg` and `ls-surface` (or an ink band) rather than rely on extra padding for separation.

### 2.4 Radius

Observed sprawl (26, 24, 22, 20, 18, 12px arbitrary values) collapses to four steps:

| Step | Value | Use |
| --- | --- | --- |
| `rounded-lg` | 8px | Small chips, thumbnails, code-like blocks |
| `rounded-2xl` | 16px | Inputs, selects, textareas, small cards |
| `rounded-[26px]` | 26px | Cards and panels (canonical card radius) |
| `rounded-full` | pill | Buttons, badges, dots, avatars |

Rules:

- New components **must** use one of the four steps. `rounded-[24px]`, `[22px]`, `[20px]`, `[18px]`, `[12px]` are legacy; migrate to the nearest step when a component is next edited, never in drive-by edits.
- Drawn illustrations (the `AppScreens` phone mockups, drawn maps) are exempt: their radii depict a device or object, not a UI surface.
- Nested radius **should** be parent radius minus padding, min 8px (a card at 26px with `p-7` holds children at `rounded-lg`).

### 2.5 Elevation

The site is flat by default: separation comes from `border-ls-rule` and background alternation.

- Cards **must** use `border border-ls-rule` on `bg-ls-surface`, no shadow.
- Shadow is reserved for floating elements (sticky nav, WhatsApp button, popovers): `shadow-sm` or one documented soft shadow, `shadow-[0_18px_40px_-24px_rgba(14,21,24,.18)]`. Arbitrary one-off shadows **must not** be added.

### 2.6 Motion

| Token | Value | Use |
| --- | --- | --- |
| Micro | 150ms ease | Button and link color transitions |
| Enter | 420ms ease-out | `ls-fade-in` |
| Reveal | 560ms ease-out / cubic-bezier(.32,.72,0,1) | `ls-reveal` scroll reveal |
| Tour | 700ms cubic-bezier(.32,.72,0,1) | `ls-tour-screen` |

Rules:

- Every animation **must** have a `prefers-reduced-motion: reduce` branch that disables it or reduces it to opacity (all current ones comply; new ones follow).
- Scroll reveals **must** use the `Reveal` component (`src/components/Reveal.jsx`) and the `ls-reveal` class, never a new IntersectionObserver per section.
- Scroll-linked progress effects (route timelines) **must** use the `useFlowProgress` hook (`src/components/useFlowProgress.js`) with the `ls-flow-*` classes. It writes transforms directly to the DOM (no React re-render per frame), smooths with a rAF lerp (no CSS transition on the lines, the two would fight), latches steps on permanently (no flicker at thresholds), and renders the final state under `prefers-reduced-motion`.
- Animation **must not** move content more than ~14px or delay interactivity; content **must** be readable with JavaScript disabled (reveal starts visible without JS or falls back via the reduced-motion branch).

### 2.7 Breakpoints

Mobile first. `md` (768px) is the primary breakpoint; `sm` (640px) only for stacking CTA rows; `lg`/`xl` sparingly for grids. Every component rule below states behavior at base and `md` minimum.

---

## 3. Component rules

### 3.1 Buttons (`ls-btn`)

Anatomy: pill container, optional leading icon (gap 7px), label. Sizes: `ls-btn` 44px, `ls-btn-lg` 48px, `ls-btn-sm` 36px.

Variants and states:

| State | `ls-btn-solid` | `ls-btn-line` | `ls-btn-ink` / `ls-btn-ink-line` (on ink) |
| --- | --- | --- | --- |
| Default | `bg ls-primary` (logo blue), text `ls-surface` (documented AA exception, see 2.1) | border `ls-rule`, text `ls-text` | `bg ls-ink-fg` / border `ls-ink-line` |
| Hover | `bg ls-cta-hover` | border `ls-text` | white / border `ls-ink-fg` |
| Focus-visible | global 2px `ls-accent` outline, offset 2px | same | same (outline remains visible on ink) |
| Active | **should** add `active:translate-y-px` or a darker step; no scale animation | same | same |
| Disabled | `opacity-50 pointer-events-none` on a real `disabled` attribute (buttons) or `aria-disabled` (links); **must not** be removed from the tab order silently when it conveys state | same | same |
| Loading | label swaps to progress text from locales, `aria-busy="true"`, width **must not** collapse (keep `min-w` of the idle label) | same | same |

Rules:

- A navigation action **must** be a `Link`/`a` styled as a button; a mutation **must** be a `button`. Never a `div` with onClick.
- Primary CTA per section **should** be unique: one `solid` (or `ink` on ink), the rest `line`.
- Labels come from locales, **must** name the action ("Demander une démo"), never "Cliquer ici".
- Responsive: full-width stacked at base inside CTA groups (`flex-col gap-3`), inline from `sm:` (`sm:flex-row`). Long labels wrap the layout, not the button: label text stays `white-space: nowrap`; if it overflows at base width, shorten the copy in both locales.
- Icon-only buttons and links **must** use `ls-icon-btn` (44px minimum hit area, pill focus outline) plus an `aria-label` from locales. When the layout must stay visually compact, compensate with a negative margin (`-m-3.5` for a 16px icon); the hit area must never shrink instead.

### 3.2 Links (`ls-link`)

- Inline links **must** use `ls-link` (accent, 700) and show underline on hover; links inside dense card lists **may** be underlined by default.
- External links (WhatsApp, app stores) **must** carry `rel="noopener noreferrer"` and open behavior consistent with `src/constants/routes.js` flags.
- Focus-visible: global outline applies; **must not** be suppressed.

### 3.3 Cards and panels

Anatomy: `rounded-[26px] border border-ls-rule bg-ls-surface p-7 md:p-8`, optional kicker, `ls-d3`/`ls-d4` title, `ls-body`/`ls-cap` copy.

- A whole card acting as a link **must** be one `a`/`Link` wrapping the card, with the global focus outline on the card itself; nested interactive elements inside a clickable card are prohibited.
- On ink: `border-ls-ink-line`, text tokens from the ink set only.
- Empty or placeholder content uses `bg-ls-ph` blocks with `aria-hidden="true"`, and the surrounding region keeps a text alternative.
- Responsive: single column at base; grids from `md:` with `gap-4`..`gap-6`. Cards in a row **must** stretch to equal height (`h-full` on card, grid handles the rest); long titles wrap, never truncate silently.

### 3.4 Form fields (inputs, selects, textareas)

Canonical classes exist in `ApplicationForm.jsx` (`inputClass`/`selectClass`); this is the system-wide rule:

- Anatomy: `w-full rounded-2xl border border-ls-rule bg-ls-surface px-4 py-3 text-base text-ls-text placeholder:text-ls-faint`.
- Focus: `focus:border-ls-primary focus:ring-2 focus:ring-ls-primary-soft` with `outline-none`. This pair **must** stay together; `outline-none` without the ring replacement is prohibited.
- Error: border and message in `ls-bad`; the message is a visible text node linked with `aria-describedby`, and the field sets `aria-invalid="true"`. Color **must not** be the only error signal.
- Disabled: `opacity-50`, `bg-ls-fill`, real `disabled` attribute.
- Every field **must** have a visible `label` (no placeholder-as-label). Placeholders are examples, in `ls-faint`.
- Option `value`s sent to APIs stay identical across languages; only labels translate.
- Long content: textareas grow with content or scroll internally; selects with long options let the browser handle overflow, no fixed heights.

### 3.5 Badges and status

- "Soon" markers **must** use `ls-soon` (10px, `ls-speed`). Status pills: `rounded-full px-3 py-1 ls-cap` with `ls-ok`/`ls-ok-bg` or `ls-warn`/`ls-bad` text on a soft surface, always with a text label, never a colored dot alone.

### 3.6 Section pattern

Every section **must** follow: `<section aria-labelledby="...">` with a heading carrying that id, kicker (`ls-kicker text-ls-accent`) above the title, spacing from the table in 2.3, content wrapped by the `Reveal` component where the page uses scroll reveals. Copy comes from `src/locales/{fr,en}/<namespace>.js` with identical shape in both files.

Exception: a band with no visible heading (stat strips like `AccueilPreuve`) **may** use `aria-label` from locales instead of `aria-labelledby`, provided it introduces no heading-level skip around it.

---

## 4. Accessibility: testable acceptance criteria

Each item is pass/fail and checkable without special tooling beyond a browser and keyboard:

1. Tab through any page: every interactive element shows the 2px `ls-accent` outline (or ring pair on inputs); no focus is invisible and no `outline-none` exists without a replacement.
2. All text/background pairs come from section 2.1 pairings; any new pair is contrast-checked at 4.5:1 (3:1 for text ≥ 24px bold) before merge.
3. Every page has exactly one `h1`; headings are sequential; every `section` has `aria-labelledby` pointing at a real heading (or `aria-label` for headingless bands per 3.6).
4. All form fields have visible labels and programmatic association (`htmlFor`/`id`); errors use `aria-invalid` + `aria-describedby` and are announced on submit (focus moves to the first invalid field).
5. `prefers-reduced-motion: reduce` in OS settings: no element translates or animates beyond opacity; the tour progress bar renders complete and static.
6. Hit targets: no interactive element smaller than 44x44px on touch layouts.
7. Images: meaningful images have a FR/EN alt from locales; decorative ones have `alt=""` or `aria-hidden="true"`.
8. Keyboard only: all flows (nav, language switch, form submit, tour controls) completable without a pointer; no keyboard trap.
9. 200% browser zoom at 360px width: no horizontal scroll, no clipped text.

---

## 5. Content and tone

- French is the reference; both locale files **must** keep the same shape; English falls back key by key.
- No em dashes in copy. No features, prices or promises that are not confirmed. No invented statistics, coverage areas or guarantees.
- Planned functionality (marketplace, WhatsApp automation still in development) **must** be visually distinguished from existing services with the `ls-soon` treatment and worded as upcoming, never as available.
- Copy speaks to merchants first: lead with the operational benefit (deliveries handled, stock stored, payments collected), then the tool that enables it. LivSight is described as a logistics company, never "a platform" or "a SaaS".
- Legal entity in legal/footer contexts: LivSight SARL. Never H-GROUPE SARL.
- Buttons and links name the action and object. Good: "Voir les tarifs". Bad: "En savoir plus" repeated across a page.
- Figures use `ls-num`; units stay with the number ("30 min", "7 j/7").
- Contact email is contact@livsight.com everywhere.

---

## 6. Anti-patterns (prohibited)

- Raw hex, `text-gray-*`, `bg-slate-*` or any non-`ls-*` color class in a component.
- `dark:` classes or a theme toggle. The ink band is a surface, not a mode.
- New font sizes, radii, shadows or easing curves outside sections 2.2 to 2.6.
- `outline-none` without a visible focus replacement.
- `div`/`span` with `onClick` instead of `button`/`Link`.
- Placeholder used as the only label; color as the only error or status signal.
- Importing assets directly instead of via the barrel files (`src/assets/images/index.js`, `src/assets/icons/index.js`).
- Any third-party runtime resource (fonts, scripts, map tiles, analytics pixels) loaded from abroad.
- Text hardcoded in JSX instead of locales.

---

## 7. QA checklist (per PR)

- [ ] `npm run lint` and `npm run size` pass.
- [ ] No new raw colors, font sizes, radii or shadows (grep for `#`, `text-[`, `rounded-[`, `shadow-[` in the diff and justify each hit against this doc).
- [ ] All states implemented for any new/edited interactive component (default, hover, focus-visible, active, disabled, loading, error where applicable).
- [ ] Keyboard pass and reduced-motion pass done on touched pages.
- [ ] FR and EN locale files updated together with identical shape.
- [ ] Checked at 360px, 768px and 1280px; no horizontal scroll at 200% zoom.
- [ ] `vercel.json` and `legacyRedirects` in sync if routes changed.

---

## 8. Migration notes

Applied opportunistically (when a file is already being edited), never as sweeping renames:

1. Radius: collapse `rounded-[24px]`/`[22px]`/`[20px]`/`[18px]` to `rounded-[26px]` or `rounded-2xl` per section 2.4.
2. Shadows: replace arbitrary `shadow-[0 ...]` values with the documented soft shadow or a border.
3. Buttons: add disabled and loading treatments where forms submit (`ApplicationForm`, contract signing).
4. Hero reassurance line 13px: fold into `ls-cap` on next edit.
5. Extract `inputClass`/`selectClass` from `ApplicationForm.jsx` into a shared module when a second form needs them (contract signing page is the trigger).
