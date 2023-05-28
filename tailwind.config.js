/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '76':'306px',
        '0.2':'1px'
      },
      fontFamily : {
        vazir : ['Vazir']
      },
      
    },
  },
  plugins: [],
}

