module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'indigo-lighter': '#b3bcf5',
      'indigo': '#5c6ac4',
      'indigo-dark': '#202e78',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
