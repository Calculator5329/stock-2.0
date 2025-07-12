/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00ffe1',
        neonPink: '#ff6fcb',
        bgDark: '#0e0e2c',
      },
      fontFamily: {
        title: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'dashboard-grid': "url('/images/dashboard_background.png')",
        'assistant-bg': "url('/images/assistant_panel_background.png')",
        'hero-landing': "url('/images/landing_section.png')",
      },
    },
  },
  plugins: [],
} 