module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#51e1ac',
        accent: '#ff73bb',
        secondary: '#6f7682',
      },
    },
  },
  variants: {},
  plugins: [],
};
