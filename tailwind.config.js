/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      rose: "#F2989F",
      green: "#C2DB9C",
      cream: "#F2F4B5",
      palerose : '#F4E2E3',
      lime : '#BD5663',
      white : '#F5F4E1',
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
