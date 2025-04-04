/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        green:{
          100: "#F8F8F2"
        },
      },
      fontFamily:{
        grechen: ["Grechen Fuemen", "serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
}