export const DEFAULT_LOCALE_SETTING: string = "es";

interface LocaleSetting {
	[key: Lowercase<string>]: {
		label: string;
		lang?: string;
		dir?: "rtl" | "ltr";
	};
}

export const LOCALES_SETTING: LocaleSetting = {
	es: {
		label: "Spanish",
		lang: "es-ES",
	},
	en: {
		label: "English",
		lang: "en-US",
	},
};
