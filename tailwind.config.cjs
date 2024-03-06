/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        'custom-max-width': '1152px',
      },
      screens: {
        'page-width': '1152px',
      },
      display: ['group-hover'],
      backgroundImage: {
        'odd-gradient':
          'linear-gradient(153deg, rgba(209,209,247,1) 44%, rgba(255,255,255,1) 84%)',
        'even-gradient':
          'linear-gradient(153deg, rgba(98,93,245,1) 30%, rgba(209,209,247,1) 55%, rgba(255,255,255,1) 86%);',
        'primary-gradient':
          'linear-gradient(153deg, rgba(98,93,245,1) 0%, rgba(178,176,250,1) 15%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 100%)',
      },
      colors: {
        'primary-color': '#625DF5',
        'primary-hover': '#342df2',
        'primary-focus': '#4b42ad',
        'light-blue': '#99c0ff',
        'light-primary-color': '#d1d1f7',
      },
      aspectRatio: {
        '5/4': '5 / 4',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
};
