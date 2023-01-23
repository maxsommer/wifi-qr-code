<script lang="ts">
	import { Button, Modal, OverflowMenu, OverflowMenuItem, Tag } from 'carbon-components-svelte';
	import { ArrowRight, TrashCan } from 'carbon-icons-svelte';
	import type { PersistedCode } from '../qr.lib';
	import { codes } from '../stores';

	export let code: PersistedCode;
	let open = false;

	function deleteCode() {
		codes.remove(code.id);
	}
</script>

<div class="code">
	<div class="menu">
		<OverflowMenu flipped>
			<OverflowMenuItem text="Delete" on:click={() => (open = true)} />
		</OverflowMenu>
	</div>
	<div class="content">
		<div><span>Name</span><br />{code.name}</div>
		<div class="spacer" />
		<Tag><span>SSID:</span>{code.ssid}</Tag>
		<Tag><span>Security:</span>{code.security}</Tag>
		<Tag><span>Visibility:</span>{code.isHidden === 'true' ? 'Hidden' : 'Visible'}</Tag>
	</div>
	<div class="actions">
		<Button kind="ghost" size="field" icon={ArrowRight} href={`/code/${code.id}`}>Show</Button>
	</div>
</div>

<Modal
	bind:open
	danger
	modalHeading={`Delete '${code.ssid}'?`}
	primaryButtonText="Delete"
	primaryButtonIcon={TrashCan}
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (open = false)}
	on:click:button--primary={deleteCode}
	on:submit={deleteCode}
>
	<p>
		Permanently removes this Wifi QR code. Since this code is only saved in your browser it will not
		be possible to restore.
	</p>
</Modal>

<style>
	.code {
		display: block;
		position: relative;

		background-color: rgb(38, 38, 38);
		margin-bottom: 1rem;
		border-radius: 2px;
	}

	.code .content {
		display: block;
		flex-direction: column;
		padding: 0.65rem 1rem;

		text-decoration: none;
		color: #f4f4f4;
		font-size: 2rem;
		line-height: 2rem;
	}

	.code .content div {
		margin-right: 1rem;
	}

	span {
		color: #c6c6c6;
		margin-right: 0.5rem;
		font-size: 0.8rem;
	}

	.actions {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 0rem 1rem;
		padding-bottom: 0.65rem;
	}

	.menu {
		display: block;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.spacer {
		height: 0.5rem;
	}
</style>
