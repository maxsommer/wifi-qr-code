<script lang="ts">
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

	function link(path: string) {
		return () => {
			goto(path);
		};
	}
</script>

<svelte:head>
	<title>Wifi QR Code generator</title>
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
