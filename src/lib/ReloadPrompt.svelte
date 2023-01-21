<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	import { useRegisterSW } from 'virtual:pwa-register/svelte';
	const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
		onRegistered(r: any) {
			// uncomment following code if you want check for updates
			// r && setInterval(() => {
			//    console.log('Checking for sw update')
			//    r.update()
			// }, 20000 /* 20s for testing purposes */)
			console.log(`SW Registered: ${r}`);
		},
		onRegisterError(error: any) {
			console.log('SW registration error', error);
		},
	});
	const close = () => {
		offlineReady.set(false);
		needRefresh.set(false);
	};
	$: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
	<div class="pwa-toast" role="alert">
		<div class="message">
			{#if $offlineReady}
				<span> App ready to work offline </span>
			{:else}
				<span> New content available, click on reload button to update. </span>
			{/if}
		</div>
		{#if $needRefresh}
			<Button on:click={() => updateServiceWorker(true)}>Reload</Button>
		{/if}
		<Button kind="secondary" on:click={close}>Close</Button>
	</div>
{/if}

<style>
	.pwa-toast {
		position: fixed;
		right: 0;
		bottom: 0;
		margin: 16px;
		padding: 1rem;
		border: 1px solid #393939;
		z-index: 2;
		text-align: left;
		background-color: #161616;
		color: #f4f4f4;
	}
	.pwa-toast .message {
		margin-bottom: 8px;
	}
</style>
