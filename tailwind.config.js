/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "376px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "palm-leaf": "#f2fbea",
        "wheat-field-light": "#EFDC98",
        "wheat-field-middle": "#D89428",
        "wheat-field-dark": "#3D1B0B",
        sage: "#A1A178",
        "error-red-light": "#FFF0F0",
        "error-red-dark": "#D64751",
        "success-green": "#5CB82A",
        "sage": "#A1A178",
        "error-light": "#FFF0F0",
        "error-dark": "#D64751",
        "success": "#5CB82A",
        "gray-choice": "#00000066"
      },
      fontFamily: {
        patua: ["'Patua One', serif"],
        prata: ["'Prata', serif"],
      },
      backgroundImage: {
        landing: "url('../public/desktop_images/Landing.png')",
        aboutHeader: "url('/about_header.png')",
        servicesHeader: "url('/services_header.png')",
        aboutBackground: "url('/desktop_images/about_background.png')",
        servicesBackground: "url('/desktop_images/services_background.png')",
      },
    },
  },
  plugins: [],
};
