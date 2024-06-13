// Da// DarkMode.js
export function initDarkMode(buttonSelector) {
  const darkButtons = document.querySelectorAll(buttonSelector);
  console.log(darkButtons, "darkButtons");

  darkButtons.forEach((darkButton) => {
    darkButton.addEventListener("click", function () {
      // toggle icons inside button
      darkButton.classList.toggle("hidden");
      darkButton.classList.toggle("hidden");
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  });

  loadModeTheme();
}

const loadModeTheme = () => {
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};
