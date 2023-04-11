/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F24C62',
        secondary: '#49C6DD',
        success: '#3CB371',
        danger: '#DC143C',
        warning: '#FFD700',
        info: '#00BFFF',
      },
    },
  },
  plugins: [],
}
