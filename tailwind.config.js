module.exports = {
  purge: {
    content: ['./src/**/*.jsx', './src/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: { DEFAULT: '20px', sm: '40px' },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
