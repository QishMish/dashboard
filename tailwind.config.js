/** @format */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    './src/**/*.{html,js}',
    './src/**/*.{html,js}',
    './src/components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
