/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#b55d1e",
      
"secondary": "#89b6d3",
      
"accent": "#ffd6bf",
      
"neutral": "#261627",
      
"base-100": "#EAEAEB",
      
"info": "#8EA8F6",
      
"success": "#11887C",
      
"warning": "#B38B14",
      
"error": "#F76E70",
      },
    },
  ],
  plugins: [require("daisyui")],
}
