// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	const __APP_VERSION__: string;
	const __APP_NAME__: string;
	const __APP_HOMEPAGE__: string;
	const __APP_DESCRIPTION__: string;
	const __APP_MENU_TITLE__: string;
	const __APP_MENU_SUBTITLE__: string;
	const __APP_PROFILE_TABLE__: string;
	const __APP_PROFILE_KEY__: string;
	const __APP_THEME_COLOR__: string;
	const __APP_BACKGROUND_COLOR__: string;
}

export {};
