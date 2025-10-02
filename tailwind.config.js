/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // make sure src is included
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",   
        secondary: "#F43F5E", 
      },
    },
  },
  plugins: [],
};
