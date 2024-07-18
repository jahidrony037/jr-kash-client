/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        'primary-color': '#86B6F6',
        'secondary-color': '#176B87'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

