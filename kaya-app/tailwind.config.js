/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      monospace: ['Inconsolata', 'monospace']
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        20: '#F4F4F7',
        40: '#F5F7FB',
        70: '#94A3AE',
        80: '#6F6F7D',
        90: '#0A0B22'
      },
      blue: "#607FF0",
      gradient: {
        "main": "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
      }

    },
    extend: {
      
    },
  },
  plugins: [],
};
