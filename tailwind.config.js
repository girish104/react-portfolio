/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary: '#fb383b',
        secondary:'#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl' :'1320px',
      },
      fontFamily: {
        emoji: ['emoji'],
      },
    },
  },
  plugins: [],
}
