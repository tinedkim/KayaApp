/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      inconsolata: ['Inconsolata', 'monospace']
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        20: '#F5F7FB',
        40: '#F4F4F7',
        70: '#94A3AE',
        80: '#6F6F7D',
        90: '#0A0B22'
      },
      blue: "#607FF0",

    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': "linear-gradient(180deg, rgba(229, 162, 165, 1) 0%, rgba(163, 180, 242, 1) 70%)"
      }),
      boxShadow: {
        'card': '2px 2px 10px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
};
