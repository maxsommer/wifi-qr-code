<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function startImageDownload(dataUrl: string) {
		const link = document.createElement('a');
		link.download = 'qrcode.png';
		link.href = dataUrl.startsWith('data:image/png;base64,')
			? dataUrl
			: `data:image/png;base64,${dataUrl}`;
		link.click();
		return null;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (!data.dataUrl) return;

		if (event.key === 'Enter' || event.key === ' ') {
			startImageDownload(data.dataUrl);
		}
	}

	function copyCurrentUrl() {
		const url = window.location.href;
		navigator.clipboard.writeText(url);
	}
</script>

<section>
	<p>
		<img class="qr-code" src={data.dataUrl} alt="QR Code" />
	</p>

	<p>
		<button on:click={startImageDownload(data.dataUrl)} on:keyup={handleKeyDown}>
			Download as image
		</button>
		<button on:click={copyCurrentUrl}> Copy link to this page </button>
	</p>

	<p>
		<a href="..">Generate a new QR code</a>
	</p>
</section>

<style>
	.qr-code {
		display: inline-flex;
		cursor: pointer;
		border: 1px solid red;
		position: relative;
		width: 50vw;
		height: 50vw;
	}

	.qr-code:focus {
		outline: 2px solid red;
	}

	section {
		display: block;
	}
</style>
