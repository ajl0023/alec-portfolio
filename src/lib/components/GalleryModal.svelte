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

<div class="carousel-container flex items-center relative w-full max-w-xl">
	<!-- Left Arrow -->
	<ModalNavArrow handleClick="{prev}" orient="{'left'}" />

	<!-- Current Item -->
	<div class="carousel-item">
		<img src="{$modalStore.imgToDisplay}" alt="" />
	</div>

	<!-- Right Arrow -->

	<ModalNavArrow handleClick="{next}" orient="{'right'}" />
</div>

<style>
</style>
