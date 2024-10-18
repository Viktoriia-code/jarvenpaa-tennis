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