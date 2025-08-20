module.exports = {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'fpl-purple': '#37003c',
        'fpl-green': '#00ff87',
        'position-def': '#3b82f6',
        'position-mid': '#10b981',
        'position-fwd': '#ef4444'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
