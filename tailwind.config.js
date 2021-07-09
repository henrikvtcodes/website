const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        manatee: '#9CA3AF',
        jet: '#2c2f33',
        charleston: '#23272a'
      },
      orange: {
        spanish: '#e36414',
        dark: '#fb8b24',
        flame: '#e25822'
      },
      blue: {
        celadon: '#457b9d',
        prussian: '#1d3557',
        pacific: '#0eb1d2',
        azure: '#3185fc',
        jeans: '#00a6fb'
      },
      purple: {
        amethyst: '#a663cc',
        wisteria: '#b298dc',
        electric: '#b14aed',
      }
    },
    fontFamily: {
      sans: ['Uni Sans Heavy', 'sans-serif'],
      serif: ['Whitney', 'Helvetica'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
