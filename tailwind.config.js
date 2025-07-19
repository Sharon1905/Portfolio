/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}' 
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '400px', 
      },
      fontFamily: {
        haptic: [
          'Poppins',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#005bea', 
          dark: '#003973',    
        },
        secondary: {
          DEFAULT: '#00c6fb', 
        },
        accent: {
          DEFAULT: '#39ff14', 
        },
        navy: {
          DEFAULT: '#181d23', 
          dark: '#1a232d',    
        },
        red: {
          DEFAULT: '#ff2c2c', 
        },
        background: {
          light: '#f8fafc',   
          dark: '#18181b',    
        },
        text: {
          light: '#1f2937',   
          dark: '#f8fafc',    
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'scale(0.95)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};