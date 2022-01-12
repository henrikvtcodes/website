const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          manatee: "#9CA3AF",
          jet: "#2c2f33",
          charleston: "#23272a",
        },
        orange: {
          spanish: "#e36414",
          dark: "#fb8b24",
          flame: "#e25822",
        },
        blue: {
          celadon: "#457b9d",
          prussian: "#1d3557",
          pacific: "#0eb1d2",
          azure: "#3185fc",
          jeans: "#00a6fb",
          twitter: "#1DA1F2",
        },
        purple: {
          amethyst: "#a663cc",
          wisteria: "#b298dc",
          electric: "#b14aed",
          instagram: "#E1306C",
          twitch: "#6b3fa0",
        },
        spanishViolet: "#432371",
        MacAndCheese: "#faae7b",
      },
      width: {
        "content": "40rem",
      },
    },
    fontFamily: {
      sans: ["Uni Sans Heavy", "sans-serif"],
      serif: ["Whitney", "Helvetica"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
