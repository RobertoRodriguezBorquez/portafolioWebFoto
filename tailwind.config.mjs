/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
import tailwindcssAnimated from 'tailwindcss-animated';

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
  plugins: [
    tailwindcssAnimated,
    flowbite,
    function ({ addUtilities }) {
      const extendUtilities = {
        ".text-stretch": {
          letterSpacing: "0.2em", // Ajusta el valor según tus necesidades
        },
      };

      addUtilities(extendUtilities, ["responsive", "hover"]);
    },
  ],
};
