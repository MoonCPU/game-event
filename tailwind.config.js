/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: '#302C51', 
        mycolor2: '#4F3249', 
        mycolor3: '#AC3033',
        mycolor4: '#A18CAB',
        mycolor5: '#39ff14',
      },
    },
  },
  plugins: [],
}