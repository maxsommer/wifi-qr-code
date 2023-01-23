<script lang="ts">
	import { slide } from 'svelte/transition';
	import { codes } from '$lib/stores';
	import { Button } from 'carbon-components-svelte';
	import { Add } from 'carbon-icons-svelte';
	import CodePreview from '../lib/components/CodePreview.svelte';
	import { APP_NAME } from '../lib/globals';
</script>

<svelte:head>
	<title>{APP_NAME} | Overview</title>
</svelte:head>

<h2>Overview</h2>
<br />

{#if $codes}
	{#if $codes.length === 0}
		<p>Once you've created QR codes they will be displayed here.</p>
	{/if}
	{#each $codes as code (code.id)}
		<div transition:slide|local={{ duration: 200 }}><CodePreview {code} /></div>
	{/each}
{:else}
	<p>Loading...</p>
{/if}

<br />

<Button href="/new" icon={Add}>Generate new Wifi QR code</Button>
