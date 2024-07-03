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
   plugins: [require("daisyui")],
};