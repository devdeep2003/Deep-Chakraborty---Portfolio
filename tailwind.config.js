/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',         // Pages in App Router
    './src/components/**/*.{js,ts,jsx,tsx}',   // All components
    './src/projects/**/*.{js,ts,jsx,tsx}',     // Project-specific files
    './src/extracurriculars/**/*.{js,ts,jsx,tsx}', // Extracurriculars
  ],
  darkMode: 'class', // or 'media' if preferred
  theme: {
    extend: {},
  },
  plugins: [],
}
