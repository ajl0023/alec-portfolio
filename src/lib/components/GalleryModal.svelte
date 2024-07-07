<script>
	import ModalNavArrow from './ModalNavArrow.svelte';

	export let currIndex = 0;
	export let imgToDisplay = null;
	export let galleryLength = null;

	function prev() {
		currIndex = (currIndex - 1 + galleryLength) % galleryLength;
	}

	function next() {
		currIndex = (currIndex + 1) % galleryLength;
	}
</script>

<div class="carousel-container flex items-center relative">
	<!-- Left Arrow -->
	<ModalNavArrow handleClick="{prev}" orient="{'left'}" />

	<!-- Current Item -->
	<div class="carousel-item mx-4">
		<img src="{imgToDisplay}" class="max-w-md" alt="" />
	</div>

	<!-- Right Arrow -->

	<ModalNavArrow handleClick="{next}" orient="{'right'}" />
</div>

<style>
</style>
