/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cup: {
          forest: "#073D2D",
          emerald: "#0C513B",
          emeraldLight: "#12684D",
          gold: "#D5AD58",
          goldLight: "#E8C87A",
          goldDark: "#B88E36",
          ivory: "#F8F5EC",
          cream: "#FAF7F0",
          creamWarm: "#F3EDE0",
          chocolate: "#4B281B",
          cocoa: "#321B12",
          sage: "#DCE7D2",
          sageLight: "#EBF2E5",
          sand: "#EBDDC7",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(7, 61, 45, 0.12)',
        'luxury-hover': '0 30px 60px -15px rgba(7, 61, 45, 0.22)',
        'gold-glow': '0 0 35px -5px rgba(213, 173, 88, 0.35)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
};

