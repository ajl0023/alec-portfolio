<script>
	import { sanityAssetUrl } from '$lib/sanity/imageBuilderUrl';
	import Autoplay from 'embla-carousel-autoplay';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import RightArrow from '../lib/components/RightArrow.svelte';
	import ModalNavArrow from '../lib/components/ModalNavArrow.svelte';

	export let data;

	const carousel_images = data.images[0].carousel;
	let plugins = [Autoplay()];
	let emblaApi;
	function onInit(event) {
		emblaApi = event.detail;

		// Access API
	}
</script>

<div class="w-full">
	<div class="carousel-wrapper lg:mt-10 w-full mt-5 relative">
		<div class="embla" use:emblaCarouselSvelte="{{ plugins }}" on:emblaInit="{onInit}">
			<div class="embla__container">
				{#each carousel_images as image}
					<div class="embla__slide img-container aspect-w-16 aspect-h-9">
						<img
							src="{sanityAssetUrl(image)}"
							alt=""
							class="
							object-cover
							object-center
							w-full
							h-full
							
							"
						/>
					</div>
				{/each}
			</div>
		</div>
		<div
			class="embla__prev absolute top-1/2 transform -translate-y-1/2 left-0"
			on:click="{emblaApi.scrollPrev()}"
		>
			<ModalNavArrow orient="left" />
		</div>
		<div
			class="embla__next absolute top-1/2 transform -translate-y-1/2 right-0"
			on:click="{emblaApi.scrollNext()}"
		>
			<ModalNavArrow orient="right" />
		</div>
	</div>
	<button class="socials-wrapper mt-5 float-right">
		<a href="https://www.instagram.com/alecnnw/" target="_blank">
			<img src="$lib/images/misc/instalogo.png" alt="" />
		</a>
	</button>
</div>
