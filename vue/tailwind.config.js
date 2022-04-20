module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{vue, js,tsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
