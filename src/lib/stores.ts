import type { PersistedCode } from './qr.lib';
import type { Notification } from './notification';
import { browser } from '$app/environment';
import JSZip from 'jszip';
import { writable } from 'svelte/store';
import { v4 } from 'uuid';

function createCodesStore() {
	const savedState: PersistedCode[] = browser
		? (JSON.parse(localStorage.getItem('codes') ?? '[]') as PersistedCode[])
		: [];
	const { subscribe, update } = writable<PersistedCode[]>(savedState);

	return {
		subscribe,
		add: (code: PersistedCode) => {
			update((codes) => {
				const updatedState = [...codes, code];
				localStorage.setItem('codes', JSON.stringify(updatedState));
				return updatedState;
			});
		},
		remove: (id: string) =>
			update((codes) => {
				const updatedState = codes.filter((code) => code.id !== id);
				localStorage.setItem('codes', JSON.stringify(updatedState));
				return updatedState;
			}),
		backup: () =>
			update((codes) => {
				const zip = new JSZip();
				zip.file('data.json', JSON.stringify(codes));
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				const images = zip.folder('qr-codes')!;
				codes.forEach((code) => {
					const base64 = code.dataUrl.split(',')[1];
					const fileSuffix =
						code.type === 'image/jpeg'
							? 'jpg'
							: code.type === 'image/png'
							? 'png'
							: code.type === 'image/webp'
							? 'webp'
							: '';
					images.file(`${code.name}.${fileSuffix}`, base64, { base64: true });
				});
				zip
					.generateAsync({ type: 'blob' })
					.then((content) => {
						const a = document.createElement('a');
						const url = URL.createObjectURL(content);
						a.href = url;
						a.download = 'qr-codes.zip';
						document.body.appendChild(a);
						a.click();
						setTimeout(() => {
							document.body.removeChild(a);
							window.URL.revokeObjectURL(url);
						}, 0);
					})
					.catch((error) => {
						notifications.add({
							kind: 'error',
							title: 'Could not create backup file',
							message: 'There was an error creating the backup file.',
						});
						console.error(error);
					});
				return codes;
			}),
		restore: async (file: File) => {
			const zip = new JSZip();

			let loadedZip: JSZip;
			try {
				loadedZip = await zip.loadAsync(file);
			} catch (error) {
				notifications.add({
					kind: 'error',
					title: 'Could not load backup file',
					message: 'There was an error loading the backup file.',
				});
				return update(() => []);
			}

			const dataFile = loadedZip.file('data.json');
			if (!dataFile) {
				notifications.add({
					kind: 'error',
					title: 'Invalid backup file',
					message: 'The backup file does not contain a data.json file.',
				});
				return update(() => []);
			}

			const data = await dataFile.async('string');
			return update(() => JSON.parse(data) as PersistedCode[]);
		},
		deleteAll: () =>
			update(() => {
				localStorage.removeItem('codes');
				return [];
			}),
	};
}

export const codes = createCodesStore();

const DEFAULT_NOTIFICATION_TIME = 8000;
function createNotificationStore() {
	const { subscribe, update } = writable<Notification[]>([]);
	return {
		subscribe,
		add: (notification: Omit<Notification, 'id' | 'timeout'>) =>
			update((notifications) => {
				const id = v4();
				setTimeout(() => {
					update((n) => n.filter((notification) => notification.id !== id));
				}, DEFAULT_NOTIFICATION_TIME);
				return [...notifications, { id, timeout: DEFAULT_NOTIFICATION_TIME, ...notification }];
			}),
		remove: (id: string) =>
			update((notifications) => notifications.filter((notification) => notification.id !== id)),
	};
}
export const notifications = createNotificationStore();
