const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'malvery': ["Malvery", ...defaultTheme.fontFamily.sans],
        'malveryOutline': ["MalveryOutline", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};