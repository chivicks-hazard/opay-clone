/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: '#FFFFFF',
        lightRed: '#F9B8B8',
        lightOrange: '#F9DCB8',
        lightYellow: '#F9F6B8',
        'lightGreen-1': '#CFF9B8',
        'lightGreen-2': '#B8F9C5',
        'lightBlue-1': '#B8F9E9',
        'lightBlue-2': '#B8E6F9',
        'lightBlue-3': '#B8C2F9',
        lightPurple: '#D2B8F9'
      }
    },
  },
  plugins: [],
}