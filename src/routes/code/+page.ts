import QRCode from 'qrcode';
import { getValidatedQrParameters, type StateObject } from '../../lib/qr.lib';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	const state = url.searchParams.get('state');
	if (!state) {
		// TODO: Expected error
		throw new Error('State is required');
	}

	let stateObject: StateObject;

	try {
		stateObject = JSON.parse(atob(state)) as StateObject;
	} catch (error) {
		// TODO: Expected error
		throw new Error('Invalid state');
	}

	const {
		security,
		ssid,
		password,
		isHidden,
		errorCorrectionLevel,
		quality,
		colorDark,
		colorLight,
	} = getValidatedQrParameters(stateObject);

	const qrCodeString = `WIFI:S:${ssid};T:${security};P:${password};H:${isHidden};`;
	const dataUrl = await QRCode.toDataURL(qrCodeString, {
		width: quality,
		rendererOpts: { quality: 1 },
		errorCorrectionLevel: errorCorrectionLevel,
		color: {
			dark: colorDark,
			light: colorLight,
		},
	});

	return { dataUrl, security, ssid, password, isHidden };
}) satisfies PageLoad;
