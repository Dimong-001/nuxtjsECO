/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    './pages/**/*.{vue,js}', // Ensure that Tailwind scans your files for classes
    './components/**/*.{vue,js}', // Include all Vue and JS components
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px', // Set the default font size to 16px
      },
      // Add any additional theme extensions here
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
  ],
};

