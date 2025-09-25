/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CA9365", // warm gold
        secondary: "#355BA3", // royal blue
        lavender: "#b79cd2ff", // soft purple
        stone: "#D2C7BB", // light beige
        charcoal: "#232124", // deep near-black
        clay: "#C18763", // terracotta
        sand: "#EAC495", // creamy gold
        ivory: "#E8E5E3", // very light background
        copper: "#A86944", // burnt orange
        slate: "#928E8C", // soft gray
      },
    },
  },
  plugins: [],
};
