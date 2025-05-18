import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "src/config";

// Aplica el tema guardado, si existe
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Actualiza el estado de los checkboxes
  document.querySelectorAll<HTMLInputElement>(".theme-controller").forEach((el) => {
    el.checked = savedTheme === DARK_THEME;
  });
}

// Escucha cambios en los inputs de tipo checkbox
document.querySelectorAll<HTMLInputElement>(".theme-controller").forEach((el) => {
  el.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    const newTheme = target.checked ? DARK_THEME : LIGHT_THEME;

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  });
});
