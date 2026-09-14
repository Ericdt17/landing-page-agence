/** Cookie policy (English translation; the French version prevails). */
export default {
    seo: {
        title: "Cookie policy",
        description: "How the LivSight website uses cookies and browser storage, and how to manage your preferences.",
    },
    title: "Cookie policy",
    updated: "Last updated: September 2026",
    intro: "This page explains how the LivSight website uses cookies and browser storage, and how you can manage your preferences.",
    contactIntro: "For any question about this policy or your data, our team is available:",
    tableLabel: "Cookie table",
    columns: { type: "Type", name: "Name", role: "Purpose", duration: "Duration", active: "Active" },
    rows: [
        { type: "Technical", name: "session_id", role: "Keep your browsing session", duration: "End of session", active: "Yes" },
        { type: "Preference", name: "livsight.lang (local storage)", role: "Remember the language you chose, French or English", duration: "Until you clear it", active: "Yes" },
        { type: "Analytics", name: "_ga / _gid", role: "Anonymous visit statistics (Google Analytics)", duration: "2 years / 24 h", active: "Optional" },
        { type: "Advertising", name: "Not applicable", role: "Targeting, retargeting, data resale", duration: "Not applicable", active: "Not used" },
    ],
    browsers: [
        { browser: "Chrome", steps: "Settings → Privacy and security → Cookies" },
        { browser: "Firefox", steps: "Settings → Privacy & Security → Cookies" },
        { browser: "Safari", steps: "Preferences → Privacy → Cookies" },
        { browser: "Edge", steps: "Settings → Privacy, search, and services → Cookies" },
    ],
    groups: [
        {
            title: "What a cookie is",
            articles: [
                {
                    art: 1,
                    title: "Definition",
                    paragraphs: [
                        "A cookie is a small text file placed on your device when you visit a website. It lets the site remember certain information between visits. The browser's local storage plays the same role for small preferences. Neither contains viruses or can access your personal files.",
                    ],
                },
            ],
        },
        {
            title: "Cookies used on this site",
            articles: [
                {
                    art: 2,
                    title: "Summary",
                    paragraphs: [
                        "The LivSight website only uses cookies and storage strictly necessary for it to work, plus optional audience measurement. No advertising or profiling cookies are set.",
                    ],
                    table: true,
                },
                {
                    art: 3,
                    title: "Technical cookies (required)",
                    paragraphs: [
                        "These cookies are essential for the site to work. They enable browsing, remembering your language and securing your session. They collect no personally identifiable information and cannot be disabled without affecting your browsing.",
                    ],
                },
                {
                    art: 4,
                    title: "Analytics cookies (optional)",
                    paragraphs: [
                        "When enabled, these cookies measure site traffic anonymously and in aggregate (pages visited, visit length, traffic source). This data is only used to improve the site. No personally identifiable data is passed to third parties for commercial purposes.",
                        "These cookies are only enabled with your explicit consent, given in the cookie banner on your first visit.",
                    ],
                },
            ],
        },
        {
            title: "Your rights & settings",
            articles: [
                {
                    art: 5,
                    title: "Managing your preferences",
                    paragraphs: ["You can change your preferences at any time in your browser settings. Here is how, depending on your browser:"],
                    browsers: true,
                },
                {
                    art: 6,
                    title: "Disabling & consequences",
                    paragraphs: [
                        "Disabling technical cookies may cause the site to partly malfunction (lost session, language to choose on every visit). Disabling analytics cookies does not affect your browsing. LivSight cannot be held liable for limitations caused by a user disabling cookies.",
                    ],
                },
                {
                    art: 7,
                    title: "Updates to this policy",
                    paragraphs: [
                        "This policy may be updated at any time to reflect changes in the technologies used or in applicable regulations. The date of the last update is shown at the top of the page.",
                    ],
                },
            ],
        },
    ],
};
