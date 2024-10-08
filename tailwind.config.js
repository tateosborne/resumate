/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-orange': 'rgb(225, 85, 6)',
        'theme-orange-light': 'rgb(229, 115, 65)',
        'theme-orange-super-light': 'rgb(255, 218, 202)',
        'white': '#ffffff',
        'text-color': 'text-gray-600',
      },
      boxShadow: {
        'orange': '0 0 6px 4px rgba(225, 85, 6, 0.5)',
      },
      height: {
        '128': '32rem', 
        '144': '36rem',
        '160': '40rem',
      },
    },
  },
  plugins: [],
}

