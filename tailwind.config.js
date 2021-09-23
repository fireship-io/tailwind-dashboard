module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: '#51e1ac',
        accent: '#ff73bb',
        secondary: '#5b6980',
        grayIcon: '#45566c',
        channelBgDark: '#1c2332',
        contentDark: '#21273a',
        navbarDark: '#22283c',
        bottomBar: '#343a46',
      },
    },
  },
  variants: {},
  plugins: [],
};
