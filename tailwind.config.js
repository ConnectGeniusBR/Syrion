/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'], // Adicione sua fonte personalizada aqui
      }

      ,colors: { laranja: "#FF4501", cinza: "#101010", branco: "#F0F6FF" }, },screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
        
    }

  },
  plugins: [],
};