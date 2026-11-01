# LivSight: official company context

Source of truth for who LivSight is and what this website is for. Every content, design and architecture decision on the public site must be consistent with this document. Last updated: 2026-10-24.

---

## 1. Identity

- Legal entity: **LivSight SARL** (never H-GROUPE SARL).
- Brand name: LivSight.
- Headquarters: Yaoundé, Cameroon.
- Industry: logistics, delivery, e-commerce fulfillment and technology.
- Slogan: **"Plus de livraisons. Moins de stress."**
- LivSight is developed, owned and operated by LivSight SARL.

**Core understanding:** LivSight is a technology-driven logistics and delivery company. It is not a SaaS product, a marketing website or a recruitment platform. It is an operational logistics business powered by proprietary technology. Technology is the competitive advantage; logistics is the business.

## 2. Services (business model)

LivSight operates its own logistics agency and coordinates deliveries through a network of delivery partners (independent couriers, motorcycle couriers, taxi-based delivery). It does not depend exclusively on a company-owned fleet; coordination happens through its proprietary software.

| Service | What it is |
| --- | --- |
| Last-mile delivery | Parcels from merchants to their customers |
| Parcel storage | Merchants store products at LivSight facilities |
| Order management | Create, organize and monitor delivery requests digitally |
| Delivery tracking | Follow delivery progress, receive status updates |
| Cash collection | Couriers collect customer payments on behalf of merchants |
| Inventory management | Merchants monitor products stored at LivSight |
| Intercity shipping | Parcel shipments between cities via logistics partners |
| Delivery reporting | Delivery histories and operational reports |

## 3. Technology ecosystem

Proprietary, interconnected applications developed by LivSight SARL:

1. **Merchant application**: create delivery requests, monitor statuses, delivery histories, stored inventory, communication with agents, notifications.
2. **Delivery agent application**: assigned missions, delivery information, status updates, communication with operations, optional location sharing.
3. **Operations application and dashboard**: manage requests, assign couriers, monitor deliveries, manage merchant inventory, handle incidents, reporting.
4. **WhatsApp integration**: key communication and order-management channel. Some automation is still under development; never present planned automation as available without confirmation.
5. **SaaS architecture**: multi-tenant under the hood (could let other agencies run on LivSight tech), but the public site must not present LivSight primarily as a SaaS vendor.

## 4. Marketplace (upcoming)

A marketplace is coming soon, with an Amazon-like ambition: merchants selling through LivSight, with LivSight handling storage, fulfillment and delivery. Until launch is confirmed:

- Present it as upcoming (`ls-soon` treatment per `docs/design-system.md`), never as live.
- Do not publish launch dates, catalogs, seller terms or pricing that are not confirmed.
- Design and architecture decisions should anticipate commerce surfaces (product cards, listings, search, seller onboarding) so the site scales to it.

## 5. Purpose of this website

The official corporate and commercial website of LivSight SARL. It is not the logistics dashboard or the merchant application, and its architecture is separate from the internal platform.

Objectives, in order:

1. Present LivSight as a professional logistics company.
2. Explain delivery and storage services.
3. **Convert visitors into business customers (primary goal).**
4. Encourage merchants to contact LivSight or begin onboarding.
5. Present the technology that differentiates LivSight from traditional agencies.
6. Build credibility and trust.
7. Recruit delivery partners and staff (secondary goal).
8. Facilitate business partnerships.

Primary conversion actions: contact LivSight, request delivery services, become a merchant customer, learn about storage and fulfillment. Secondary: apply as delivery partner, explore jobs, partnership contact.

## 6. Audiences

- **Primary: merchants and businesses** — e-commerce merchants; Instagram, Facebook, TikTok and WhatsApp sellers; SMBs with recurring deliveries; merchants needing storage and fulfillment. They want reliable logistics without running their own delivery operation.
- Secondary: delivery partners (independent couriers and drivers).
- Additional: potential employees, business partners, organizations interested in the technology.

## 7. Brand positioning

A modern, technology-powered logistics company. Competitive advantages to communicate: integrated logistics operations (one partner for delivery and storage), proprietary technology, delivery visibility, centralized inventory management, simplified communication, cash collection, operational support.

Brand attributes: professionalism, reliability, operational efficiency, transparency, innovation, accessibility, trust.

Emphasize concrete merchant benefits before technical architecture. Benefits first, features second.

## 8. Language and content rules

- French is the default and reference language; French content is the source of truth for translations.
- English is opt-in via the switch, never auto-detected from the browser.
- Clear, professional, accessible French; no unnecessary jargon in customer-facing content.
- Never invent operational statistics, geographical coverage, pricing, guarantees or services that are not confirmed.
- Always distinguish existing features from planned functionality.

## 9. Privacy and regulatory constraints

