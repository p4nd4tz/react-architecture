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
        'building-4': "url('/src/assets/images/pexels-binyaminmellish-1396122.jpg')",
        'mension': "url('/src/assets/images/pexels-pixasquare-1115804.jpg')",
        'country-home': "url('/src/assets/images/pexels-expect-best-79873-323780.jpg')",
        'award1': "url('/src/assets/images/The-World-Architecture-Awards.webp')",
        'award2': "url('/src/assets/images/6c6690aa2ef200c1020a9d3a8179c052.jpg')",
        'ongoing-1': "url('/src/assets/images/pexels-kseniachernaya-5691639.jpg')",
        'ongoing-2': "url('/src/assets/images/pexels-pixabay-7931.jpg')",
        'ongoing-3': "url('/src/assets/images/pexels-umaraffan499-190417.jpg')",
        'ongoing-4': "url('/src/assets/images/pexels-enginakyurt-1463917.jpg')",
        'ongoing-5': "url('/src/assets/images/pexels-lucaspezeta-2100681.jpg')",
        'ongoing-6': "url('/src/assets/images/pexels-d123x-783966.jpg')",
      },
      height: {
        '45p': '45%',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },
      borderWidth: {
        '3': '3px',
      },
      maxHeight: {
        '45p': '45%',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      }
    },
  },
  plugins: [],
}

