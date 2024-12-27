/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ["Poppins", "serif"],
        Volkhov: ["Volkhov", "serif"]
      },
      colors:{
        brandColor: "#FA7436",
        primaryColor: "#222222",
        bgColor: "#FEFCFB",
        bgColor2: "#F7F8FC"
      }
    },
    container:{
      center: true
    }
  },
  plugins: [],
}