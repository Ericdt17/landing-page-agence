/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        /* Nouveau site : jetons pilotés par des variables CSS (src/index.css),
           donc clair et sombre sans dupliquer les classes. */
        "ls-bg": "var(--ls-bg)",
        "ls-surface": "var(--ls-surface)",
        "ls-fill": "var(--ls-fill)",
        "ls-stroke": "var(--ls-stroke)",
        "ls-rule": "var(--ls-rule)",
        "ls-text": "var(--ls-text)",
        "ls-muted": "var(--ls-muted)",
        "ls-faint": "var(--ls-faint)",
        "ls-primary": "var(--ls-primary)",
        "ls-accent": "var(--ls-accent)",
        "ls-ph": "var(--ls-ph)",
        "ls-ok": "var(--ls-ok)",
        "ls-warn": "var(--ls-warn)",
        "ls-bad": "var(--ls-bad)",
        "ls-dim": "var(--ls-dim)",
        "ls-speed": "var(--ls-speed)",
        "ls-select": "var(--ls-select)",
        "ls-primary-soft": "var(--ls-primary-soft)",
        "ls-ok-bg": "var(--ls-ok-bg)",
        "ls-ink-bg": "var(--ls-ink-bg)",
        "ls-ink-fg": "var(--ls-ink-fg)",
        "ls-ink-mute": "var(--ls-ink-mute)",
        "ls-ink-line": "var(--ls-ink-line)",
        "ls-ink-speed": "var(--ls-ink-speed)",
      },
    },
  },
  plugins: [],
}
