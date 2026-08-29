/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dfeaff',
          500: '#4f7cff',
          600: '#3d68ea',
          700: '#2d52c6',
        },
        navy: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
    },
  },
  plugins: [],
};