Cameroonian Law No. 2024/017 (personal data protection) drives a privacy-first policy:

- No third-party runtime requests transmitting visitor data outside Cameroon.
- Fonts self-hosted; no runtime loads from external font providers.
- Images and static assets hosted on approved infrastructure.
- No maps that auto-load external third-party resources; self-hosted or privacy-reviewed solutions only.
- No third-party tracking, analytics or ad pixels without explicit authorization and privacy review.
- Forms (contact, recruitment, onboarding) must respect data-protection requirements.
- Self-hosting alone does not guarantee compliance: hosting arrangements, data processing, consent, retention and international transfers must be reviewed where applicable.

## 10. Development instructions (summary)

1. Treat LivSight as a logistics company first.
2. Legal entity is LivSight SARL; never H-GROUPE SARL.
3. Never describe the site as merely marketing/recruitment, or the business primarily as SaaS.
4. LivSight operates physical logistics services in Cameroon; software is the competitive advantage.
5. Prioritize merchant acquisition and conversion; recruitment is secondary.
6. Preserve the French-first multilingual approach.
7. Respect privacy and data-protection constraints; no unnecessary third-party dependencies.
8. No invented stats, coverage, pricing, guarantees or services; distinguish existing from planned.
9. Keep commercial positioning consistent with actual logistics operations.

## 11. Activity log

Running record of significant website work, newest first. Add one line per meaningful change.

