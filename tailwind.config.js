/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  
  
  plugins: [
    require ('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d62839",
          "primary-text": "#000000",
          "secondary": "#a3bf50",
          "accent": "#ffc719",
          "neutral": "#99c1b9",
          "base-100": "#e0e2db",
          "info": "#41ffff",
          "success": "#9affdc",
          "warning": "#fff129",
          "error": "#ffbab9",
        }
      }
    ]
  }

}

