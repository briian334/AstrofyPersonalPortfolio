import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "src/config";

// Función segura para acceder a localStorage
function safeLocalStorageGet(key: string): string | null {
	try {
		return localStorage.getItem(key);
	} catch (e) {
		console.warn(`No se pudo acceder a localStorage.getItem("${key}")`, e);
		return null;
	}
}

function safeLocalStorageSet(key: string, value: string) {
	try {
		localStorage.setItem(key, value);
	} catch (e) {
		console.warn(`No se pudo acceder a localStorage.setItem("${key}")`, e);
	}
}

// Función para establecer el tema
function setTheme(theme: string) {
	document.documentElement.setAttribute("data-theme", theme);
	safeLocalStorageSet(THEME_KEY, theme);

	const themeToggles = document.querySelectorAll(".theme-controller");
	themeToggles.forEach((toggle) => {
		if (toggle instanceof HTMLInputElement) {
			toggle.checked = theme === DARK_THEME;
		}
	});
}

// Función para alternar entre temas
function toggleTheme() {
	const currentTheme = safeLocalStorageGet(THEME_KEY) || LIGHT_THEME;
	const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
	setTheme(newTheme);
}

// Inicializar el tema (se ejecuta en cada carga de página)
function initTheme() {
	const savedTheme = safeLocalStorageGet(THEME_KEY) || LIGHT_THEME;
	setTheme(savedTheme);

	const themeToggles = document.querySelectorAll(".theme-controller");
	themeToggles.forEach((toggle) => {
		toggle.addEventListener("change", () => {
			toggleTheme();
		});
	});
}

export { setTheme, toggleTheme, initTheme };
