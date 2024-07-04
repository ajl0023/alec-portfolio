<script>
	let nav_options = [
		{ title: 'Home', to: '/' },
		{ title: 'Resume', to: '/resume' },
		{ title: 'Gallery', to: '/gallery' },
		{ title: 'Reel', to: '/reel' },
		{ title: 'Contact', to: '/contact' }
	];
</script>

<div class="header-container container">
	<h1 class="uppercase text-blue2 font-[600] mb-2 text-3xl tracking-wide">alec wang</h1>
	<div class="bottom-container lg:flex justify-between font-[300] text-sm">
		<p class="text-white">Actor, Los Angeles CA</p>
		<ul class="nav-list-container flex text-white space-x-7">
			{#each nav_options as { title, to }}
				<li class="hover:text-blue2 transition-colors"><a href="{to}">{title}</a></li>
			{/each}
		</ul>
	</div>
</div>
