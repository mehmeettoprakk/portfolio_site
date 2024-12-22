module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Dark mode class tabanlı yapılıyor
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Font ailesini koruyoruz
      },
    },
  },
  plugins: [require("daisyui")], // DaisyUI'yi dahil ediyoruz
  daisyui: {
    themes: ["light", "dark"], // DaisyUI temaları
  },
};
