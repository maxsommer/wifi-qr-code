<script lang="ts">
	import { goto } from '$app/navigation';

	// User input
	let ssid = '';
	let password = '';
	let security = 'WPA2';
	let isHidden = false;

	function generateCode() {
		const state = btoa(
			JSON.stringify({
				ssid,
				password: btoa(password),
				security,
				isHidden: isHidden ? 'true' : 'false'
			})
		);
		const queryParams = new URLSearchParams({ state }).toString();
		goto(`./code/?${queryParams}`, { replaceState: true });
	}
</script>

<label for="ssid">SSID</label>
<input id="ssid" type="text" placeholder="ItHurtsWhenIP" bind:value={ssid} />

<label for="password">Password</label>
<input id="password" type="password" placeholder="MyDogBarkyIsCool" bind:value={password} />

<label for="security">Security</label>
<select id="security" bind:value={security}>
	<option value="WPA2">WPA2</option>
	<option value="WEP">WEP</option>
	<option value="WPA">WPA</option>
	<option value="none">None</option>
</select>

<label for="isHidden">Hidden?</label>
<input id="isHidden" type="checkbox" bind:checked={isHidden} />

<button on:click={generateCode}>Submit</button>

<style>
	label {
		display: block;
		position: relative;
	}
	input,
	select {
		margin-bottom: 0.5rem;
	}
</style>
