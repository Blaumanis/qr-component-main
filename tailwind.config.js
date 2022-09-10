/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '325': '325px',
      },
      colors: {
        'white' : 'hsl(0, 0%, 100%)',
        'light-gray' : 'hsl(212, 45%, 89%)',
        'grayish-blue' : 'hsl(220, 15%, 55%)',
        'dark-blue' : 'hsl(218, 44%, 22%)',
        'blue' : 'hsl(216,100%,61%)',
      },
      fontFamily: {
        'outfit': ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        'base' : '15px',
      },
    },
  },
  plugins: [],
}
