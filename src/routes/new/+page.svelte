<script lang="ts">
	import {
		Button,
		Column,
		Grid,
		Link,
		PasswordInput,
		RadioButton,
		RadioButtonGroup,
		Row,
		Select,
		SelectItem,
		TextInput,
	} from 'carbon-components-svelte';
	import { Add, ArrowLeft } from 'carbon-icons-svelte';
	import Wifi from 'carbon-pictograms-svelte/lib/Wifi.svelte';
	import { v4 as uuid } from 'uuid';

	import { goto } from '$app/navigation';
	import { APP_NAME } from '$lib/globals';
	import { getQRCodeDataUrl, getWifiQRString, type Code, type Security } from '$lib/qr.lib';
	import { codes } from '$lib/stores';

	let state: 'loading' | 'ready' = 'ready';

	let ssid = '';
	let password = '';
	let security: Security = 'WPA2';
	let isHidden = 'false';

	let formValid = false;

	$: {
		if (security === 'nopass') {
			password = '';
		}

		const ssidRegex = /^[^!#;+\]\/"\t][^+\]\/"\t]{0,30}[^ +\]\/"\t]$|^[^ !#;+\]\/"\t]$[ \t]+$/;
		const ssidValid = ssidRegex.test(ssid);

		formValid = !ssid || !ssidValid || ((!password || !password.length) && security !== 'nopass');
	}

	function generateCode() {
		const qrCodeString = getWifiQRString(ssid, security, password, isHidden === 'true');
		const code: Code = {
			id: uuid(),
			ssid,
			password: btoa(password),
			security,
			isHidden,
			colorDark: '#f4f4f4',
			colorLight: '#161616',
			errorCorrectionLevel: 'H',
			resolution: 1024,
		};

		getQRCodeDataUrl({ ...code, type: 'image/png', qrCodeString })
			.then((dataUrl) => {
				codes.add({ ...code, dataUrl, type: 'image/png' }), goto(`../code/${code.id}`);
			})
			.catch((error) => {
				console.error(error);
			});
	}
</script>

<svelte:head>
	<title>{APP_NAME} | New</title>
</svelte:head>

<Link href=".."><ArrowLeft /> Back to overview</Link>
<h2>New Wifi QR Code</h2>
<br /><br />

<Grid fullWidth noGutter>
	<Row>
		<Column sm={1} md={2} lg={4}><div class="centered-icon"><Wifi /></div></Column>
		<Column sm={3} md={6} lg={12}>
			<p>
				Enter your Wifi details below and click the button to generate a QR code. You can then scan
				the QR code with your phone to connect to your Wifi.
			</p>
		</Column>
	</Row>
</Grid>

<br />
<br />

<TextInput labelText="SSID" placeholder="Network name" bind:value={ssid} maxlength={32} />
<br />

<PasswordInput
	labelText="Network password"
	placeholder="Password"
	disabled={security === 'nopass'}
	bind:value={password}
/>
<br />

<Select labelText="Security" bind:selected={security}>
	<SelectItem value="WPA2">WPA2</SelectItem>
	<SelectItem value="WEP">WEP</SelectItem>
	<SelectItem value="WPA">WPA</SelectItem>
	<SelectItem value="nopass">No Password</SelectItem>
</Select>
<br />

<RadioButtonGroup bind:selected={isHidden} legendText="Is your Wifi hidden?">
	<RadioButton value={'false'} labelText="Visible" />
	<RadioButton value={'true'} labelText="Hidden" />
</RadioButtonGroup>

<br />
<br />

<div class="right-aligned-icon">
	<Button disabled={formValid || state === 'loading'} on:click={generateCode} icon={Add}>
		Generate
	</Button>
</div>

<style>
	.centered-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.right-aligned-icon {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 100%;
	}
</style>
