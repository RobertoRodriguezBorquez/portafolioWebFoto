/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      spectral: ["Spectral", "serif"],
      playfair: ["Playfair Display SC", "serif"],

    },
    extend: {
      colors: {
        primary: "#232937",
      },
      scale: {
        130: "1.3",
      },
      transitionProperty: {
        transform: "transform",
      },
    },
  },
  plugins: [require("flowbite/plugin")],

  plugins: [
    // Para animaciones
    require("tailwindcss-animated"),
    /* para dar estiramiento testo h1 de seccion hero */
    function ({ addUtilities }) {
      const extendUtilities = {
        ".text-stretch": {
          letterSpacing: "0.2em", // Ajusta el valor según tus necesidades
        },
      };

      addUtilities(extendUtilities, ["responsive", "hover"]);
    },
    require("flowbite/plugin"),
  ],
};

