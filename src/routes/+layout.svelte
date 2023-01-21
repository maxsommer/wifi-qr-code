<script lang="ts">
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	import { goto } from '$app/navigation';
	import {
		Content,
		Header,
		HeaderGlobalAction,
		HeaderUtilities,
		SkipToContent,
	} from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/g100.css';
	import { Information, LogoGithub } from 'carbon-icons-svelte';

	let ReloadPrompt: any;
	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default);
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	function link(path: string) {
		return () => {
			goto(path);
		};
	}
</script>

<svelte:head>
	{@html webManifest}
	<title>Wifi QR Code generator</title>
	<script
		data-goatcounter="https://wifiqrcode.goatcounter.com/count"
		async
		src="//gc.zgo.at/count.js"
	></script>
</svelte:head>

<Header platformName="Wifi QR Code Generator" href="/">
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderGlobalAction aria-label="About" icon={Information} on:click={link('/about')} />
		<HeaderGlobalAction aria-label="GitHub" icon={LogoGithub} on:click={link('//github.com')} />
	</HeaderUtilities>
</Header>

<Content class="main-wrapper">
	<slot />
</Content>

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

<style>
	:global(.main-wrapper) {
		display: block;
		width: 100%;
		min-height: 100%;
		max-width: 34rem;
		margin-left: auto;
		margin-right: auto;
	}
</style>
