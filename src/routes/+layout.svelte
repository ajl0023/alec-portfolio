<script>
	import { getContext, onMount } from 'svelte';
	import '../app.css';

	import Navbar from '../lib/components/Navbar.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Modal from '$lib/components/Modal.svelte';
	import GalleryModal from '$lib/components/GalleryModal.svelte';
	import { modalStore } from '$lib/stores/modalStore';

	let pageload = false;
	onMount(() => {
		pageload = true;
	});
</script>

<svelte:head>
	<script async src="https://translate.google.com/translate_a/element.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
</svelte:head>
<div class="main-container overflow-hidden">
	<div class="wrapper m-auto max-w-4xl w-full p-5">
		{#if $modalStore.visible}
			<Modal>
				<GalleryModal />
			</Modal>
		{/if}
		<Navbar />
		{#if pageload}
			<!-- this is needed because no way to force keyed tarnsitions to run on page load -->
			<div in:fade="{{ delay: 200, duration: 300 }}">
				{#key $page}
					<div class="content-wrapper z-[2]" in:fade="{{ delay: 200, duration: 300 }}">
						<slot />
					</div>
				{/key}
			</div>
		{/if}
	</div>
</div>

<style>
</style>
