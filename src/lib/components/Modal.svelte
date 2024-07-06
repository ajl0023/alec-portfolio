<script>
	export let isOpen = false;

	function closeModal() {
		isOpen = false;
		document.body.style.overflow = 'auto';
	}

	$: if (isOpen) {
		document.body.style.overflow = 'hidden';
	
	}
	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

{#if isOpen}
	<!-- Modal Background -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-[120px] modal-wrapper"
		on:click="{handleBackdropClick}"
		on:keypress="{handleKeyDown}"
	>
		<!-- Modal Container -->
		<slot />
	</div>
{/if}

<style>
</style>
