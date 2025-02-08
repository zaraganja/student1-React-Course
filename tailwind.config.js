/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Pocheavsk:["Pochaevsk","sans-serif"],
        DoranBold:["DoranBold","sans-serif"]
      },
      colors:{
        mainMyShopColor: "#536ac4"
      }
    },
  },
  plugins: [],
}

