/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#303972",
        lightGold: "#FCC43E",
        secondary: "#A098AE",
        orange: "#FB7D5B"
      }
    },
  },
  plugins: [],
}