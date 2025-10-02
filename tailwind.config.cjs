module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0b0d11',
        dark2: '#0f1724',
        accent: '#6b46c1',
        textgray: '#9CA3AF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
        // helvetica: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: []
}
