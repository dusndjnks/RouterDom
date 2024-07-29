/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    screens:{
      'xs':'360px',

      'sm': '640px',

      'md': '768px',
                    
      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    colors:{
      'lime': '#C2cD6',
      'white' : '#ffffff',
      'cream' : '#F2EFE3',
      'black' : "#000000",
      'green' : '#37B7C3',
    },
    extend: {
      backgroundImage:{
        'image': "url('file:///C:/Users/Affan/Downloads/pr/pexels-cottonbro-6626999.jpg')"
      }
    },
  },
  plugins: [],
}