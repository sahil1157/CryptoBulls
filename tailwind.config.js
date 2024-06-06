// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        expletus: ['"Expletus Sans"', 'sans-serif'],
        monst: ['Montserrat', 'sans-serif']
      },
      borderImage: {
        'custom-gradient': 'linear-gradient(to bottom, #000000, #0396A6)',
      },
    },
  },
  plugins: [],
}
