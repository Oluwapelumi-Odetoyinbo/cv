/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5EE',
        black: '#111111',
        yellow: '#FFDF21',
        olive: '#929559',
        warmbg: '#F2EAD8'
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'brutalist': '4px 4px 0px #111111',
        'brutalist-hover': '6px 6px 0px #111111',
        'soft': '0 10px 40px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
