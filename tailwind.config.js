/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            barlow: "barlow",
            bubble: "bubble",
            buda: "buda",
         },
         backgroundImage: {
            dashboardBg: "url('/src/assets/images/Homepages/homepage1.jpg')",
         },
         textShadow: {
            sm: "0 1px 2px var(--tw-shadow-color)",
            DEFAULT: "0 2px 4px var(--tw-shadow-color)",
            lg: "3px 4px 5px var(--tw-shadow-color)",
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
   plugins: [
      plugin(function ({ matchUtilities, theme }) {
         matchUtilities(
            {
               "text-shadow": (value) => ({
                  textShadow: value,
               }),
            },
            { values: theme("textShadow") }
         );
      }),
      require("daisyui"),
   ],
};
