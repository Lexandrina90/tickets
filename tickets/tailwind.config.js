/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'orange-primary': '#FF5F1F',
      'white': '#fff',
      'light-gray': '#828585',
      'dark-gray': '#636565',
      'gray': '#7A7A7D',
    }
  },
  plugins: [],
}

