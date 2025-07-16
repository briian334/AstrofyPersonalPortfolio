export const DEFAULT_LOCALE_SETTING: string = "es";

interface LocaleSetting {
	[key: Lowercase<string>]: {
		label: string;
		lang?: string;
		dir?: "rtl" | "ltr";
		flag?: string;
	};
}

export const LOCALES_SETTING: LocaleSetting = {
	es: {
		label: "Español",
		lang: "es-ES",
		flag: "mx",
	},
	en: {
		label: "English",
		lang: "en-US",
		flag: "us",
	},
};
