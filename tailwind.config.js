module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      bellefair: ["Bellefair", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/home/background-home-desktop.jpg')",
        "hero-bg-mobile": "url('/assets/home/background-home-mobile.jpg')"
      },
    },
  },
  plugins: [],
};
