// DarkMode.js
export function initDarkMode(buttonSelector) {
  const darkButtons = document.querySelectorAll(buttonSelector);
  console.log(darkButtons, "darkButtons");

  darkButtons.forEach((darkButton) => {
    darkButton.addEventListener("click", function () {
      // Toggle the theme
      const isDarkMode = document.documentElement.classList.toggle("dark");
      // Update local storage
      localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");

      // Toggle icons
      updateIconVisibility(darkButton, isDarkMode);
    });
  });

  loadModeTheme();
}

const loadModeTheme = () => {
  const savedTheme = localStorage.getItem("color-theme");
  const isDarkMode = savedTheme === "dark";

  document.documentElement.classList.toggle("dark", isDarkMode);
  document.documentElement.classList.toggle("light", !isDarkMode);

  // Actualiza la visibilidad del icono según el tema guardado
  updateIconVisibility(document.querySelector('.dark-mode-button'), isDarkMode);
};

const updateIconVisibility = (button, isDarkMode) => {
  // Cambia las clases del botón según el modo actual
  if (isDarkMode) {
    button.classList.add("hidden-dark-icon");  // Clase para ocultar el ícono claro
    button.classList.remove("hidden-light-icon"); // Clase para mostrar el ícono oscuro
  } else {
    button.classList.add("hidden-light-icon"); // Clase para ocultar el ícono oscuro
    button.classList.remove("hidden-dark-icon"); // Clase para mostrar el ícono claro
  }
};

// Llama a initDarkMode cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode('.dark-mode-button'); // Asegúrate de que este selector coincida con tus botones
});
