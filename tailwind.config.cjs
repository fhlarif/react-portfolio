/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('/public/assets/black_bk6.jpg')",
      },
    },
  },
  plugins: [],
};
