module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans Mono", "sans-serif"],
      },
    },
    plugins: [require("daisyui")],
  },
};
