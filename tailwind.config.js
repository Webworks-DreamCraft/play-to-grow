/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "palm-leaf": "#f2fbea",
        "wheat-field-light": "#EFDC98",
        "wheat-field-middle": "#D89428",
        "wheat-field-dark": "#3D1B0B",
        "sage": "#A1A178",
        "error-red-light": "#FFF0F0",
        "error-red-dark": "#D64751",
        "success-green": "#5CB82A"

      },
      fontFamily: {
        patua: ["'Patua One', serif"],
        prata: ["'Prata', serif"]
      },
    },
  },
  plugins: [],
};
