module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_200: "#3961FB",
        blue_100: "#EBEFFF",
        gray_100: "#606E85",
        gray_200: "#F0F0F0",
        green_400: "#00B471",
        green_op: "#00B4711A",
        red_400: "#EA3943",
        red_op: "#EA39431A",
        dark: "#0C131F",
        baseGray: "#323233",
        dark_100: "#252526",
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
