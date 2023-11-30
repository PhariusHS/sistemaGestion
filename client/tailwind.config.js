/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'640px'
    }, 
    minHeight: {
      '4/5': '80%',
    },
    extend: {
      gridTemplateColumns: {
        NavBar: 'repeat(4, minmax(50%, 1fr))',
      }
    },
  },
  plugins: [],
}
