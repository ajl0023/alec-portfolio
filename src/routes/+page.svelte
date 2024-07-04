<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { sanityAssetUrl } from '$lib/sanity/imageBuilderUrl';

	export let data;
	
	const carousel_images = data.images[0].carousel;
</script>

<div class="">
	<div class="carousel-wrapper mt-10">
		<div class="embla" use:emblaCarouselSvelte>
			<div class="embla__container">
				{#each carousel_images as image}
					<div class="embla__slide img-container">
						<img src="{sanityAssetUrl(image)}" alt="" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
