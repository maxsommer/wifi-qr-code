import QRCode from 'qrcode';

export interface WifiData {
	id: string;
	security: Security;
	ssid: string;
	password: string;
	isHidden: string;
}
export interface CodeOptions {
	errorCorrectionLevel: ErrorCorrectionLevel;
	resolution: Resolution;
	colorLight: string;
	colorDark: string;
}

export type Code = WifiData & CodeOptions;
export type PersistedCode = Code & { type: ImageType; dataUrl: string };

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
export const validResolutions = [128, 256, 512, 1024, 2048] as const;
export type Resolution = (typeof validResolutions)[number];
export const validImageTypes = ['image/png', 'image/webp', 'image/jpeg'] as const;
export type ImageType = (typeof validImageTypes)[number];

export function getWifiQRString(
	ssid: string,
	security: Security,
	password: string,
	isHidden: boolean,
): string {
	return `WIFI:S:${ssid};T:${security};P:${password};H:${isHidden};`;
}

export async function getQRCodeDataUrl(
	params: Code & { qrCodeString: string; type: ImageType },
): Promise<string> {
	const { qrCodeString, resolution, errorCorrectionLevel, type, colorDark, colorLight } = params;
	return QRCode.toDataURL(qrCodeString, {
		width: resolution,
		rendererOpts: { quality: 1 },
		errorCorrectionLevel: errorCorrectionLevel,
		type,
		color: {
			dark: colorDark,
			light: colorLight,
		},
	});
}
