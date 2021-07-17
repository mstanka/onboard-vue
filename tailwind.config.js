module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        card: '14rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
