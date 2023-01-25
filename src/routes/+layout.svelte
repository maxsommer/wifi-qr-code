<script lang="ts">
	import { goto } from '$app/navigation';
	import NotificationHandler from '$lib/components/NotificationHandler.svelte';
	import { APP_NAME, GITHUB_URL } from '$lib/globals';
	import {
		Content,
		Header,
		HeaderAction,
		HeaderActionLink,
		HeaderPanelLink,
		HeaderPanelLinks,
		HeaderUtilities,
		SkipToContent,
	} from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/g100.css';
	import { Menu, SettingsAdjust, Unknown } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	/* let isSideNavOpen = false; */
	let isOpen = false;
	let ReloadPrompt: any;
	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default);
	});
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	function navigate(url: string) {
		return () => goto(url, { replaceState: true });
	}
</script>

<svelte:head>
	{@html webManifest}
	<script
		data-goatcounter="https://wifiqrcode.goatcounter.com/count"
		async
		src="//gc.zgo.at/count.js"
	></script>
</svelte:head>

<Header platformName={APP_NAME} href="/">
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<HeaderUtilities>
		<HeaderActionLink aria-label="Frequently asked questions" icon={Unknown} href="/faq" />
		<HeaderActionLink aria-label="Settings" icon={SettingsAdjust} href="/settings" />
		<HeaderAction bind:isOpen icon={Menu}>
			<HeaderPanelLinks>
				<HeaderPanelLink href="/about">About & Legal</HeaderPanelLink>
				<HeaderPanelLink target="_blank" href={GITHUB_URL}>GitHub repository</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<Content>
	<div class="main-wrapper">
		<slot />
	</div>
</Content>

<NotificationHandler />

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

<style>
	/*
		 * iPhones will zoom into input fields if the font size is below or equal to 
		 * 16px — therefore we increase the font size until that does not happen.
		 */
	:global(.bx--text-input),
	:global(.bx--password-input),
	:global(.bx--select-input) {
		font-size: 1.125rem;
	}

	:global(.main-wrapper) {
		display: block;
		width: 100%;
		min-height: 100%;
		max-width: 34rem;
		margin-left: auto;
		margin-right: auto;
	}

	:global(.text-centered) {
		text-align: center;
	}
	:global(.bx--list__item) {
		margin-left: 1.5rem;
	}
</style>
