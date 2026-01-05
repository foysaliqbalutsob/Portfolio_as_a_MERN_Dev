/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        "background-light": "#F3F4F6",
        "background-dark": "#0B0B0F",
        "card-dark": "#15151A",
        "card-light": "#FFFFFF",
        "text-light": "#1F2937",
        "text-dark": "#E5E7EB",
        "text-muted-dark": "#9CA3AF",
        "text-muted-light": "#6B7280",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-dark': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
      },
    },
  },
  plugins: [],
}