// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a202c', // Dark mode background color
          text: '#e2e8f0', // Dark mode text color
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode based on class
  variants: {
    extend: {
      backgroundColor: ['dark'], // Apply dark mode to background colors
      textColor: ['dark'], // Apply dark mode to text colors
    },
  },
  plugins: [],
};
