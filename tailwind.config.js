const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
      body: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        16: "16px",
      },
      colors: {
        main: "#357960",
        secondary: "#E6F0DC",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
