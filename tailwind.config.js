/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['"Audiowide"', 'sans-serif',],
        Poppins: ['Poppins', 'sans-serif',],
        Arapey: ['Arapey', 'sans-serif',],
        Inter: ['Inter', 'sans-serif',],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

