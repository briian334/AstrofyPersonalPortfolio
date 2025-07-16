// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;
export const THEME_KEY = "theme";
export const DARK_THEME = "sunset";
export const LIGHT_THEME = "nord";
export const LANG_KEY = "lang";
export const SPANISH_LANG = "es";
export const ENGLISH_LANG = "en";

import type { Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = "Portfolio Website by Brian Cervantes";

export const SITE_DESCRIPTION: string | Multilingual = {
	es: "Portfolio Website por Brian Cervantes usando Astrofy Template ⚡️",
	en: "Portfolio Website by Brian Cervantes using Astrofy Template ⚡️",
};
