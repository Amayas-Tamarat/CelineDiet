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
      blue : "#042940"
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    fontSize: {
      xs: '0.7rem' ,
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  
  plugins: [],
  
};
