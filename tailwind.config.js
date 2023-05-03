/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#fff",
      red: "#F45050",
      card: "#F9D949",
      text: "#000",
      green: "#1c5f30",
      gray: "#E9EEF0",
      blue: "#4682b4",
      bestyellow: "#f7df57",
      bestgray: "#75767b",
      bestgreen: "#92e3a9",
      bestblue: "#4f52ff",
      bestred: "#ea5f5a",
      lightGray: "#cdcccc",
      softGreen: "#38b13c",
    },
    extend: {
      keyframes: {
        wave: {
          "100%": { transform: "translateY(-4px)" },
          "60%": { transform: "translateY(-6px)" },
          "50%": { transform: "translateY(-8px)" },
          "40%": { transform: "translateY(-10px)" },
          "30%": { transform: "translateY(-10px)" },
          "20%": { transform: "translateY(-8px)" },
          "10%": { transform: "translateY(-6px)" },
          "0%": { transform: "translateY(-4px)" },
        },
      },
      gridTemplateColumns: {
        fill: "repeat(auto-fit, minmax(150px, 1fr))",
        fit: "repeat(auto-fit, minmax(150px, 1fr))",
      },
      animation: {
        up: "wave 2s linear  infinite",
      },
      backgroundImage: {
        back: "url('/background3.png')",
        back1: "url('/back.png')",
        mask: "url('/trans1.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
