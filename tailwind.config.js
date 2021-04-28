const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          900: '#1C5476',
          800: '#556cd6',
          100: '#6e82dc',
          200: '#3e6e8a',
        },
        gray: {
          ...colors.gray,
          600: '#424242',
          800: '#303030',
        },
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
      display: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
