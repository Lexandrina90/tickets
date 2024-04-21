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
      'light-gray-2': '#E4E1E1',
      'blue': '#0ea5e9',
      'transparent-blue': '#e0f2fe',
      'light-orange': '#f97316'
    }
  },
  plugins: [],
}

