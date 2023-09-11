/** @type {import('tailwindcss').Config} */
export default {

  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    extend: {
      colors: { 
        'LightBlue': "#40D7E1",
        'darkBlue': "#01BEC9",
        'Green': "#034B47",
        'yellowLight': "#FEFFD1",
        'White': "#FFFFFF",
        'LightGray': "#F6EEE7",
        'Gray': "#F0F0F0",
        'DarkGray': "#6B6B6B",
        'Black': "#000000",
        'YellowDark': "#F7D334",
      },
      fontFamily: {
        'Roboto': ['Roboto'],
      }
    },
  },
  plugins: [],
}