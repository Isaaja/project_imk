/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "barlow",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EE4E4E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
