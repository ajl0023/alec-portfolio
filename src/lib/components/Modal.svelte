<script>
	import { modalStore } from '$lib/stores/modalStore';

	function handleBackdropClick(event) {
		if (event.target === wrapper) {
			$modalStore.visible = false;
		}
	}
	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			$modalStore.visible = false;
		}
	}
	let wrapper;
</script>

{#if $modalStore.visible}
	<!-- Modal Background -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		bind:this="{wrapper}"
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[600] modal-wrapper p-5"
		on:click="{handleBackdropClick}"
		on:keypress="{handleKeyDown}"
	>
		<!-- Modal Container -->
		<slot />
	</div>
{/if}

<style>
</style>
