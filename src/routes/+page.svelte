<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { sanityAssetUrl } from '$lib/sanity/imageBuilderUrl';
	import { fade } from 'svelte/transition';

	export let data;

	const carousel_images = data.images[0].carousel;
</script>

<div class="w-full">
	<div class="carousel-wrapper lg:mt-10 w-full mt-5">
		<div class="embla" use:emblaCarouselSvelte>
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
	</div>
</div>
