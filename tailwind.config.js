/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "palm-leaf": "#f2fbea",
        "wheat-field": "#3D1B0B",
      },
      fontFamily: {
        patua: ["'Patua One', serif"],
        prata: ["'Prata', serif"]
      },
    },
  },
  plugins: [],
};
