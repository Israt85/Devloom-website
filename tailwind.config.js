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
      clipPath: {
        customTab: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

