/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'SF': ['SF Pro Display', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif']
      },
      screens: {
        'go': '968px',
        'so': '849px',
        'co': '600px'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/img/s1-bg.svg')",
        'pattern': "url('/public/img/s2-bg.svg')",
        'patter': "url('/public/img/bgcam.svg')",
        'p4': "url('/public/img/p4-s3.svg')"
        
      }
    },
  },
  plugins: [],
}

