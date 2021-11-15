const colors = require('tailwindcss/colors');

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
            gray: colors.coolGray,
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
   plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
   ],
};
