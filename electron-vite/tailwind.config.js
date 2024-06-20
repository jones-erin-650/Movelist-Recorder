/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    containter: {
    
    },
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}