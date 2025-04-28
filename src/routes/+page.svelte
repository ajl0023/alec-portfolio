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
		<!-- wants only one photo so no arrows i guess -->
		<!-- <div
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
		</div> -->
	</div>
	<div class="icons-container flex justify-end items-center space-x-3 mt-5">
		<div class="socials-wrapper w-5 h-5">
			<a href="https://www.instagram.com/alecnnw/" class="block" target="_blank">
				<img src="$lib/images/misc/instalogo.svg" alt="" class="w-full" />
			</a>
		</div>
		<div class="socials-wrapper w-5 h-5">
			<a href="https://www.tiktok.com/@alecmhw" target="_blank">
				<img src="$lib/images/misc/tiktokicon.svg" class="w-full" alt="" />
			</a>
		</div>
		<div class="socials-wrapper w-5 h-5">
			<a href="https://www.imdb.com/name/nm12080733/?ref_=ext_shr_lnk" target="_blank">
				<img src="$lib/images/misc/imdblogo.svg" class="w-full" alt="" />
			</a>
		</div>
	</div>
</div>
