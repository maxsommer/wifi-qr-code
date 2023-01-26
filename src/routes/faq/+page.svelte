<script lang="ts">
	import { APP_NAME, GITHUB_URL } from '$lib/globals';
	import {
		ExpandableTile,
		Link,
		ListItem,
		OrderedList,
		OutboundLink,
		UnorderedList,
	} from 'carbon-components-svelte';
</script>

<svelte:head>
	<title>{APP_NAME} | FAQ</title>
</svelte:head>

<h2>Frequently asked questions</h2>
<br /><br />

<ExpandableTile>
	<div slot="above"><h3>Where is my data stored?</h3></div>
	<div slot="below">
		<p>
			We save your data inside your browser in a local database called
			<OutboundLink href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
				'LocalStorage'
			</OutboundLink>. Also the data never leaves your browser and is stored only locally. This has
			various implications:<br />
			<OrderedList>
				<ListItem>We cannot see any of your Wifi details and neither can anybody else</ListItem>
				<ListItem>We are not able to backup or restore any of your Wifi details</ListItem>
				<ListItem>
					If your browser decides to delete the data stored in your browser, all the details are
					gone
				</ListItem>
			</OrderedList>
		</p>
	</div>
</ExpandableTile>

<br />

<ExpandableTile>
	<div slot="above"><h3>Can my data get lost?</h3></div>
	<div slot="below">
		<p>
			Unfortunately yes. Your browser may decide to delete the data stored in your browser at any
			point in time — this may happen due to security considerations of the browser vendor to not
			keep data around forever or just because your browser wants to regain some disk space. If this
			happens, all your data is gone and you will have to re-enter all your Wifi details again or
			<Link href="/settings#restore">restore them from a backup.</Link><br />
			We also allow you to manually <Link href="/settings#export">
				backup your data at any time
			</Link>.
		</p>
	</div>
</ExpandableTile>

<br />

<ExpandableTile>
	<div slot="above"><h3>How do I report problems?</h3></div>
	<div slot="below">
		<p>
			Please feel invited to <OutboundLink href={GITHUB_URL + '/issues'}>
				open up a GitHub issue
			</OutboundLink> at any point in time. I will try to fix it as soon as possible.
		</p>
	</div>
</ExpandableTile>

<br />

<ExpandableTile>
	<div slot="above"><h3>I would really love this feature…</h3></div>
	<div slot="below">
		<p>
			Please feel invited to <OutboundLink href={GITHUB_URL + '/issues'}>
				open up a GitHub issue
			</OutboundLink> at any point in time. I will gather feedback and try to accommodate as many requests
			as possible.
		</p>
	</div>
</ExpandableTile>

<br />

<ExpandableTile>
	<div slot="above"><h3>Who built this page?</h3></div>
	<div slot="below">
		<p>
			This page was built by <OutboundLink href="//maxsommer.de">Max Sommer</OutboundLink>. See the <Link
				href="/about">about page</Link
			> for more information.
		</p>
	</div>
</ExpandableTile>

<br />

<ExpandableTile>
	<div slot="above"><h3>How was this page built?</h3></div>
	<div slot="below">
		<p>
			<OutboundLink href="//kit.svelte.dev">Framework: SvelteKit</OutboundLink><br />
			<OutboundLink href="//github.com/soldair/node-qrcode">Library: 'qrcode'</OutboundLink><br />
			<OutboundLink href="//github.com/IBM/carbon-components-svelte">
				Library: 'carbon-components-svelte'
			</OutboundLink>
			<br />
			<OutboundLink href="//github.com/IBM/carbon-icons-svelte">
				Library: 'carbon-icons-svelte'
			</OutboundLink>
			<br />
			<OutboundLink href="//github.com/IBM/carbon-pictograms-svelte">
				Library: 'carbon-pictograms-svelte'
			</OutboundLink>
			<br />
			<OutboundLink href="//vite-pwa-org.netlify.app/frameworks/sveltekit.html">
				Library: 'vite-plugin-pwa'
			</OutboundLink>
		</p>
	</div>
</ExpandableTile>

<br />

<ExpandableTile>
	<div slot="above"><h3>Are you using analytics?</h3></div>
	<div slot="below">
		<p>
			We use a privacy-friendly analytics service called
			<OutboundLink href="https://goatcounter.com">'Goatcounter'</OutboundLink>. Your data is at no
			point transferred to a third-party. It will track only the following point of data:<br />
			<UnorderedList>
				<ListItem>Page visited</ListItem>
				<ListItem>Browser used</ListItem>
				<ListItem>Browser language</ListItem>
				<ListItem>Operating system used</ListItem>
				<ListItem>Screen resolution of your device</ListItem>
				<ListItem>Country you're from</ListItem>
				<ListItem>Page you're coming from (referrer)</ListItem>
			</UnorderedList>
			We will never use analytics to track you across the web or enable a third-party to do so.
		</p>
	</div>
</ExpandableTile>

<br />
