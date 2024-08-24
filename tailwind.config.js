/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'custom-image': "url('/assets/bg.jpg')",
        }
      }
    }
  }