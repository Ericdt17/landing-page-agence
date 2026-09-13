/** Merchant app page (English). Same shape as locales/fr/application.js. */
export default {
    seo: {
        title: "The merchant app",
        description:
            "Orders, stock, deliveries and money in one place, on your phone. Installed and taught at your shop, no subscription.",
    },
    hero: {
        kicker: "The merchant app",
        title: "Your deliveries fit in your pocket.",
        lede: "Orders, stock, deliveries, money. All in one place, on the phone you already have. And we come over to show you how to use it.",
        primary: "Start delivering",
        secondary: "See the screens",
        facts: [
            { label: "Installation", value: "the same day" },
            { label: "Training", value: "at your shop, included" },
            { label: "Subscription", value: "none" },
            { label: "Help", value: "WhatsApp < 30 min" },
        ],
    },
    soon: {
        kicker: "Coming to the app",
        title: "Your day and your money, live.",
        body: "The driver's position on the map, and your balance growing with every delivery, ready to withdraw whenever you like.",
        tourLabel: "Upcoming features",
        tabs: [
            { id: "planning", label: "Today's schedule", caption: "Every pickup, every delivery, the time of your payout.", lift: 17 },
            { id: "livreur", label: "Where's your driver", caption: "Their position on the map, the order of the round, the time left.", lift: 0 },
            { id: "retrait", label: "Withdraw on demand", caption: "Your live balance, ready to withdraw any time during the day.", lift: 17 },
        ],
        columns: [
            {
                title: "You see the round",
                text: "The order of stops, what's delivered, what's left. No more calling anyone to find out.",
            },
            {
                title: "You see the driver",
                text: "Their position on the map and the time left before each customer. Your buyer sees the same thing.",
            },
            {
                title: "You take your money",
                text: "As soon as a delivery is paid, the amount can be withdrawn. You trigger the withdrawal yourself, at any time of day.",
            },
        ],
    },
    today: {
        kicker: "Available today",
        title: "Six screens, and your day is done.",
        body: "A LivSight advisor comes to your shop, installs the app and runs your first delivery with you.",
        tourLabel: "App screens",
        tabs: [
            { id: "accueil", label: "Home", caption: "Today's figures and the latest deliveries.", lift: 42 },
            { id: "courses", label: "Deliveries", caption: "Each delivery, its status, the amount to collect.", lift: 26 },
            { id: "stock", label: "Stock", caption: "What's at Hippodrome, what's out of stock.", lift: 8 },
            { id: "rapports", label: "Reports", caption: "Success rate, totals, and PDF export.", lift: 8 },
            { id: "inbox", label: "Inbox", caption: "The driver, support, the delivery, in one place.", lift: 26 },
            { id: "tarifs", label: "Prices by area", caption: "The price known in advance, neighbourhood by neighbourhood.", lift: 42 },
        ],
    },
    install: {
        title: "We come to install it and show you, at your shop.",
        body: "No tutorial to read on your own. An advisor visits, creates your account and runs your first delivery with you. You keep their WhatsApp.",
        primary: "Message us on WhatsApp",
        secondary: "Write to us",
    },
    screensNote: "The screens show the app in French, with sample data.",
};
