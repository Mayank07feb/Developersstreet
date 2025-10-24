/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./partials/**/*.ejs",
    "./*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#30add1',
          hover: '#278aa7',
        },
        secondary: {
          DEFAULT: '#000000',
          hover: '#333333',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
