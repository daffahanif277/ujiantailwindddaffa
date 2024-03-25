/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    extend: {
      colors:{
      f1 : "#31A0FE",
      f2 : "#23856D",
      f3 : "#EC5C2E",
      f4 : "#E1F4FF",
      df1 : "#252B42",
      df2 : "#394264",
      },
      backgroundImage: {
        bg1 : "url('../img/cp-bg.png')",
        bg2 : "url('../img/cp-bg-2.png')",
        dbg1 :"url('../img/dark-header.png')",
        dbg2 :"url('../img/dark-content.png')"
      }
    },
  },
  plugins: [],
  darkMode:'class'
}