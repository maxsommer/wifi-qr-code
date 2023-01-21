<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'carbon-components-svelte';

	function generateNew() {
		goto('..').then(() => {});
	}
</script>

<p>Unfortunately something went wrong while generating your QR code.</p>
<br />
<Button on:click={generateNew}>Generate new QR code</Button>
