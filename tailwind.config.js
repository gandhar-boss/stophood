/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9e8',
          100: '#e9f1c6',
          200: '#d7e89f',
          300: '#bdd069',
          400: '#b9d049',
          500: '#bdd049',
          600: '#a9bc40',
          700: '#9db126',
          800: '#91a321',
          900: '#788c13',
          950: '#3c4c06',
        },
        secondary: {
          50: '#e6f7f6',
          100: '#ceefed',
          200: '#a2e3dd',
          300: '#6ed2ca',
          400: '#3dbbaf',
          500: '#20a396',
          600: '#0d9488',
          700: '#09776d',
          800: '#0b5e56',
          900: '#0b4e48',
          950: '#052e2b',
        },
        accent: {
          50: '#fef3f2',
          100: '#fde3e2',
          200: '#fbcdca',
          300: '#f8aca7',
          400: '#f58078',
          500: '#f97066',
          600: '#de4036',
          700: '#c02e25',
          800: '#9d281f',
          900: '#81261e',
          950: '#460f0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
};