module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        good: 'var(--good)',
        moderate: 'var(--moderate)',
        usg: 'var(--usg)',
        unhealthy: 'var(--unhealthy)',
        'very-unhealthy': 'var(--very-unhealthy)',
        hazardous: 'var(--hazardous)',
      }
    },
  },
  plugins: [],
}
