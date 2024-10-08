/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0013FE',
        'brand-red': '#FF0033',
        'brand-cyan': '#00FFFF',
      },
      fontFamily: {
        'bangers': ['Bangers', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}