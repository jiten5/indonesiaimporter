import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#1A73E8',
          50: '#E8F1FD',
          100: '#D1E3FB',
          200: '#A3C7F7',
          300: '#75ABF3',
          400: '#478FEF',
          500: '#1A73E8',
          600: '#1557B0',
          700: '#104184',
          800: '#0B2C58',
          900: '#06162C',
        },
        secondary: {
          DEFAULT: '#34A853',
          50: '#E8F5EC',
          100: '#D1EBD9',
          200: '#A3D7B3',
          300: '#75C38D',
          400: '#47AF67',
          500: '#34A853',
          600: '#2A8642',
          700: '#206432',
          800: '#154221',
          900: '#0B2111',
        },
        accent: {
          DEFAULT: '#EA4335',
          50: '#FDEBE9',
          100: '#FBD7D3',
          200: '#F7AFA7',
          300: '#F3877B',
          400: '#EF5F4F',
          500: '#EA4335',
          600: '#BB362A',
          700: '#8C2820',
          800: '#5E1B15',
          900: '#2F0D0B',
        },
        // Neutral Colors
        background: '#FFFFFF',
        surface: '#F8F9FA',
        border: '#E8EAED',
        text: {
          primary: '#202124',
          secondary: '#5F6368',
          tertiary: '#80868B',
        },
        // Additional UI Colors
        success: '#34A853',
        warning: '#FBBC04',
        error: '#EA4335',
        info: '#1A73E8',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': [
          '4.5rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em' },
        ],
        'display-lg': [
          '3.75rem',
          { lineHeight: '1.15', letterSpacing: '-0.02em' },
        ],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': [
          '2.25rem',
          { lineHeight: '1.25', letterSpacing: '-0.01em' },
        ],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
        hard: '0 8px 24px rgba(0, 0, 0, 0.12)',
        'elevation-1':
          '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'elevation-2':
          '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
        'elevation-3':
          '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
        'elevation-4':
          '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
        'elevation-5': '0 20px 40px rgba(0, 0, 0, 0.2)',
        'glow-primary': '0 0 20px rgba(26, 115, 232, 0.3)',
        'glow-secondary': '0 0 20px rgba(52, 168, 83, 0.3)',
        'glow-accent': '0 0 20px rgba(234, 67, 53, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #1A73E8 0%, #1557B0 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #34A853 0%, #2A8642 100%)',
        'gradient-accent': 'linear-gradient(135deg, #EA4335 0%, #BB362A 100%)',
        'gradient-mesh':
          'radial-gradient(at 40% 20%, rgba(26, 115, 232, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(52, 168, 83, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(234, 67, 53, 0.3) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
