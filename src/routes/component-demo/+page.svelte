<script>
	import { Button } from 'carbon-components-svelte';
	import { notifications } from '../../lib/stores';
</script>

<Button
	on:click={() => notifications.add({ kind: 'info', message: 'Test message', title: 'Test title' })}
>
	Info notification
</Button><br /><br />
<Button
	on:click={() =>
		notifications.add({ kind: 'success', message: 'Test message', title: 'Test title' })}
>
	Success notification
</Button><br /><br />
<Button
	on:click={() =>
		notifications.add({ kind: 'warning', message: 'Test message', title: 'Test title' })}
>
	Warning notification
</Button><br /><br />
<Button
	on:click={() =>
		notifications.add({ kind: 'error', message: 'Test message', title: 'Test title' })}
>
	Error notification
</Button>
