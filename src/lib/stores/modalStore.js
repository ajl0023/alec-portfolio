import { writable } from 'svelte/store';

function createModal() {
	const { subscribe, set, update } = writable({
		visible: false,
		imgToDisplay: null,
		currIndex: null,
		imagesLength: 0
	});

	return {
		subscribe,
		set,
		update
	};
}

export const modalStore = createModal();
