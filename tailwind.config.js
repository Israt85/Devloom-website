/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['"Audiowide"', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Arapey: ['Arapey', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui, 
  ],
};
