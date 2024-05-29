/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontSize:{
        'custom-size':'13px'
      },
      borderRadius:{
        'custom':'10px'
      },
      colors:{
        'custom-blue':'rgba(86, 59, 255, 1)',
        'custom-yellow':'rgba(255, 112, 73, 1)',
        'custom-green':'rgba(32, 201, 151, 1)',
        'custom-gray':'rgba(90, 88, 129, 1)',
        'custom-white':'rgba(247, 248, 251, 1)',
        'custom-purple':'rgba(21, 19, 75, 1)'
      },
       boxShadow: {
        'custom': '0px 20px 45px 0px rgba(240, 237, 246, 1)',
      },
      lineHeight:{
        'custom-1':'16.41px',
        'custom-2':'28.13px',
        'custom-3':'13px',
        'custom-4':'23.44px'
      }
    },
  },
  plugins: [],
}

