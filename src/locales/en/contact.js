/** Contact page (English). Same shape as locales/fr/contact.js. */
export default {
    seo: {
        title: "Contact",
        description:
            "Message LivSight on WhatsApp, reply within 30 minutes during opening hours, or by email. Hippodrome, Yaoundé.",
    },
    hero: {
        kicker: "Contact",
        title: "We reply fast. Really.",
        lede: "WhatsApp is the fastest channel: a reply within 30 minutes during opening hours, with a written record of your request.",
    },
    channelsLabel: "Reach us",
    channels: {
        whatsapp: { title: "WhatsApp", text: "Reply within 30 min · the fastest channel", cta: "Message us on WhatsApp" },
        email: { title: "Email", text: "Formal requests, partnerships, press", cta: "Send an email" },
        phone: { title: "Phone", text: "For emergencies only: call LivSight's WhatsApp number" },
    },
    place: {
        mapLabel: "Location map: Hippodrome, Yaoundé",
        title: "Hippodrome, Yaoundé",
        lines: ["Cameroon", "Monday to Saturday · 8am to 6pm", "Closed on Sunday: emergencies on WhatsApp only"],
    },
    reasons: {
        title: "What are you contacting us about",
        items: [
            { id: "demarrer", label: "Start delivering", channel: "whatsapp" },
            { id: "probleme", label: "A problem with a delivery", channel: "whatsapp" },
            { id: "suivi", label: "Order tracking", channel: "whatsapp" },
            { id: "partenariat", label: "Partnership", channel: "email", subject: "Partnership" },
            { id: "presse", label: "Press", channel: "email", subject: "Press" },
        ],
    },
    company: {
        title: "The company",
        name: "LivSight SARL · Yaoundé, Cameroon",
    },
};
