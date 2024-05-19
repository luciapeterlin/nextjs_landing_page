/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-gradient': '#FAFAFA',
        'light-gray': '#E1E5EC',
        'medium-gray-300': '#E0E0E0',
        'medium-gray-500': '#9E9E9E',
        'medium-gray-700': '#616161',
        'medium-gray-900': '#212121',
        'primary-blue': '#0451DD',
      },
      fontSize: {
        'xs': '0.625rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
};
