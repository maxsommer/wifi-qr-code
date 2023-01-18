import type { PageLoad } from './$types';
import QRCode from 'qrcode';

interface StateObject {
	security: string | null;
	ssid: string | null;
	password: string | null;
	isHidden: string | null;
	errorCorrectionLevel: string | null;
	quality: string | null;
}

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H' | 'low' | 'medium' | 'quartile' | 'high';
type Quality = 128 | 256 | 512 | 1024 | 2048;
type Security = 'WEP' | 'WPA' | 'WPA2' | 'nopass';

const validErrorCorrectionLevels = ['L', 'M', 'Q', 'H', 'low', 'medium', 'quartile', 'high'];
const validSecurityTypes = ['WEP', 'WPA', 'WPA2', 'nopass'];
const validQualities = [128, 256, 512, 1024, 2048];

export const load = (async ({ url }) => {
	const state = url.searchParams.get('state');
	if (!state) {
		console.error('State is required');
		throw new Error('State is required');
	}

	let stateObject: StateObject;

	try {
		stateObject = JSON.parse(atob(state)) as StateObject;
	} catch (error) {
		console.error('Invalid state');
		throw new Error('Invalid state');
	}

	const { security, ssid, password, isHidden, errorCorrectionLevel, quality } =
		getValidatedParameters(stateObject);

	const qrCodeString = `WIFI:S:${ssid};T:${security};P:${password};H:${isHidden};`;
	const dataUrl = await QRCode.toDataURL(qrCodeString, {
		width: quality,
		rendererOpts: { quality: 1 },
		errorCorrectionLevel: errorCorrectionLevel
	});

	return { dataUrl };
}) satisfies PageLoad;

function getValidatedParameters(params: StateObject) {
	if (!params.ssid) {
		throw new Error('SSID is required');
	}

	if (!params.security) {
		params.security = 'WPA2';
	}

	if (!params.password) {
		throw new Error('Password is required');
	}

	if (!params.isHidden) {
		params.isHidden = 'false';
	}

	if (!params.errorCorrectionLevel) {
		params.errorCorrectionLevel = 'M';
	}

	if (!params.quality) {
		params.quality = '512';
	}

	if (!validErrorCorrectionLevels.includes(params.errorCorrectionLevel)) {
		throw new Error('Invalid error correction level');
	}
	const validatedErrorCorrectionLevel = params.errorCorrectionLevel as ErrorCorrectionLevel;

	if (!validSecurityTypes.includes(params.security)) {
		throw new Error('Invalid security type');
	}
	const validatedSecurityType = params.security as Security;

	if (!validQualities.includes(parseInt(params.quality))) {
		throw new Error('Invalid quality');
	}
	const validatedQuality = parseInt(params.quality) as Quality;

	return {
		security: validatedSecurityType,
		ssid: params.ssid,
		password: params.password,
		isHidden: params.isHidden === 'true',
		errorCorrectionLevel: validatedErrorCorrectionLevel,
		quality: validatedQuality
	};
}
