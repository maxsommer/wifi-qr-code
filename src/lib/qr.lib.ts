export interface StateObject {
	security: string | null;
	ssid: string | null;
	password: string | null;
	isHidden: string | null;
	errorCorrectionLevel: string | null;
	quality: string | null;
	colorLight: string | null;
	colorDark: string | null;
}

export const validErrorCorrectionLevels = [
	'L',
	'M',
	'Q',
	'H',
	'low',
	'medium',
	'quartile',
	'high',
] as const;
export type ErrorCorrectionLevel = (typeof validErrorCorrectionLevels)[number];
export const validSecurityTypes = ['WEP', 'WPA', 'WPA2', 'nopass'] as const;
export type Security = (typeof validSecurityTypes)[number];
export const validQualities = [128, 256, 512, 1024, 2048] as const;
export type Quality = (typeof validQualities)[number];

export function getValidatedQrParameters(stateObj: StateObject) {
	const { ssid, password } = stateObj;
	let { security, isHidden, errorCorrectionLevel, quality, colorLight, colorDark } = stateObj;

	if (!ssid) {
		throw new Error('SSID is required');
	}

	if (!password && security !== 'nopass') {
		throw new Error('Password is required');
	}

	security = security ?? 'WPA2';
	errorCorrectionLevel = errorCorrectionLevel ?? 'M';
	isHidden = isHidden ?? 'false';
	quality = quality ?? '512';
	colorLight = colorLight ?? '#161616';
	colorDark = colorDark ?? '#f4f4f4';

	if (!validate<ErrorCorrectionLevel>(errorCorrectionLevel, validErrorCorrectionLevels)) {
		throw new Error('Invalid error correction level');
	}
	if (!validate<Security>(security, validSecurityTypes)) {
		throw new Error('Invalid security type');
	}
	if (!validate<Quality>(parseInt(quality), validQualities)) {
		throw new Error('Invalid quality type');
	}

	return {
		security,
		ssid,
		password: atob(password || ''),
		isHidden: isHidden === 'true',
		errorCorrectionLevel: errorCorrectionLevel,
		quality: parseInt(quality),
		colorLight,
		colorDark,
	};
}

function validate<T extends string | number | boolean>(
	value: unknown,
	validValues: readonly T[],
): value is T {
	if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'symbol') {
		throw new Error('Wrong value type provided.');
	}
	return validValues.includes(value as T);
}
