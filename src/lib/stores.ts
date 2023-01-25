import type { Notification } from './notification';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { PersistedCode } from './qr.lib';

function createCount() {
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
	};
}


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
