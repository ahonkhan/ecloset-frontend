/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   // 'sm': '520px',
    //   // => @media (min-width: 576px) { ... }

    //   // 'md': '960px',
    //   // // => @media (min-width: 960px) { ... }

    //   // 'lg': '1440px',
    //   // // => @media (min-width: 1440px) { ... }
    // },
    extend: {
      screens: {
        'xs': '380px',
        // => @media (min-width: 576px) { ... }
      },
      colors: {
        'LightBlue': "#40D7E1",
        'darkBlue': "#01BEC9",
        'Green': "#034B47",
        'GreenLight': '#057c75',
        'YellowLight': "#FEFFD1",
        'GreenDark': '#011a19',
        'Teal': '#07ada4',
        'White': "#FFFFFF",
        'LightGray': "#F6EEE7",
        'Gray': "#F0F0F0",
        'DarkGray': "#6B6B6B",
        'Black': "#000000",
        'YellowDark': "#F7D334",
        'Red': '#FF2B2B',
      },
      fontFamily: {
        'Roboto': ['Roboto'],
        'Literata': ['Literata'],
        'WorkSans': ['Work Sans'],
        'Poppins': ['Poppins'],
        'Ubuntu': ['Ubuntu'],
        'Exo': ['Exo'],

      }
    },
  },
  plugins: [],
}