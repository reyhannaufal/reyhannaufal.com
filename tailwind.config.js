// eslint-disable-next-line no-undef
const colors = require('tailwindcss/colors');

// eslint-disable-next-line no-undef
module.exports = {
   purge: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './routes/**/*.{js,ts,jsx,tsx}',
   ],
   mode: 'jit',
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            blue: colors.sky,
            red: colors.rose,
            pink: colors.fuchsia,
            primary: '#0B315E',
            secondary: '#5F6A8E',
            coolGray: '#8B8B8B',
         },
      },
   },
   variants: {
      extend: {},
   },
   // eslint-disable-next-line no-undef
   plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
