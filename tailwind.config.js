/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bricolage: ['Bricolage Grotesque', 'sans-serif'],
    },
    extend: {
      fontSize: {
        nav: `1.3rem;`,
      },
      backgroundImage: {
        'architecture-1': "url('/src/assets/images/pexels-mvdheuvel-4254901.jpg')",
        'architecture-2': "url('/src/assets/images/pexels-pixabay-417273.jpg')",
        'building-1': "url('/src/assets/images/pexels-brett-sayles-22605332.jpg')",
        'building-2': "url('/src/assets/images/pexels-fotios-photos-2780551.jpg')",
        'building-3': "url('/src/assets/images/pexels-pixabay-236722.jpg')",
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
}

