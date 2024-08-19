/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      rose: "#F2989F",
      green: "#C2DB9C",
      grey: "#514F59",
      black: "#0C0B0D",
      lime : '#BD5663',
      white : '#EBEBEB',
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  
  plugins: [],
  
};
