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
		remove: (id: string) => update((codes) => codes.filter((code) => code.id !== id)),
	};
}

export const codes = createCount();
