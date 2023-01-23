<script>
	import { ExpandableTile, ListItem, OutboundLink, UnorderedList } from 'carbon-components-svelte';
	import { APP_NAME } from '$lib/globals';
</script>

<svelte:head>
	<title>{APP_NAME} | About</title>
</svelte:head>

<h2>About</h2>
<br />
<p>
	Built by <OutboundLink href="//maxsommer.de">Max Sommer</OutboundLink> in his free time. This page
	will not save any of your Wifi data nor transmit it to third-party servers.
</p>
<br /><br />

<h2>Technologies</h2>
<br />
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
<br /><br />

<h2>Legal</h2>
<br />
<ExpandableTile>
	<div slot="above">Privacy (German)</div>
	<div slot="below">
		<p>
			Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen
			der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und
			nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen
			Leistungen, verarbeitet.
		</p>
		<br />

		<p>
			Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung
			(nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe
			automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang
			mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die
			Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die
			Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den
			Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
		</p>
		<br />

		<p>
			Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang,
			Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder
			allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden.
			Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur
			Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten
			in wiederum eigener Verantwortung verarbeiten.
		</p>
		<br />

		<p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
		<p>
			I. Informationen über uns als Verantwortliche<br />II. Rechte der Nutzer und Betroffenen<br
			/>III. Informationen zur Datenverarbeitung
		</p>
		<br />

		<strong>I. Informationen über uns als Verantwortliche</strong>
		<p>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
		Max Sommer<br />Mollerstraße 31<br />64289 Darmstadt
		<p>Telefon: +49 151 651 375 34<br />E-Mail: kontakt@maxsommer.de</p>
		<br />

		<strong>II. Rechte der Nutzer und Betroffenen</strong>
		<p>
			Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und
			Betroffenen das Recht
		</p>
		<br />

		<UnorderedList>
			<ListItem>
				auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die
				verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien
				der Daten (vgl. auch Art. 15 DSGVO);
			</ListItem>
			<ListItem>
				auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch
				Art. 16 DSGVO);
			</ListItem>
			<ListItem>
				auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder,
				alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist,
				auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;
			</ListItem>
			<ListItem>
				auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung
				dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
			</ListItem>
			<ListItem>
				auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie
				betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen
				verarbeitet werden (vgl. auch Art. 77 DSGVO).
			</ListItem>
		</UnorderedList>
		<br />

		<p>
			Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch
			den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder
			die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt,
			zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich
			oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer
			ein Recht auf Auskunft über diese Empfänger.
		</p>
		<br />

		<p>
			<strong
				>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch
				gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den
				Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist
				ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.</strong
			>
		</p>
		<br />

		<strong>III. Informationen zur Datenverarbeitung</strong>
		<p>
			Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt,
			sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen
			Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu
			einzelnen Verarbeitungsverfahren gemacht werden.
		</p>
		<br />

		<h4 class="jet-listing-dynamic-field__content">CloudFlare</h4>
		<p>
			Zur Absicherung unseres Internetauftritts sowie zur Optimierung der Ladezeiten setzen wir den
			Dienst CloudFlare als sog. CDN (Content-Delivery-Network) ein. Es handelt sich hierbei um
			einen Dienst der Cloudflare Inc., 101 Townsend Street, San Francisco, California 94107, USA,
			nachfolgend nur „CloudFlare“ genannt.
		</p>
		<br />

		<p>
			Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in dem
			sicheren Betrieb unseres Internetauftritts sowie in dessen Optimierung.
		</p>
		<br />

		<p>
			Sofern Sie unseren Internetauftritt aufrufen, werden Ihre Anfragen über den Server von
			CloudFlare geleitet. Hierbei werden statistische Zugriffsdaten über den Besuch unseres
			Internetauftritts erhoben und durch CloudFlare ein Cookie über Ihren Internet-Browser auf
			Ihrem Endgerät gespeichert. Zu den Zugriffsdaten zählen
		</p>
		<br />

		<p>– Ihre IP-Adresse,</p>
		<p>– die von Ihnen aufgerufene(n) Internetseite(n) unseres Internetauftritts,</p>
		<p>– Typ und Version des von Ihnen genutzten Internet – Browsers,</p>
		<p>– das von Ihnen genutzte Betriebssystem,</p>
		<p>
			– die Internetseite, von der sie auf unseren Internetauftritt gewechselt haben (Referrer-
			URL),
		</p>
		<p>– Ihre Verweildauer auf unserem Internetauftritt und</p>
		<p>– die Häufigkeit des Aufrufs unserer Internetseiten.</p>
		<p>
			Die Daten werden durch CloudFlare zum Zwecke statistischer Auswertungen der Zugriffe sowie zur
			Sicherheit und Optimierung des Angebots verwendet.
		</p>
		<br />
		<p>
			Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die Möglichkeit, die
			Installation der Cookies durch die entsprechenden Einstellungen in Ihrem Internet-Browser zu
			verhindern. Einzelheiten hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
		</p>
		<br />

		<p>CloudFlare bietet unter</p>
		<p>
			<a
				href="https://www.cloudflare.com/privacypolicy/"
				target="_blank"
				rel="noopener nofollow noreferrer">https://www.cloudflare.com/privacypolicy/</a
			>
		</p>
		<p>
			weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren Rechten und
			Möglichkeiten zum Schutz Ihrer Privatsphäre an.
		</p>
		<p>
			<a
				href="https://www.generator-datenschutzerklärung.de"
				target="_blank"
				rel="noopener noreferrer">Muster-Datenschutzerklärung</a
			>
			der
			<a
				href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html"
				target="_blank"
				rel="noopener noreferrer">Anwaltskanzlei Weiß &amp; Partner</a
			>
		</p>
	</div>
</ExpandableTile>

<br />
<ExpandableTile>
	<div slot="above">Imprint (German)</div>
	<div slot="below">
		<p>Angaben gemäß § 5 TMG</p>
		<br />

		<p>
			Max Sommer <br />
			Mollerstraße 31<br />
			64289 Darmstadt <br />
		</p>
		<br />

		<p>
			<strong>Kontakt:</strong> <br />
			Telefon: +49 151 651 375 34<br />
			E-Mail: kontakt@maxsommer.de<br />
		</p>
		<br />

		<p>
			<strong>Haftungsausschluss: </strong><br /><br />
			<strong>Haftung für Inhalte</strong><br /><br />
			Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
			und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
			wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
			Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
			gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
			Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
			nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
			erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
			von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br /><br />
			<strong>Haftung für Links</strong><br /><br />
			Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
			haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
			der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
			Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
			Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
			Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
			zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br
			/><br />
			<strong>Datenschutz</strong><br /><br />
			Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit
			auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen)
			erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden
			ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br />
			Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
			Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte
			ist nicht möglich. <br />
			Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
			Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
			ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
			im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br />
		</p>
		<br />

		Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der
		<a href="https://www.kanzlei-hasselbach.de/standorte/frankfurt/" rel="nofollow"
			>Kanzlei Hasselbach, Frankfurt</a
		>
	</div>
</ExpandableTile>
