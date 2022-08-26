/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}'],
  darkmode: false,
  theme: {
    extend: {},
  },
    plugins: [require('@tailwindcss/forms')],
}
