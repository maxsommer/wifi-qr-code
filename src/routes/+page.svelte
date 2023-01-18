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

<label>
	SSID
	<input type="text" placeholder="ItHurtsWhenIP" bind:value={ssid} />
</label><br />

<label>
	Password
	<input type="password" placeholder="MyDogBarkyIsCool" bind:value={password} />
</label><br />

<label>
	Security
	<select bind:value={security}>
		<option value="WPA2">WPA2</option>
		<option value="WEP">WEP</option>
		<option value="WPA">WPA</option>
		<option value="none">None</option>
	</select>
</label><br />

<label>
	Hidden?
	<input type="checkbox" bind:checked={isHidden} />
</label><br />

<button on:click={generateCode}>Submit</button>

<style>
	label {
		display: block;
		position: relative;
	}
</style>
