/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-pattern': "url('https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-kashmir.png')",
      },
      gridTemplateColumns: {
        '22': 'repeat(21,minmax(0,1fr))'
      },
      gridTemplateRows: {
        '26': 'repeat(26,minmax(0,1fr))'
      },
      gridColumn: {
        'span-14': 'span 14/ 22',
        'span-16': 'span 16/ 22',
        'span-21': 'span 21/ 22',
        'span-22': 'span 22/ 22'
      },
      gridRow: {
        'span-24': 'span 24/ 26',
        'span-24': 'span 24/ 26',
        'span-26': 'span 26/ 26'
      }
    },
  },
  plugins: [],
}