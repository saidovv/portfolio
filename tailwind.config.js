/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xl': {'max': '2000px'},

      'xl': {'max': '1279px'},
     
      'lg': {'max': '1000px'},
      
      'md': {'max': '770px'},
      
      'sm': {'max': '639px'},

      'm': {'max': '375px'},
      
    },
    container: {
      screens: {
        // mobile: "900px",
        tablet: "1000px",
        desktop: "1200px",
      },
    },
    extend: {},
  },
  plugins: [],
}