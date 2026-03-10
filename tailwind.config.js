/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        CormorantUpright_300Light: ["CormorantUpright_300Light"],
        CormorantUpright_400Regular: ["CormorantUpright_400Regular"],
        Cinzel_400Regular: ["Cinzel_400Regular"],
        Cinzel_700Bold: ["Cinzel_700Bold"],
        Roboto_400Regular: ["Roboto_400Regular"],
        Roboto_700Bold: ["Roboto_700Bold"],
        Poppins_600SemiBold: ["Poppins_600SemiBold"],
        Roboto_600SemiBold: ["Roboto_600SemiBold"],
      },
    },
  },
  plugins: [],
};
