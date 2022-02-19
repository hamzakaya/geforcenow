module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#ff2525',
        black: '#000',
        green: '#76b900',
        white: '#fff',
        darkgrey: '#1e1e1e',
        greymedium: '#666',
        greylight: '#b2b2b2',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
