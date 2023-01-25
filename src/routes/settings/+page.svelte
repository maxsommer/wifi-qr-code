<script lang="ts">
	import { APP_NAME } from '$lib/globals';
	import { Button, FileUploaderDropContainer, Link, Modal } from 'carbon-components-svelte';
	import { DocumentExport, DocumentImport, TrashCan } from 'carbon-icons-svelte';
	import { codes, notifications } from '../../lib/stores';

	$: exportDisabled = !$codes || $codes.length === 0;
	$: importDisabled = $codes && $codes.length > 0;
	$: deletionDisabled = exportDisabled;

	let importModalOpen = false;
	$: {
		if (!importModalOpen) {
			importFile = null;
		}
	}
	let importFile: File | null = null;

	let deletionModalOpen = false;
</script>

<svelte:head>
	<title>{APP_NAME} | FAQ</title>
</svelte:head>

<h2>Settings</h2>
<br /><br />

<h3 id="export">Backup</h3>
<br />
<p>
	Want to make a backup of your saved data? You can always download a machine- and human-readable
	export of all your saved data.
</p>
<br />
<Button disabled={exportDisabled} kind="tertiary" icon={DocumentExport} on:click={codes.backup}>
	Backup data
</Button>
{#if exportDisabled}
	<br /><br />
	<p class="bx--label">
		You don't have any saved data to export yet.<br />
		<Link href="/new">Generate your first QR code now</Link>.
	</p>
{/if}

<br /><br />
<br /><br />

<h3 id="restore">Restore</h3>
<br />
<p>You'd like to restore your data from a previous export? You can do that here.</p>
<br />
<Button
	disabled={importDisabled}
	kind="tertiary"
	icon={DocumentImport}
	on:click={() => (importModalOpen = true)}
>
	Restore data from backup
</Button>
{#if importDisabled}
	<br /><br />
	<p class="bx--label">
		You already have data saved to your browser. To import a backup you need to first delete your
		data below.<br />
	</p>
{/if}

<br /><br />
<br /><br />

<Modal
	bind:open={importModalOpen}
	modalHeading="Restore data from backup"
	primaryButtonText="Restore data"
	primaryButtonDisabled={!importFile}
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (importModalOpen = false)}
	on:submit={() => {
		importModalOpen = false;
		notifications.add({
			kind: 'success',
			title: 'All data deleted',
			message: 'You can now start over or import a backup.',
		});
	}}
>
	<p>
		All data will be removed and not be recoverable. Once you hit delete you will basically start
		over.
	</p>
	<br />
	<FileUploaderDropContainer
		labelText="Drag and drop a backup file here or click to upload"
		validateFiles={(files) => {
			return files.filter((file) => {
				const sizeValid = file.size < 3 * 1_024 * 1_024;
				const extensionValid = file.name.split('.').pop() === 'zip';
				const mimeTypeValid = file.type === 'application/zip';

				let errorMessage = '';
				if (!sizeValid) {
					errorMessage += 'File size is too large - maximum is 3 megabyte. ';
				}
				if (!extensionValid) {
					errorMessage += 'File extension is not valid. ';
				}
				if (!mimeTypeValid) {
					errorMessage += 'File type is not valid. ';
				}

				if (errorMessage.length) {
					notifications.add({
						kind: 'error',
						title: 'Invalid file',
						message: errorMessage,
					});
				}

				return sizeValid && extensionValid && mimeTypeValid;
			});
		}}
		on:change={(e) => {
			if (e.detail.length !== 1) {
				return;
			}
			importFile = e.detail[0];
		}}
	/>
</Modal>

<h3 id="delete">Delete</h3>
<br />
<p>You want to leave this app? No worries, you can just instantly delete everything right below.</p>
<br />
<Button
	disabled={deletionDisabled}
	kind="danger-tertiary"
	icon={TrashCan}
	on:click={() => (deletionModalOpen = true)}
>
	Delete all my data
</Button>
{#if deletionDisabled}
	<br /><br />
	<p class="bx--label">
		You don't have any saved data to delete yet.<br />
		<Link href="/new">Generate your first QR code now</Link>.
	</p>
{/if}

<Modal
	bind:open={deletionModalOpen}
	modalHeading="Delete all data?"
	primaryButtonText="Delete everything"
	secondaryButtonText="Abort, keep my data"
	on:click:button--secondary={() => (deletionModalOpen = false)}
	on:submit={() => {
		codes.deleteAll();
		deletionModalOpen = false;
		notifications.add({
			kind: 'success',
			title: 'All data deleted',
			message: 'You can now start over or import a backup.',
		});
	}}
	danger
>
	<p>
		All data will be removed and not be recoverable. Once you hit delete you will basically start
		over.
	</p>
</Modal>
