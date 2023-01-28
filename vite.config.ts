import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			manifest: {
				name: 'Wifi QR Code',
				short_name: 'Wifi QR Code',
				theme_color: '#161616',
				background_color: '#161616',
				display: 'standalone',
				orientation: 'portrait',
				scope: '/',
				start_url: '/',
				lang: 'en-US',
				icons: [
					{
						src: '/apple-touch-icon-57x57.png',
						sizes: '57x57',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-72x72.png',
						sizes: '72x72',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-76x76.png',
						sizes: '76x76',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-114x114.png',
						sizes: '114x114',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-120x120.png',
						sizes: '120x120',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-144x144.png',
						sizes: '144x144',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-152x152.png',
						sizes: '152x152',
						type: 'image/png',
					},
					{
						src: '/apple-touch-icon-180x180.png',
						sizes: '180x180',
						type: 'image/png',
					},
					{
						src: '/favicon.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
};

export default config;
