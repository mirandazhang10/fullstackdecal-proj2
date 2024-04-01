/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f9f9f9',
      'black': '#151d28',
      'pink': '#E28CA0',
      'blue': '#4373CF',
      'orange': '#E2954D',
      'green': '#7AB071',
      'trueblack': '#000000',
      'red': '#C14040',
      'purple': '#7B7F9D',
    },
    fontFamily: {
      'sans': ['"Josefin Sans"', 'Arial', 'sans-serif'],
      'body': ['Montserrat', 'Arial', 'sans-serif'],
      'custom': ['GothamRoundedBook', 'Arial', 'sans-serif'],
    },
    extend: {
      keyframes: {
        fadein: {
          '0%': {transform: 'translateY(-2%)', opacity: 0},
          '100%': {transform: 'translateY(0%)', opacity: 1}
        }
      },
      animation: {
        fadein: 'fadein 1.5s ease-in-out',
      }
    },
  },
  plugins: [],
}

