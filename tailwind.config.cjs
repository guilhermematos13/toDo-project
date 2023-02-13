/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [ './index.html', './src/**/*.{ts,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        purple: "#8284FA",
        purpleDark: "#5E60CE",
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        "gray-700": "#0D0D0D",
        "gray-600": "#1A1A1A",
        "gray-500": "#262626",
        "gray-400": "#333333",
        "gray-300": "#808080",
        "gray-200": "#D9D9D9",
        "gray-100": "#F2F2F2",
        "red": "#E25858",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
