<script lang="ts">
	import { AspectRatio, Button, ImageLoader, Link } from 'carbon-components-svelte';
	import { ArrowLeft, Download, Repeat } from 'carbon-icons-svelte';

	import type { PageData } from './$types';
	import { APP_NAME } from '$lib/globals';
	import type { PersistedCode } from '$lib/qr.lib';
	import { codes } from '$lib/stores';

	export let data: PageData;
	let code: PersistedCode;
	$: {
		const id = data.id;
		const result = $codes.find((c) => c.id === id);
		if (result) {
			code = result;
		}
	}

	function download(dataUrl: string) {
		const link = document.createElement('a');
		link.download = 'qrcode.png';
		link.href = dataUrl.startsWith(`data:${code.type};base64,`)
			? dataUrl
			: `data:${code.type};base64,${dataUrl}`;
		link.click();
		return null;
	}
</script>

<svelte:head>
	<title>{APP_NAME} | New</title>
</svelte:head>

<Link href="../.."><ArrowLeft /> Back to overview</Link>
<h2>QR code for {code.ssid}</h2>
<br />

<AspectRatio ratio="1x1">
	<ImageLoader src={code.dataUrl} alt="Your Wifi QR code" fadeIn />
</AspectRatio>

<div class="button-group">
	<Button class="button" kind="secondary" on:click={download(code.dataUrl)} icon={Download}>
		Download
	</Button>
	<Button class="button" kind="tertiary" href="../new" icon={Repeat}>Generate a new code</Button>
</div>

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
