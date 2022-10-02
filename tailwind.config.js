/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        txt: "#858792",
        background: "#2a2c39",
        conten: "#252734",
        borderOn: "#4e4e4e",
        github: "#B3541E",
        card: "#FBF8F1",
        textligth: "#5E454B",
        ftext: "#cdcdcd",
      },
    },
  },
  plugins: [],
};
