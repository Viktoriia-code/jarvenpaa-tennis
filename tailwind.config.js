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
        darkAccent: "#F76800",
        grayBg: "#E4E5E5",
        gray: "#c8c9c9",
        darkGray: "#7D7D7D",
        darkBlue: "#0A4E91",
        yellow: "#f6b93b",
        darkGreen: "#138C52",
        lightGreen: "#DDE79D",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        text: ["Poppins", "Open Sans"],
        subtitle: ["Inter", "Open Sans"],
      },
      boxShadow: {
        button: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}