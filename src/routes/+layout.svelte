<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	let pageload = false;
	onMount(() => {
		pageload = true;
	});
	
</script>

<div class="main-container overflow-hidden">
	<div class="wrapper m-auto max-w-4xl w-full p-5">
		<Navbar />

		{#key $page.url || pageload}
			<div class="content-wrapper z-[2] relative" in:fade="{{ delay: 250, duration: 300 }}">
				<slot />
			</div>
		{/key}
	</div>
</div>
