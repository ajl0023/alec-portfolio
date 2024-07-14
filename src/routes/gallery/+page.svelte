<script>
	import { sanityAssetUrl } from '$lib/sanity/imageBuilderUrl';
	import { JustifiedGrid } from '@egjs/svelte-grid';
	import { onMount } from 'svelte';

	import { modalStore } from '$lib/stores/modalStore';

	export let data;

	const images = data['gallery_photos'];

	$modalStore.imagesLength = images.length;
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
		return () => {
			$modalStore.visible = false;
			$modalStore.currIndex = null;
			$modalStore.imgToDisplay = null;
		};
	});

	// Provide the store context

	function openModal(i, url) {
		$modalStore.visible = true;
		$modalStore.currIndex = i;
	}
	$: {
		$modalStore.imgToDisplay = images[$modalStore.currIndex]?.url;
	}

	$: if ($modalStore.visible === true) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
</script>

<svelte:window on:resize="{handleResize}" />

<div class="masonry-wrapper mt-5">
	{#if loaded && shouldRender}
		<JustifiedGrid
			columnRange="{[1, 3]}"
			gap="{5}"
			on:renderComplete="{() => {
				shouldRender = true;
			}}"
			sizeRange="{[200, 1000]}"
			stretch="{true}"
			stretchRange="{[244, 600]}"
		>
			{#each images as { url }, i}
				<div
					class="img-container cursor-pointer"
					on:click="{() => {
						openModal(i, url);
					}}"
				>
					<img src="{sanityAssetUrl(url)}" alt="" class="w-full relative text-[0]" />
				</div>
			{/each}
		</JustifiedGrid>
	{:else}
		<div class="flex flex-wrap space-y-3">
			{#each images as { url }, i}
				<div class="cursor-pointer">
					<img src="{sanityAssetUrl(url)}" alt="" class="w-full h-auto" />
				</div>
			{/each}
		</div>
	{/if}
</div>