- 2026-11-01: SiteNav hardened (design-system-spacex audit method, LivSight tokens): header is now sticky, transparent over the hero at top, opaque bg + ls-rule border once scrolled (8px threshold) or when the mobile menu is open; the mobile menu overlays the page (absolute under the bar, fade-in, max-height with internal scroll for short viewports) instead of pushing content; body scroll locks while open; an invisible fixed backdrop closes it on outside tap; Escape returns focus to the burger. z-order: header z-40 (z-50 with menu open), above the WhatsApp fab, below the cookie banner.
- 2026-11-01: Home page application section: the animated route frieze replaced by the real-captures ScreenTour (same six screens as the Espace commerçant page, components reused from sections/application/PhoneScreens). Tabs copy duplicated into the bundled accueil namespace (fr+en); app.captions removed. The no-fake-screenshots decision of 2026-10-24 stands, real captures now exist. Home entry bundle 99.6/110 KB. useFlowProgress and the ls-flow CSS stay (still used by AccueilPreuve).
- 2026-11-01: Install section recopied (owner's text): "Vous nous écrivez sur WhatsApp. On s'occupe du reste." with two paragraphs (team sets everything up, then guided discovery of the app at the merchant's pace) and a closing tagline "Vous commencez simplement. Nous évoluons ensemble." rendered in ink-speed blue. Buttons unchanged (WhatsApp primary, contact secondary). Positioning shift: no more advisor-comes-to-your-shop promise; onboarding starts on WhatsApp. English matched.
- 2026-11-01: "Bientôt" section recopied (owner's text): now "Une application en constante évolution / Nous construisons l'avenir de votre logistique, avec vous." with three columns (Nous vous écoutons / Nous innovons pour vous / Vous vous concentrez sur votre croissance). No more specific upcoming-feature promises (driver tracking, withdraw-on-demand), which also fits the no-unconfirmed-promises rule. Locale key stays `soon` to limit churn; English translated to match.
- 2026-11-01: "Disponible aujourd'hui" intro paragraph removed (owner's brief): the section is title + tour only; the advisor-at-your-shop message still lives in the dark install section at the bottom. today.body dropped from both locales.
- 2026-11-01: ScreenTour unified across breakpoints (owner's brief): desktop no longer shows the multi-line pill cloud; like mobile, only the active title is visible (text-lg, blue, no background, progress bar underneath), auto-advance, swipe and faded side previews everywhere. The lift offsets died with the cloud and were removed from both locales.
- 2026-11-01: Espace commerçant hero aligned with the home hero's signature treatment: kicker and H1 title now text-ls-primary (blue), like the accueil page. Section H2s stay dark on both pages per "dark to read, blue to sign".
- 2026-11-01: "Bientôt" section stripped of its drawn screen tour entirely (owner's brief, clarified over two messages): no mockups of features that do not exist yet; the section is now title + body + the three descriptive columns. PlanningScreen/CourierScreen/WithdrawScreen and the Phone frame deleted from PhoneScreens.jsx (captures only now); soon.tabs and soon.tourLabel removed from both locales; the short-lived previews={false} ScreenTour option reverted. The ls-route CSS animation no longer has any user (kept in index.css for now).
- 2026-11-01: Espace commerçant section order swapped (owner's brief): "Disponible aujourd'hui" (real captures, #ecrans anchor) now comes right after the hero, before "Bientôt dans l'application". Show what exists before what's promised; the hero's "Voir les écrans" link now jumps one section instead of two.
- 2026-11-01: ScreenTour pills restyled to primary (owner's brief, two passes): borders and gray shadow removed; inactive pills on ls-primary-soft with an accent dot; active pill has no background at all (owner asked), just blue text, blue dot and the blue progress bar underneath.
- 2026-11-01: ScreenTour tabs on mobile (owner iterations, final state): only the active pill is shown, centered above its screen, and the tour auto-advances every 5 s with its progress bar and pause button; inactive pills are hidden (a scrolling-row variant was tried in between and discarded). The colored dot inside the pills was removed and the label is bigger on mobile (text-lg, back to text-sm from md). Prev/next screens now peek in faded on both sides on mobile too (the opacity:0 mobile rule dropped; screen spacing is --tour-spacing, 260px mobile / 322px desktop), and the screens are swipeable: a horizontal pointer gesture of 48px+ steps to the next/previous screen (touch-action pan-y keeps vertical page scroll intact; autoplay timer simply restarts after a swipe). Desktop keeps the centered multi-line cloud with lift offsets. Only the Espace commerçant page uses ScreenTour.
- 2026-11-01: Espace commerçant "Disponible aujourd'hui" tour: the six drawn screens replaced with real app captures (appClient/sreenshots/store 01-08, converted to 480px webp, 24-33 KB each, in src/assets/images/app/). The three "Bientôt" screens stay drawn (features not built yet). Captions realigned with the real screens; "Inbox" tab relabeled "Notifications" (the real screen is a notifications list, not a chat). PhoneScreens.jsx shrank from 415 to 185 lines. Note: captures show real-looking merchant data (account "Fydc", ACM/CeraVe products); confirm with Eric this is fine to publish.
- 2026-11-01: Espace commerçant page: scroll reveal added on the three post-hero sections (same Reveal component as the home page), and the hero now shows a real screenshot of the merchant app home screen in a phone frame (app-accueil-mockup.webp, 69 KB, from the appClient repo's sreenshots folder, self-hosted via the images barrel). Facts list moved under the CTAs; phone cropped with a fade to --ls-bg. To verify: the screenshot shows a red battery icon and the app copy bug "Prévue le aujourd'hui"; a cleaner capture would be better. The drawn PhoneScreens further down the page are now inconsistent with the real screenshot (real captures 01-08 exist in appClient/sreenshots/store).
- 2026-10-26: Hero visual replaced: the drawn animated map gives way to a real warehouse photo provided by Eric (hero-entrepot.webp, 51 KB, self-hosted via the images barrel). Full-bleed behind the text on mobile with a white gradient fade, rounded panel on desktop. AccueilHeroMap.jsx deleted; ls-route animation kept (still used by the application page). To verify: photo licence/rights, and a larger export (1600px wide) would sharpen full-screen mobile rendering (source is 765px).
- 2026-10-26: Footer relabeled (owner's brief): columns now Nos services / Votre espace / Découvrir LivSight / Assistance; "Commencer à livrer" becomes "Devenir client", "Contact · WhatsApp" becomes "Nous contacter", "Courses particuliers" becomes "Livraison pour particuliers", legal labels spelled out. Labels only: destinations, soon flags and design untouched. Copyright "LivSight SARL" confirmed against docs/company-context.md.
- 2026-10-25: Color balance settled, "dark to read, blue to sign" (owner validated): body text and section headings back to dark, ink bands (footer, marketplace) back to near-black with the logo blue as their accent (ink-speed #2697D0, 5.6:1). The blue keeps its signature moments: hero kicker+title, solid buttons, kickers, numbers, links, route timelines, hero map, floating WhatsApp button. Supersedes the all-blue-text and blue-bands entries below.
- 2026-10-25: Démarrer section reworked (validated proposal): title "Votre logistique démarre en moins d'une journée.", steps fixed for positioning (03 was "Vous livrez", now "Vos commandes partent": the merchant sends, LivSight delivers), CTA "Démarrer aujourd'hui" moved below the steps, separators removed, whitespace + numbers like the Differences section. Differences section also de-ruled and numbered 01-07 the day before.
- 2026-10-24: Hero copy replaced (owner): kicker "Votre partenaire logistique" (settles the delivery-vs-logistics positioning question), title "Vous vendez. On gère la suite.", CTA "Commencer sur WhatsApp", secondary "Découvrir nos services" now linking to /livraison-stockage instead of /tarifs. Differences intro rewritten the same day (3 paragraphs, bold punchline).
- 2026-10-24: Differences section expanded from 4 to 7 points (owner's copy): agents handling orders, WhatsApp-first then apps, supervised couriers, end-of-day payout, organised rounds, responsive team, remote management. Claims carefully hedged (objectif de réponse, selon les conditions convenues).
- 2026-10-24: Both route timelines (offer + application) are scroll-linked via the reusable useFlowProgress hook: rAF lerp writing transforms directly (no per-frame React re-render), steps latch on permanently. First version (React state + CSS transition) janked and flickered mid-scroll; rewritten the same day.
- 2026-10-24: Offer band: horizontal rules removed, then the band adopted the same route-timeline treatment as the Application section (blue drawn line + dots, cascade), per owner. The home page now carries one continuous visual language.
- 2026-10-24: Offer band gains a header (owner's copy): "La logistique simplifiée, les avantages en plus." + subtitle, and clearer benefit labels (Livraison à Yaoundé, Reversement de vos encaissements, Stockage de vos marchandises, Temps de réponse WhatsApp). Section switched from aria-label to a real h2.
- 2026-10-24: Offer band layout: the 2x2 boxed grid replaced by an editorial list (owner validated among 3 proposals): big blue figures (ls-d2), muted labels, whitespace-only separation inside two outer rules, cascade reveal via ls-flow-step.
- 2026-10-24: Proof band reworked as the offer band: price leads ("Dès 1 000 FCFA · La livraison en ville"), benefit-phrased labels, cells top-aligned (justify-end on the reversed column), labels from faint to muted for readability. No invented figures; all four claims pre-existing.
- 2026-10-24: Application section copy rewritten for conversion (owner's UX-writing brief): title "Votre commerce continue de tourner, même sans vous.", benefit-led step titles (commandes, stock, encaissements, suivi GPS "Bientôt"). Emphasis: autonomy, transparency, remote management (diaspora merchants included). Both locales updated.
- 2026-10-24: The four app promises return as an animated route timeline (ls-flow classes: line draws, steps cascade on scroll, reduced-motion safe; hollow dot for the upcoming live-tracking step). Replaces the removed mockups.
- 2026-10-24: Drawn app-screen mockups removed from the home Application section (owner: no fake screenshots on the home page); AppScreens.jsx deleted, captions removed from both locales. The Application page's drawn screens (PhoneScreens, ScreenTour) are untouched for now.
- 2026-10-24: ls-accent aligned on the logo blue (kickers like "L'application", links, focus outline, drawn-app pills all follow); the old dark blue survives as ls-cta-hover for solid-button hover.
- 2026-10-24: All text tokens (ls-text/muted/faint) in logo-blue tints, owner decision (briefly reverted, then confirmed the same day). Readability risk flagged; revert is one line in index.css.
- 2026-10-24: Page background switched to pure white (ls-bg #FFFFFF; supersedes the earlier keep-off-white decision). Cards now separate by border only.
- 2026-10-24: Hero kicker and title set in the logo blue (AA-large compliant at display sizes).
- 2026-10-24: All dark (ink) section backgrounds replaced by the logo blue via the ink tokens: footer, marketplace band, page InkHeros. Companion ink tokens retuned (white text, light-blue mute and borders, yellow accent). The drawn phone bezel in MarketplaceDemo stays near-black (illustration, exempt).
- 2026-10-24: ls-primary corrected to the official logo blue #2697D0 (provided by Eric). Solid CTAs use the exact logo blue with white bold text, hover darkens to ls-accent. White-on-logo-blue is 3.3:1, below AA; accepted as a documented brand exception by the owner, limited to button labels. Applies to ls-btn-solid, the floating WhatsApp button and the cookie Accept button.
- 2026-10-24: Primary CTAs moved from near-black to brand blue (superseded the same day by the exact-logo-blue entry above). Page background stays off-white by decision. Floating WhatsApp button now auto-hides when a WhatsApp CTA is on screen. Mobile hero trimmed to kicker + title + CTAs; nav made transparent (no border, bare hamburger) over the full-screen hero map.
- 2026-10-24: Hero redesign (SpaceX-inspired, light theme kept): on mobile the drawn Hippodrome-to-Bastos route map (AccueilHeroMap, portrait composition, animated via ls-route) covers the full first screen behind the text, which is anchored low over a gradient fade; two-column text/map (landscape composition) on desktop.
- 2026-10-24: Mobile pass (390px, SpaceX reference): fixed the BIENTÔT badge overlapping wrapped labels (nav and footer), compacted the cookie banner, added a floating WhatsApp button on mobile (WhatsAppFab in SiteLayout). Hero kept as is by decision.
- 2026-10-24: Home page audit against the design system. Added reusable `ls-stat` and `ls-icon-btn` classes, moved footer and home off-scale text to `ls-cap`, enlarged footer social hit targets to 44px, copyright now says LivSight SARL.
- 2026-10-24: Created this document and `docs/design-system.md` (design-system foundations, component rules, accessibility criteria) for review before site-wide application. Branch `feat/improve-layout` in progress: home sections rework, `Reveal` scroll-reveal component replacing `CountUp`.
