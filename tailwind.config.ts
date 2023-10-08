import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter Tight Variable",
          "Inter Tight",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
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
    },
  },
  plugins: [typography, forms],
} satisfies Config;
