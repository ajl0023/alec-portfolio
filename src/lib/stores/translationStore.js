import { writable } from 'svelte/store';

export const languageStore = writable({ label: 'English', value: 'en' });

export const translations = {
	en: {
		hello: 'Hello',
		goodbye: 'Goodbye'
	},
	es: {
		hello: 'Hola',
		goodbye: 'Adiós'
	},
	fr: {
		hello: 'Bonjour',
		goodbye: 'Au revoir'
	}
};

export const setCurrentLanguage = (lang) => {
	languageStore.set(lang);
};
