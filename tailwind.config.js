/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F0F7FF',
          DEFAULT: '#111827',
          accent: '#1F51FF',
        }
      },
    },
  },
  plugins: [],
}

