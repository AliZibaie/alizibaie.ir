/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'iran-yekan': ['Iran Yekan', 'Tahoma', 'sans-serif'],
        'vazir': ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef7cd',
          200: '#feeb95',
          300: '#fdd949',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'golden-glow': 'golden-glow 3s ease-in-out infinite',
        'gradient': 'gradient-shift 6s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'scale-up': 'scale-up 0.3s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideInRight': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounceIn': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'golden-glow': {
          '0%, 100%': { textShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          '50%': { textShadow: '0 0 40px rgba(251, 191, 36, 0.6)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
