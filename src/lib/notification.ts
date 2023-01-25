export interface Notification {
	id: string;
	kind: 'warning' | 'error' | 'success' | 'info';
	title: string;
	message: string;
	timeout: number;
}
