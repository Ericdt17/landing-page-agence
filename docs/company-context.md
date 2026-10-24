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

- 2026-10-24: Home page audit against the design system. Added reusable `ls-stat` and `ls-icon-btn` classes, moved footer and home off-scale text to `ls-cap`, enlarged footer social hit targets to 44px, copyright now says LivSight SARL.
- 2026-10-24: Created this document and `docs/design-system.md` (design-system foundations, component rules, accessibility criteria) for review before site-wide application. Branch `feat/improve-layout` in progress: home sections rework, `Reveal` scroll-reveal component replacing `CountUp`.
