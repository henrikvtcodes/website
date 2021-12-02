const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        indigo: colors.indigo,
        red: colors.rose,
        fuschia: colors.fuschia,
        gray: {
          DEFAULT: colors.gray,
          true: colors.trueGray,
          cool: colors.coolGray,
          blue: colors.blueGray,
          manatee: "#9CA3AF",
          jet: "#2c2f33",
          charleston: "#23272a",
        },
        yellow: {
          DEFAULT: colors.yellow,
          amber: colors.amber,
        },
        orange: {
          DEFAULT: colors.orange,
          spanish: "#e36414",
          dark: "#fb8b24",
          flame: "#e25822",
        },
        blue: {
          DEFAULT: colors.blue,
          sky: colors.sky,
          cyan: colors.cyan,
          teal: colors.teal,
          celadon: "#457b9d",
          prussian: "#1d3557",
          pacific: "#0eb1d2",
          azure: "#3185fc",
          jeans: "#00a6fb",
          twitter: "#1DA1F2",
        },
        purple: {
          DEFAULT: colors.purple,
          violet: colors.violet,
          amethyst: "#a663cc",
          wisteria: "#b298dc",
          electric: "#b14aed",
          instagram: "#E1306C",
          twitch: "#6b3fa0",
        },
        spanishViolet: "#432371",
        MacAndCheese: "#faae7b",
      },
      backgroundImage: {
        "home-gradient-1": "url(./public/svgs/blurry-gradient-hakei.svg)",
      },
    },
    colors: {},
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
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
