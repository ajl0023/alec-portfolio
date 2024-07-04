<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<div class="main-container overflow-hidden bg-[#141414]">
	<div class="wrapper m-auto max-w-4xl w-full p-5">
		<Navbar />
		<slot />
	</div>
</div>
