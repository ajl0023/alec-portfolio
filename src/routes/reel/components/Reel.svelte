<script>
	import { sanityAssetUrl } from '$lib/sanity/imageBuilderUrl';
	import PlayButton from '../../../lib/components/PlayButton.svelte';
	import TranslationText from '../../../lib/components/TranslationText.svelte';

	export let _id;
	export let title;
	export let url;
	export let role;

	export let hoverVideo;
	export let hideVideo;
	export let nowPlaying;
	export let vidToPlay;
	let video;
	let isHovering = false;
</script>

<div class="aspect-wrapper md:w-1/2">
	<div class="wrapper">
		<div
			class="wrap-video relative cursor-pointer aspect-w-16 aspect-h-9"
			on:mouseover="{() => {
				isHovering = true;
				hoverVideo(video);
			}}"
			on:mouseout="{() => {
				isHovering = false;
				hideVideo(video);
			}}"
			on:click="{() => nowPlaying(url)}"
		>
			<video
				class="object-cover h-82 w-full"
				muted
				bind:this="{video}"
				playsinline
				preload="metadata"
			>
				<source src="{sanityAssetUrl(url)}#t=0.001" type="video/mp4" />
			</video>
			{#if vidToPlay === url}
				<div
					class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
				>
					<div class="text-white text-xl">Now Playing</div>
				</div>
			{/if}
			{#if isHovering && vidToPlay !== url}
				<div
					class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center pointer-events-none"
				>
					<PlayButton />
				</div>
			{/if}
		</div>

		<span class="md:mt-4 flex justify-between space-x-2 mt-3">
			<span class="col-start-1 col-end-4 text-md text-white font-serif white">
				<TranslationText translateKey="reel.title" text="{title}" />
			</span>
			<span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase flex justify-end">
				<span class="">
					<TranslationText translateKey="reel.title" text="{role}" />
				</span>
			</span>
		</span>
	</div>
</div>
