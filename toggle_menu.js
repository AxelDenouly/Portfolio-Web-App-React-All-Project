document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".nav__toggle");
  const aside = document.querySelector(".aside");

  toggleButton.addEventListener("click", () => {
    // Toggle the `visible` class on the aside
    aside.classList.toggle("visible");

    // Add or remove the `nav__toggle-open` class on the toggle button
    if (aside.classList.contains("visible")) {
      toggleButton.classList.add("nav__toggle-open");
    } else {
      toggleButton.classList.remove("nav__toggle-open");
    }
  });
});



// toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleIcon = document.getElementById("theme-toggle-icon");
  const body = document.body;

  // Charger le thème précédent
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggleIcon.classList.add("active");
    themeToggleIcon.classList.replace("bx-toggle-left", "bx-toggle-right");
  }

  themeToggleIcon.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Alterner l'icône
    if (body.classList.contains("dark-theme")) {
      themeToggleIcon.classList.add("active");
      themeToggleIcon.classList.replace("bx-toggle-left", "bx-toggle-right");
      localStorage.setItem("theme", "dark");
    } else {
      themeToggleIcon.classList.remove("active");
      themeToggleIcon.classList.replace("bx-toggle-right", "bx-toggle-left");
      localStorage.setItem("theme", "light");
    }
  });
});
