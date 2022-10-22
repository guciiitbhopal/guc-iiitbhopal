/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twhite: "#EFEEFE",
        bgblue: "#000012",
      },
      fontFamily: {
        audiowide: ["audiowide", "cursive"],
        IBM: ['IBM Plex Sans Arabic', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Sora:['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
