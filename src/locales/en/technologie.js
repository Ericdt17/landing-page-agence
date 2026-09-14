/** Technology page (English). Same shape as locales/fr/technologie.js. */
export default {
    seo: {
        title: "Technology",
        description:
            "The software that runs the LivSight agency: planned rounds, WhatsApp orders tidied up, tracking that holds without a network.",
    },
    hero: {
        kicker: "Technology",
        title: "A delivery agency built like a product.",
        lede: "We write the software that runs the agency ourselves: rounds, statuses, cash collection. Here are three real problems, and what we did about them.",
        stackTitle: "What we build",
        stack: ["Typed backend", "Internal API", "Transactional database", "Background jobs", "Geolocation", "Mobile apps", "Web"],
        stackNote: "We write code the next person can read.",
    },
    problems: {
        kicker: "What the system does",
        title: "Three problems we had to solve for real.",
        items: [
            {
                id: "tournees",
                kicker: "01 · Rounds",
                title: "A driver shouldn't cross the city twice.",
                text: "Each delivery joins the nearest planned round, ten stops at most. The order of stops is then calculated exactly, not by nearest neighbour: on 85 real rounds, the simple method got it wrong 46 times and drove 5% too far, 76 km over six weeks. An agent then picks the driver for each round.",
                limit: "Known limit: distances are straight-line. In Yaoundé, two stops 500 m apart can be twenty minutes away by road.",
            },
            {
                id: "whatsapp",
                kicker: "02 · Orders",
                title: "Orders arrive in a jumble on WhatsApp.",
                text: "A merchant pastes a message: a phone number, a neighbourhood, products, an amount, in any order. An assistant tidies it up, an agent checks it, then the delivery is created. The same message can never create two deliveries.",
            },
            {
                id: "terrain",
                kicker: "03 · In the field",
                title: "Tracking has to hold when the network doesn't.",
                text: "A driver loses signal in a neighbourhood, not in a data centre. Their positions stay on the phone and are sent as soon as the connection is back. On the server, jobs are shared across machines without ever being processed twice, and an address found outside the service area is rejected rather than placed in the wrong spot.",
            },
        ],
    },
    asideLabel: "API and hiring",
    figures: {
        route: { stops: "6 stops · one round", saving: "−5% distance" },
        whatsapp: {
            message: "bonjour 2 robes + 1 sac bastos près de la pharmacie 690 12 34 56 encaisser 18500 merci",
            fields: [
                ["Phone", "690 12 34 56"],
                ["Neighbourhood", "Bastos, near the pharmacy"],
                ["Products", "2 dresses, 1 bag"],
                ["To collect", "18,500 FCFA"],
            ],
        },
        field: [
            "Positions kept on the phone · offline",
            "Network back · 12 positions sent",
            "Address outside the service area · rejected",
        ],
    },
    recrutement: {
        title: "We're hiring.",
        body: "Real logistics, real money, real constraints, in the field as in the code. Drivers, warehouse, advisors, support, engineers: if that speaks to you, write to us.",
        cta: "Join the team",
    },
};
