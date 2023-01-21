<script lang="ts">
	import { goto } from '$app/navigation';
	import { AspectRatio, Button, ImageLoader } from 'carbon-components-svelte';
	import { Copy, Download, Repeat } from 'carbon-icons-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function download(dataUrl: string) {
		const link = document.createElement('a');
		link.download = 'qrcode.png';
		link.href = dataUrl.startsWith('data:image/png;base64,')
			? dataUrl
			: `data:image/png;base64,${dataUrl}`;
		link.click();
		return null;
	}

	function generateNew() {
		goto('..').then(() => {});
	}
</script>

<AspectRatio ratio="1x1">
	<ImageLoader src={data.dataUrl} alt="Your Wifi QR code" fadeIn />
</AspectRatio>

<div class="button-group">
	<Button class="button" kind="secondary" on:click={download(data.dataUrl)} icon={Download}>
		Download
	</Button>
	<Button class="button" kind="tertiary" href=".." icon={Repeat}>Generate a new code</Button>
</div>
<br />
<br />

<style>
	.button-group {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.button-group > :global(.button) {
		width: 100%;
		margin-bottom: 1rem;
	}
</style>
