<script>
	import { translations, languageStore } from '$lib/stores/translationStore';
	import { get } from 'svelte/store';
	export let text;
	//text is array of strings with list of translations for each language

	const getLang = () => {
		lang = get(languageStore);
		key = text.find((item) => item._key === text)?.value;
	};
	let val = '';
	let lang;
	let key;
	languageStore.subscribe((value) => {
		value = value.value;
		lang = value;
		if (text && Array.isArray(text)) {
			key = text.find((item) => item._key === lang)?.value;
			val = key;
		}
	});
</script>

<span>{val}</span>
