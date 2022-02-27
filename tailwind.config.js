module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      bellefair: ["Bellefair", "sans-serif"],
    },
    extend: {
      colors: {
        "space-black": "#0B0D17",
        "space-purple": "#D0D6F9",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/home/background-home-desktop.jpg')",
        "hero-bg-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "technology-desktop": "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet": "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile": "url('/assets/technology/background-technology-mobile.jpg')",

      },
    },
  },
  plugins: [],
};
