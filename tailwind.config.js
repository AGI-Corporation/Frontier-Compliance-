/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        frontier: {
          bg: '#0a0a0f',
          surface: '#111118',
          border: '#1e1e2e',
          cyan: '#00d4ff',
          purple: '#7c3aed',
          'cyan-dim': '#00a8cc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      }
    }
  },
  plugins: []
}
