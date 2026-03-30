/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'frontier-bg': '#0a0a0f',
        'frontier-secondary': '#0f1117',
        'frontier-blue': '#00d4ff',
        'frontier-blue2': '#0066ff',
        'frontier-cyan': '#00ffcc',
        'frontier-border': '#1a1f2e',
        'frontier-text': '#e2e8f0',
        'frontier-muted': '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
