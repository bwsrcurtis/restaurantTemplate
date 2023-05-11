/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'text': '#000000',
      'background': '#AAABA8',
      'primary': '#E8BA40',
      'secondary': '#DED4E8',
      'tertiary': '#C7395F',

      'darkText': '#ffffff',
      'darkBackground': '#2e3440',
      'darkPrimary': '#E8BA40',
      'darkSecondary': '#DED4E8',
      'darkTertiary': '#C7395F',

    },
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      fontFamily: {
        'script': 'var(--font-script)',
        'body': 'var(--font-text)',
      }
    },
  },
  plugins: [],
};
