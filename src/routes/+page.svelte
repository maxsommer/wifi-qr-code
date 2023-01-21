<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		Button,
		Column,
		Grid,
		PasswordInput,
		RadioButton,
		RadioButtonGroup,
		Row,
		Select,
		SelectItem,
		TextInput,
	} from 'carbon-components-svelte';
	import QrCode from 'carbon-icons-svelte/lib/QrCode.svelte';
	import Wifi from 'carbon-pictograms-svelte/lib/Wifi.svelte';

	let ssid = '';
	let password = '';
	let security: 'nopass' | 'WPA' | 'WEP' | 'WPA2' = 'WPA2';
	let isHidden = 'false';

	let formValid = false;

	$: {
		if (security === 'nopass') {
			password = '';
		}

		formValid = !ssid || !ssid.length || ((!password || !password.length) && security !== 'nopass');
	}

	function generateCode() {
		const state = btoa(
			JSON.stringify({
				ssid,
				password: btoa(password),
				security,
				isHidden,
			}),
		);
		const queryParams = new URLSearchParams({ state }).toString();
		goto(`./code/?${queryParams}`, { replaceState: true });
	}
</script>

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

<TextInput labelText="SSID" placeholder="Network name" bind:value={ssid} />
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
	<Button disabled={formValid} on:click={generateCode} icon={QrCode}>Generate</Button>
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
