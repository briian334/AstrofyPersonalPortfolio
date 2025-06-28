function setLanguage(lang: string) {
	try {
		localStorage.setItem("preferredLang", lang);
		document.documentElement.lang = lang;
	} catch (error) {
		console.error("Error al guardar el idioma:", error);
	}
}

function initLangSelector() {
	const links = document.querySelectorAll<HTMLAnchorElement>(".language-link");

	if (!links.length) {
		console.warn("No se encontraron enlaces de idioma.");
		return;
	}

	links.forEach((link) => {
		link.removeEventListener("click", handleClick); // Previene múltiples bindings
		link.addEventListener("click", handleClick);
	});
}

function handleClick(e: MouseEvent) {
	e.preventDefault();

	const link = e.currentTarget as HTMLAnchorElement;

	const newLang = link.getAttribute("data-lang");

	if (!newLang) return;

	setLanguage(newLang);

	const currentPath = window.location.pathname;

	const pathWithoutLang = currentPath.replace(/^\/(es|en)/, "");

	const newPath = `/${newLang}${pathWithoutLang}`;

	window.location.href = newPath;
}

// Inicializa al cargar la primera vez
document.addEventListener("DOMContentLoaded", () => {
	const savedLang = localStorage.getItem("preferredLang");
	if (savedLang) setLanguage(savedLang);
	initLangSelector();
});

// Re-inicializa después de transiciones
document.addEventListener("astro:page-load", () => {
	initLangSelector();
});
