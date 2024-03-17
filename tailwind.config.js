/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'click1': 'url(../../public/code-quest/click.png), pointer'
      }
    },
  },
  plugins: [],
}