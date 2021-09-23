module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: '#51e1ac',
        accent: '#ff73bb',
        secondary: '#6f7682',
        grayIcon: '#57606c',
        channelBgDark: '#303843',
        contentDark: '#242a32',
        navbarDark: '#2f353f',
        bottomBar: '#343a46',
      },
    },
  },
  variants: {},
  plugins: [],
};
