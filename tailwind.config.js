/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ["CabinetGrotesk", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      colors:{
        primary: "#800080",
      },
      borderWidth:{
        slim: "1.5px",
      },
      
    },
  },
  plugins: [],
}
