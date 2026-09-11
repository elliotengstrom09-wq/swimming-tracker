/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lsk: '#3b82f6',      // Blå
        neppan: '#ef4444',   // Röd
        skk: '#10b981',      // Grön
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
