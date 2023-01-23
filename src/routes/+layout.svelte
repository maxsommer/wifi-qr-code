<script lang="ts">
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';
	import {
		Content,
		Header,
		HeaderAction,
		HeaderGlobalAction,
		HeaderPanelLink,
		HeaderPanelLinks,
		HeaderUtilities,
		SideNav,
		SideNavDivider,
		SideNavItems,
		SideNavLink,
		SkipToContent,
	} from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/g100.css';
	import {
		Add,
		Information,
		List,
		LogoGithub,
		Settings,
		SettingsAdjust,
	} from 'carbon-icons-svelte';
	import { APP_NAME, GITHUB_URL } from '$lib/globals';
	import { goto } from '$app/navigation';

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
		<HeaderGlobalAction aria-label="Overview" icon={List} on:click={navigate('/')} />
		<!-- <HeaderGlobalAction
			aria-label="Settings"
			icon={SettingsAdjust}
			on:click={navigate('/settings')}
		/> -->
		<HeaderAction bind:isOpen icon={Information}>
			<HeaderPanelLinks>
				<HeaderPanelLink href="/about">About</HeaderPanelLink>
				<HeaderPanelLink target="_blank" href={GITHUB_URL}>GitHub</HeaderPanelLink>
			</HeaderPanelLinks>
		</HeaderAction>
	</HeaderUtilities>
</Header>

<Content>
	<div class="main-wrapper">
		<slot />
	</div>
</Content>

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

	:global(.bx--side-nav) {
		background-color: #161616;
	}
	:global(.bx--side-nav__link:hover) {
		background-color: #262626 !important;
	}

	:global(.bx--side-nav__link-text) {
		color: #f4f4f4 !important;
	}
	:global(.bx--side-nav__icon > svg) {
		fill: #f4f4f4 !important;
	}
	:global(.bx--side-nav__divider) {
		background-color: #525252 !important;
	}
</style>
