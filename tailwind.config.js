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
        /* Alias conservé : `font-palanquin` reste valide et rend du Montserrat,
           le temps que d'éventuels usages restants soient repris. */
        palanquin: ['Montserrat', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "brand-blue": "#257DC4",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "security-ink": "#1a1a1a",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'soft-card': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'tarif-card': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'cta-final': '0 25px 50px -12px rgba(37, 125, 196, 0.3)',
      },
      backgroundImage: {
        'hero-grid': "linear-gradient(180deg, rgb(226, 232, 240) 2.5%, rgba(226, 232, 240, 0) 2.5%), linear-gradient(90deg, rgb(226, 232, 240) 2.5%, rgba(226, 232, 240, 0) 2.5%)",
      },
      screens: {
        "wide": "1440px"
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
