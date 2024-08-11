npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
npm i daisyui@latest @tailwindcss/typography
for daisyui