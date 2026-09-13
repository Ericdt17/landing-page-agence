/** Delivery & storage and Pricing pages (English). Same shape as locales/fr/offre.js. */
export default {
    livraison: {
        seo: {
            title: "Delivery and storage in Yaoundé",
            description:
                "LivSight delivers your parcels anywhere in Yaoundé, Monday to Saturday, collects payment for you and stores your products at Hippodrome, 3 months free.",
        },
        hero: {
            kicker: "Delivery & storage",
            title: "The delivery agency for Yaoundé's merchants.",
            lede: "Where we started, and that doesn't change. Whether you sell on social media or on your own website, we store, we deliver and we collect payment.",
            primary: "Message us on WhatsApp",
            secondary: "See pricing",
            facts: [
                { label: "Payout", value: "at the end of the day" },
                { label: "Storage at Hippodrome", value: "3 months free" },
                { label: "Delivery", value: "Monday to Saturday" },
                { label: "WhatsApp reply", value: "< 30 min" },
            ],
        },
        services: {
            kicker: "What we deliver",
            title: "Anywhere in Yaoundé, Monday to Saturday.",
            rows: [
                {
                    title: "Parcels & packages",
                    text: "The heart of the service. Pickup from your place, or shipping straight from our Hippodrome warehouse.",
                },
                {
                    title: "Documents & errands",
                    text: "For individuals: a file to drop off, an errand to run.",
                    link: "Errands for individuals",
                },
                {
                    title: "Large volumes",
                    text: "High-volume merchants: dedicated rounds and a negotiated rate.",
                },
            ],
        },
        asideLabel: "API and address",
        adresse: {
            kicker: "Hours & address",
            title: "Hippodrome, Yaoundé.",
            lines: [
                "Monday to Saturday · 8am to 6pm",
                "WhatsApp, reply in under 30 min",
                "Phone for emergencies only",
            ],
            cta: "Message us on WhatsApp",
        },
    },
    reversement: {
        kicker: "Payouts",
        title: "A formula, not a surprise.",
        body: "Every payment collected is recorded, delivery by delivery, and every line of the formula shows up in your statement.",
        note: "Paid to your Mobile Money number. No bank details are collected.",
        exampleLabel: "Sample statement",
        formulaResult: "Amount paid out",
        formulaTerms: ["Amount collected", "Delivery fees", "Outstanding debts"],
        formulaSr: "Amount paid out equals amount collected, minus delivery fees, minus outstanding debts.",
        example: [
            { label: "Collected", value: "195,900" },
            { label: "Deliveries (8)", value: "−11,600" },
            { label: "Debts", value: "0" },
            { label: "You receive", value: "184,300", highlight: true },
        ],
    },
    tarifs: {
        seo: {
            title: "Delivery pricing",
            description:
                "No subscription: you pay for delivery, from 1,000 to 5,000 FCFA depending on the neighbourhood. 3 months of free storage, paid out at the end of the day.",
        },
        hero: {
            kicker: "Pricing",
            title: "No subscription. Your first 3 months of storage are free.",
            lede: "You pay for delivery, nothing else. The price for your neighbourhood is known before the delivery.",
        },
        columnsLabel: "What you pay",
        othersLabel: "Other offers",
        calculKicker: "The calculation",
        rangeUnit: "to {{max}} FCFA",
        currency: "FCFA",
        columns: {
            livraison: {
                kicker: "Delivery",
                text: "Depends on the delivery neighbourhood in Yaoundé. You get the exact price before the delivery.",
                bullets: ["Cash collection on delivery included", "Status of every delivery in the app", "Price known before the delivery"],
            },
            stockage: {
                kicker: "Storage",
                value: "3 months",
                unit: "free",
                text: "We store your products at Hippodrome, free for your first 3 months. They leave the same day, with no pickup to arrange.",
                bullets: ["Receiving and shelving", "Parcel preparation", "Inventory visible in the app", "Beyond 3 months, depending on size: let's talk"],
            },
            reversement: {
                kicker: "Payout",
                value: "End of day",
                text: "At the end of the working day, once deliveries are done, to your Mobile Money number.",
                bullets: ["Every payment recorded", "Detailed statement in the app", "To your Mobile Money number"],
            },
        },
        zones: {
            kicker: "By neighbourhood",
            title: "The price known in advance, neighbourhood by neighbourhood.",
            body: "These prices are read live from our system: they are the ones the app applies to every delivery.",
            loading: "Loading prices…",
            unavailable:
                "Prices by neighbourhood appear as soon as our service responds. In the meantime, ask for your neighbourhood's price on WhatsApp: we reply in under 30 minutes.",
            unavailableCta: "Message us on WhatsApp",
            extrasTitle: "Additional fees",
            entryFeeNote: "An access fee may apply for this neighbourhood.",
            regionLabel: "Prices by zone, {{city}}",
            zoneName: "Zone {{number}}",
            headings: ["Zone", "Distance", "Estimated time", "Neighbourhoods", "Price"],
            extras: {
                pickup: "Pickup from your place",
                express: "Express delivery",
                expressValue: "+ {{amount}}",
                clientAbsent: "Customer not available",
                clientAbsentValue: "{{percent}}% of the delivery fee",
            },
        },
        volumes: {
            title: "Large volumes",
            body: "High-volume merchants: dedicated rounds and a negotiated rate. Let's talk.",
            cta: "Message us on WhatsApp",
        },
        marketplace: {
            badge: "Soon",
            title: "Marketplace pricing",
            body: "Marketplace pricing isn't set yet. We will define it with the merchants who already deliver with us.",
            link: "How it will work",
        },
    },
};
