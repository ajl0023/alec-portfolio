<script>
	import Hamburger from './Hamburger.svelte';

	let nav_options = [
		{ title: 'Home', to: '/' },
		{ title: 'Resume', to: '/resume' },
		{ title: 'Gallery', to: '/gallery' },
		{ title: 'Reel', to: '/reel' },
		{ title: 'Contact', to: '/contact' }
	];
	let wrapper;
	const hideMenu = () => {
		shouldShow = false;
	};
	let shouldShow = false;
</script>

<!-- MOBILE HAMBURGER -->
<div class="hamburger-wrapper flex justify-end md:hidden block">
	<button
		class="burg-container pointer"
		on:click="{() => {
			shouldShow = !shouldShow;
		}}"
	>
		<Hamburger />
	</button>
</div>

<div
	class="nav-wrapper z-[500] fixed left-0 top-0 bottom-0
	overflow-hidden md:relative
	{shouldShow ? 'max-w-xl md:w-full md:max-w-none' : 'w-0 md:w-full'}
"
	bind:this="{wrapper}"
>
	<!-- backdrop -->
	<div
		on:click="{hideMenu}"
		class="backdrop
		opacity-60
		bg-gray-800
		left-0 b-0 fixed inset-0
		md:hidden
		z-2
		{shouldShow ? 'block' : 'hidden'}
		
	"
	></div>
	<div class="header-container z-4 relative p-4 bg-[#141414] h-full md:bg-[unset] md:p-0">
		<h1 class="uppercase text-blue2 font-[600] md:mb-2 text-3xl tracking-wide">
			<a href="/">alec wang</a>
		</h1>
		<div class="bottom-container md:flex md:justify-between font-[300] text-sm">
			<p class="text-white">Actor, Los Angeles CA</p>
			<ul
				class="nav-list-container flex text-white md:space-x-7 md:mt-0 flex-col md:flex-row divide-y md:divide-none divide-solid mt-4
					
				"
			>
				{#each nav_options as { title, to }}
					<li
						class="hover:text-blue2 transition-colors py-2 md:py-0
						cursor-pointer md:cursor-auto"
					>
						<a class="block" href="{to}">{title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
