module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: '#51e1ac',
        accent: '#ff73bb',
        secondary: '#536178',
        grayIcon: '#5c6167',
        channelBgDark: '#1c2332',
        contentDark: '#21273a',
        navbarDark: '#22283c',
        bottomBarDark: '#343a46',
        channelBgLight: '#d9e2f9',
        contentLight: '#cdd6f0',
        navbarLight: '#d9e2f9',
        bottomBarLight: '#dae3f6',
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
