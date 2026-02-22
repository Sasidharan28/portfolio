export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#54323e",
        lightBrown: "#645550",
        darkBrown: "#2C2523",

        black: "#1e1917",
        white: "#f1e1d9",

        cyan: "#15b1ed",
        lightCyan: "#88e5f0",
        darkCyan: "#09fbf3",

        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",

        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
      },
     fontFamily: {
  poppins: ["Poppins", "sans-serif"],
  montserrat: ["Montserrat", "sans-serif"],
  josefin: ["Josefin Sans", "sans-serif"],
  bree: ["Bree Serif", "serif"],
  saira: ["Saira", "sans-serif"],
},
    },
  },
  plugins: [],
};