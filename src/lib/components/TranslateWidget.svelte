<script>
	import { Popover } from 'flowbite-svelte';
	import { setCurrentLanguage, languageStore } from '$lib/stores/translationStore';
	let curr_lang = true;
	let should_render = false;
	let should_show_nav_dropdown = false;
	let countries = [
		{ label: 'English', value: 'en' },
		{ label: '简体中文', value: 'cn' }
	];
	let selected = $languageStore;
	let is_drop_down = false;
	let is_mobile = false;
	let is_desktop = false;
	const handleTranslate = (country) => {
		setCurrentLanguage(country);
	};
</script>

{#if curr_lang}
	<div class="wrapper relative text-white">
		<button
			id="widget-trigger"
			class="list-link lg:text-md md:text-sm group cursor-pointer uppercase flex items-center"
		>
			<img
				class="mr-2 w-4 h-[11px]"
				src="{`/images/lang/lang__${$languageStore.value}.png`}"
				alt=""
			/>
			<span>
				{$languageStore.label}
			</span>
		</button>
		<Popover
			class="bg-white"
			trigger="click"
			arrow="{false}"
			placement="bottom"
			triggeredBy="#widget-trigger"
			open="{is_drop_down ? (!should_show_nav_dropdown ? false : undefined) : undefined}"
		>
			<ul class="bg-white text-black divide-y w-32">
				{#each countries as country}
					<li>
						<button
							class="flex items-center w-full py-1"
							on:click="{() => {
								handleTranslate(country);
							}}"
						>
							<img
								class="mr-2 w-4 h-[11px]"
								src="{`/images/lang/lang__${country.value}.png`}"
								alt=""
							/>
							<div class="text-[10px]">
								{country.label}
							</div>
						</button>
					</li>
				{/each}
			</ul>
		</Popover>
	</div>
{/if}
