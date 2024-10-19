/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        accent: "#FF861E",
        grayBg: "#E4E5E5",
        darkBlue: "#0A4E91",
        yellow: "#F6D217"
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        text: ["Poppins", "Open Sans"],
        subtitle: ["Inter", "Open Sans"],
      },
    },
  },
  plugins: [],
}