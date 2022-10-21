/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'twhite': '#EFEEFE'
      },
      fontFamily:{
        'audiowide': ['audiowide', 'cursive'],
      },
    },
  },
  plugins: [],
}