/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fuenteL:["fuenteL", "sans-serif"],
        fuenteR:["fuenteR", "sans-serif"]
      },
      colors:{
        azul : "#007AC3",
        gris: "#F4F4F4"
      }
    },
  },
  plugins: [],
}

