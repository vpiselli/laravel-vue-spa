module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    colors: {
      'black': '#222222',
      'blue': '#1747b0',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'grey-dark': '#273444',
      'grey-darkest': '#484848',
      'grey': '#8492a6',
      'grey-light': '#dedede',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    shadows: {
      default: '0 1px 7px 0 rgba(36, 37, 38, 0.08);',
    },
    extend: {},
  },
  plugins: [],
}
