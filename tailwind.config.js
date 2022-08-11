/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFFFFF",
          secondary: "#009393",
          neutral: "rgb(148 163 184)",
          operators: "",
          accent: "#00c0e6",
          "base-100": "#016170",
        },
      },
    ],
  },
};
