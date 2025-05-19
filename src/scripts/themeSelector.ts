import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "src/config";

// Función para establecer el tema
function setTheme(theme: string) {
	document.documentElement.setAttribute("data-theme", theme);
	localStorage.setItem(THEME_KEY, theme);

	// Actualizar todos los controles de tema
	const themeToggles = document.querySelectorAll(".theme-controller");
	themeToggles.forEach((toggle) => {
		if (toggle instanceof HTMLInputElement) {
			toggle.checked = theme === DARK_THEME;
		}
	});
}

// Función para alternar entre temas
function toggleTheme() {
	const currentTheme = localStorage.getItem(THEME_KEY) || LIGHT_THEME;
	const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
	setTheme(newTheme);
}

// Inicializar el tema (se ejecuta en cada carga de página)
function initTheme() {
	// Obtener el tema guardado o usar 'nord' como predeterminado
	const savedTheme = localStorage.getItem(THEME_KEY) || LIGHT_THEME;
	setTheme(savedTheme);

	// Agregar event listeners a todos los controles de tema
	const themeToggles = document.querySelectorAll(".theme-controller");
	themeToggles.forEach((toggle) => {
		toggle.addEventListener("change", () => {
			toggleTheme();
		});
	});
}

// Exportar funciones para uso en otros archivos
export { setTheme, toggleTheme, initTheme };
