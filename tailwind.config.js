/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Pastel Color Palette
        pastelBlue: {
          50: '#f0f9ff',
          100: '#e0f2fe', 
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          DEFAULT: '#bae6fd',
          dark: '#0369a1'
        },
        pastelPink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          DEFAULT: '#fbcfe8',
          dark: '#be185d'
        },
        pastelGreen: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#bbf7d0',
          dark: '#15803d'
        },
        pastelLavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          DEFAULT: '#e9d5ff',
          dark: '#7c3aed'
        },
        pastelYellow: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#fde68a',
          dark: '#b45309'
        },
        pastelPeach: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#fed7aa',
          dark: '#c2410c'
        },
        // Background variations
        background: {
          light: '#f1f7fb',
          dark: '#131f24'
        },
        surface: {
          light: '#f8fafc',
          dark: '#1e293b'
        },
        text: {
          primary: {
            light: '#1e293b',
            dark: '#f1f5f9'
          },
          secondary: {
            light: '#475569',
            dark: '#cbd5e1'
          },
          muted: {
            light: '#64748b',
            dark: '#94a3b8'
          }
        }
      }
    },
  },
  plugins: [],
}

