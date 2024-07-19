<script>
	import ModalNavArrow from './ModalNavArrow.svelte';
	import { modalStore } from '$lib/stores/modalStore';

	export let galleryLength = null;

	function prev() {
		$modalStore.currIndex =
			($modalStore.currIndex - 1 + $modalStore.imagesLength) % $modalStore.imagesLength;
	}

	function next() {
		$modalStore.currIndex = ($modalStore.currIndex + 1) % $modalStore.imagesLength;
	}
</script>

<div class="carousel-container flex items-center relative w-auto overflow-hidden">
	<!-- Left Arrow -->
	<div
		class="button-container absolute top-1/2 transform -translate-y-1/2 left-0 lg:-translate-x-20"
	>
		<ModalNavArrow handleClick="{prev}" orient="{'left'}" />
	</div>

	<!-- Current Item -->
	<div class="carousel-item overflow-hidden">
		<img class="max-h-[600px]" src="{$modalStore.imgToDisplay}" alt="" />
	</div>

	<!-- Right Arrow -->
	<div class="button-container absolute top-1/2 transform -translate-y-1/2 end-0 lg:translate-x-20">
		<ModalNavArrow handleClick="{next}" orient="{'right'}" />
	</div>
</div>

<style>
</style>
