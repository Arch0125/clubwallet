/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/bg.svg')",
      },
      fontFamily:{
        'sans': ['Montserrat','Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}