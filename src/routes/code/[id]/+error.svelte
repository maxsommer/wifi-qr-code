<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'carbon-components-svelte';
	import { APP_NAME } from '$lib/globals';

	function generateNew() {
		goto('../new', { replaceState: true }).then(() => {});
	}
</script>

<svelte:head>
	<title>{APP_NAME} | Something went wrong</title>
</svelte:head>

<p>Unfortunately something went wrong while generating your QR code.</p>
<br />
<Button on:click={generateNew}>Generate new QR code</Button>
