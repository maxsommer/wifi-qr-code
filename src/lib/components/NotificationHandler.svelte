<script lang="ts">
	import { ToastNotification } from 'carbon-components-svelte';
	import { fly } from 'svelte/transition';
	import { notifications } from '../stores';
</script>

<div class="notification-wrapper">
	{#each $notifications as notification (notification.id)}
		<div in:fly={{ y: 500, duration: 200 }} out:fly={{ x: -500, duration: 200 }}>
			<ToastNotification
				kind={notification.kind}
				title={notification.title}
				subtitle={notification.message}
				timeout={notification.timeout}
				on:close={() => notifications.remove(notification.id)}
			/>
		</div>
	{/each}
</div>

<style>
	.notification-wrapper {
		display: block;
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		z-index: 9001;
	}
</style>
