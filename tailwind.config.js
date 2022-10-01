/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
colors: {
  strongcyan: 'hsl(171, 66%, 44%)',
  ligthblue: 'hsl(233, 100%, 69%)',
  darkgreyishblue: 'hsl(210, 10%, 33%)',
  grayishblue: 'hsl(201, 11%, 66%)',
  white: '#FFFFFF'
},

    extend: {
      fontFamily: {
        'jamjuree': ['"Bai Jamjuree",san-serif']
      }
    },
  },
  plugins: [],
}
