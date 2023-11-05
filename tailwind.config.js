/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        'primary-light': '#C20000', //Primary litt color
        primary: '#480000', //For hovers and basically complementing the primary color
        grey: '#F5F5F5',
        secondary: '#FFB845'
      },
      fontFamily: {
        heading: ['Open Sans'], //this is for the headings
        body: ['Open Sans'] // the main body text font. Applied to App.vue
        // poppins: ['Poppins'], // occassional usage
        // inter: ['Inter'] //Occassional usage
      },
      screens: {
        xs: '480px',
        sm: '600px'
        // => @media (min-width: 992px) { ... }
      }
    }
  },
  plugins: [require('@tailwindcss/forms', 'flowbite/plugin')]
}
