colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  prefix: "",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      minWidth: {
        xxs: "32rem",
      },
      colors: {
        truegray: colors.neutral,
        truered: colors.rose,
        trueblue: colors.sky,
        truegreen: colors.emerald,
        trueyellow: colors.amber,
      },
      cursor: {
        grab: "grab",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
