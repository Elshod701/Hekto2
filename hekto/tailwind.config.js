/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1240px",
        },
      },

      colors: {
        prime: "#7E33E0 ",
        wayt: "#FFF",
        pink: "#FB2E86",
        "text-color": "#1A0B5B",
        textcolor2: "#1A0B5B4D",
        bgcolor: "#eeeffb6c",
        foundationwhite: "#f1f0ff",
        brilliantwhite: "#eeeffb",
      },
      backgroundImage: {
        banner: "url('/src/assets/img/banner.png')",
      },
    },
  },
  plugins: [],
};
