/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './app.vue', // Ensure app.vue is scanned
  ],
  theme: {
    extend: {
      fontFamily: {
        khmer: ['"Noto Sans Khmer"', 'sans-serif'], // Ensure proper quotation
      },
    },
  },
  plugins: [],
};
