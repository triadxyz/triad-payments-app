module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1B1B1C",
        baseGray: "#323233",
        dark_100: "#252526",
        gray_100: "#939599",
        red_100: "#FF5555",
        red_150: "#FF6C6C",
        red_200: "#932020",
      },
      fontFamily: {
        "poppins-bold": "Poppins_700Bold",
        "poppins-semibold": "Poppins_600SemiBold",
        "poppins-medium": "Poppins_500Medium",
        "poppins-regular": "Poppins_400Regular",
      },
    },
  },
};
