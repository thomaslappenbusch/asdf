/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cyberpunk", "luxury", "wireframe", "lofi"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
