/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
      },
      fontFamily:{
        Montserrat:"Montserrat",
        Leauge:'League Spartan',
        PlayfairDisplay:"Playfair Display"
      },
     colors:{
      grwhite:"#F8F8F8",
      lightblack:"#4b4b4b",
      cream:"#F8F8F8",
      sale:'#E91E63',
      linearf:'#F3F2F2',
      lineart:'#DCDBDB',
      primary: {"50":"#f8fafc","100":"#f1f5f9","200":"#e2e8f0","300":"#cbd5e1","400":"#94a3b8","500":"#64748b","600":"#475569","700":"#334155","800":"#1e293b","900":"#0f172a","950":"#020617"}

    
     },
     keyframes:{
      'slider':{
        '0%':{transform:'scaleX(0)'},
        '80%':{transform:'scaleX(1.1)'},
        '100%':{transform:'scaleX(1)'},
      },
      'slider-top':{
        '0%':{transform:'scaleY(0)'},
        '80%':{transform:'scaleY(1.1)'},
        '100%':{transform:'scaleY(1)'},
      },
    },
    animation:{
      'slider':'slider 0.5s ease-in-out forwards',
      'slider-top':'slider-top 0.5s ease-in-out forwards',
    }
    },
  },
  plugins: [],
});
