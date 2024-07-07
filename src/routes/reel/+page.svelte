<script>
	import { image_url } from '$lib/dev';
	import { onMount } from 'svelte';
	import Reel from './components/Reel.svelte';
	import Plyr from 'plyr';
	import 'plyr/dist/plyr.css';
	export let data;
	let vidToPlay = null;
	let videos_eles = {};
	let main_vid = null;
	function hoverVideo(vid) {
		vid.play();
	}

	function hideVideo(vid) {
		vid.pause();
	}

	const handleFormat = () => {
		const formatted_urls = [];
		let arr = [];
		data.reel_videos.forEach((item, i) => {
			videos_eles[item._id] = { ele: null, url: item.url };
			arr.push(item);
			if (arr.length === 2) {
				formatted_urls.push(arr);
				arr = [];
			}
		});
		if (arr.length > 0) {
			formatted_urls.push(arr);
		}

		return formatted_urls;
	};

	const nowPlaying = (src) => {
		if (vidToPlay) {
			main_vid.pause();
		}
		vidToPlay = src;
		main_vid.play();
	};

	onMount(() => {
		const plyr = new Plyr('video', {
			controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']
		});
		vidToPlay = data.reel_videos[0].url;
	});
	const urlsToDisplay = handleFormat();
</script>

<div class="relative flex min-h-screen flex-col mt-10">
	<div class="video-player-wrapper aspect-w-16 aspect-h-9">
		<div class="video">
			<video bind:this="{main_vid}" playsinline controls src="{vidToPlay}"> </video>
		</div>
	</div>
	<div class="min-h-28">
		<div class="mx-auto py-4">
			{#each urlsToDisplay as reel_section}
				<div class="mt-8 md:flex md:space-x-4 space-y-4 md:space-y-0 ">
					{#each reel_section as { title, url, _id, role }, i}
						<Reel
							nowPlaying="{nowPlaying}"
							_id="{_id}"
							title="{title}"
							role="{role}"
							url="{url}"
							hoverVideo="{hoverVideo}"
							hideVideo="{hideVideo}"
							vidToPlay="{vidToPlay}"
						/>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>
