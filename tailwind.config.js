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
          primary: "#f97316",

          secondary: "#374151",

          accent: "#6b7280",

          neutral: "#191D24",

          "base-100": "#2A303C",
        },
      },
    ],
  },
};
