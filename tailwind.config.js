/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        bebas :  "'Bebas Neue', sans-serif",
        montserrat : "'Montserrat', sans-serif",
        roboto : "'Roboto', sans-serif",
        josefin : "'Josefin Sans', sans-serif",
         
      },
    },
  },
  plugins: [require("daisyui")],
}