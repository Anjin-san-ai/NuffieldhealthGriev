/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Important: disable Tailwind's preflight so MUI's CssBaseline owns base styles
  // (prevents button/heading style conflicts).
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        nuffield: {
          primary: '#00A39E',
          dark: '#005F5C',
          accent: '#33B6B2',
          bg: '#F7FAFA',
          surface: '#FFFFFF',
        },
        severity: {
          low: '#10B981',
          medium: '#F59E0B',
          high: '#EF4444',
          critical: '#7F1D1D',
        },
        slate: {
          ink: '#1F2937',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [],
};
