<script>
	export let handleClick;
	export let orient;
</script>

{#if orient === 'left'}
	<button
		type="button"
		class="absolute lg:start-[-100px] start-0 z-30 items-center justify-center group focus:outline-none cursor-auto flex"
		data-carousel-prev
	>
		<span
			on:click="{handleClick}"
			class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 cursor-pointer"
		>
			<svg
				class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 6 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 1 1 5l4 4"></path>
			</svg>
		</span>
	</button>
{:else}
	<button
		type="button"
		class="absolute lg:end-[-100px] end-0 z-30 flex items-center justify-center group focus:outline-none cursor-auto"
		data-carousel-next
	>
		<span
			class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 cursor-pointer"
			on:click="{handleClick}"
		>
			<svg
				class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 6 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 9 4-4-4-4"></path>
			</svg>
		</span>
	</button>
{/if}
