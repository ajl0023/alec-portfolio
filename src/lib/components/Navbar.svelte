<script>
	import Hamburger from './Hamburger.svelte';
	import { onMount } from 'svelte';

	import TranslateWidget from './TranslateWidget.svelte';
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
	let should_render = false;
	let curr_lang;
	let should_show_nav_dropdown;
	function googleTranslateInit() {
		setTimeout(function () {
			if (
				typeof google !== 'undefined' &&
				google != null &&
				google.translate != null &&
				google.translate.TranslateElement != null
			) {
				new google.translate.TranslateElement({
					pageLanguage: 'en',
					includedLanguages: 'en,zh-CN',
					autoDisplay: false
				});
			}

			// let script = document.createElement('script');
		}, 300);
	}
	onMount(() => {
		googleTranslateInit();

		curr_lang = Cookies.get('googtrans');

		if (curr_lang) {
			curr_lang = curr_lang.split('/')[2];
		} else {
			curr_lang = 'en';
		}
		should_render = true;
	});
</script>

<!-- MOBILE HAMBURGER -->

<div class="nav-content-wrapper flex justify-between md:items-end items-center">
	<div class="left-container">
		<h1 class="uppercase text-blue2 font-[600] md:mb-2 text-3xl tracking-wide">
			<a href="/">alec wang</a>
		</h1>
		<p class="text-white">Actor, Los Angeles CA</p>
	</div>
	<div class="hamburger-wrapper flex justify-end md:hidden">
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
		class="md:block nav-wrapper z-[500] fixed left-0 top-0 bottom-0
		 md:relative md:overflow-visible overflow-hidden
		{shouldShow ? 'max-w-xs md:w-auto md:max-w-none w-full' : 'w-0 md:w-auto'}
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
		<div
			class="header-container z-4 relative p-4 bg-[#141414] md:bg-[unset] md:p-0 h-full md:h-auto"
		>
			<div class="bottom-container md:flex md:justify-between font-[300] text-sm">
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
					<TranslateWidget
						curr_lang="{curr_lang}"
						should_render="{true}"
						is_drop_down="{true}"
						should_show_nav_dropdown="{true}"
					/>
				</ul>
			</div>
		</div>
	</div>
</div>
