<script>
	import _ from 'lodash-es';
	import { onMount } from 'svelte';
	import { JustifiedGrid } from '@egjs/svelte-grid';
	import { sanityAssetUrl } from '$lib/sanity/imageBuilderUrl';

	import Modal from '$lib/components/Modal.svelte';
	import GalleryModal from '$lib/components/GalleryModal.svelte';

	export let data;

	const images = data['gallery_photos'];
	let showModal = false;

	let currIndex = 0;
	let imgToDisplay = null;
	let screenSize;
	let shouldRender = null;
	let loaded = false;
	const handleResize = () => {
		screenSize = window.innerWidth;
		if (screenSize < 640) {
			shouldRender = false;
		} else {
			shouldRender = true;
		}
	};
	onMount(() => {
		handleResize();
		loaded = true;
	});
</script>

<svelte:window on:resize="{handleResize}" />
{#if showModal}
	<Modal bind:isOpen="{showModal}">
		<GalleryModal
			currIndex="{currIndex}"
			imgToDisplay="{imgToDisplay}"
			galleryLength="{images.length}"
		/>
	</Modal>
{/if}

<div class="masonry-wrapper mt-5">
	{#if loaded && shouldRender}
		<JustifiedGrid
			columnRange="{[1, 3]}"
			gap="{5}"
			sizeRange="{[200, 1000]}"
			stretch="{true}"
			stretchRange="{[244, 600]}"
		>
			{#each images as { url }, i}
				<div
					class="img-container cursor-pointer"
					on:click="{() => {
						showModal = true;
						currIndex = i;
						imgToDisplay = url;
					}}"
				>
					<img src="{sanityAssetUrl(url)}" alt="" class="w-full relative text-[0]" />
				</div>
			{/each}
		</JustifiedGrid>
	{:else}
		<div class="flex flex-wrap space-y-3">
			{#each images as { url }, i}
				<div
					class="cursor-pointer"
					on:click="{() => {
						showModal = true;
						currIndex = i;
						imgToDisplay = url;
					}}"
				>
					<img src="{sanityAssetUrl(url)}" alt="" class="w-full h-auto" />
				</div>
			{/each}
		</div>
	{/if}
</div>
