import type { LayoutLoad } from './$types';

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = false;
export const ssr = false;

export const load = (async ({ fetch }) => {
	const result = await fetch('/rest/features');
	const item = await result.json();
	return {
		features: item,
		title: 'ESP32 Sveltekit Lightswitch',
		github: 'soylentOrange/esp32-sveltekit',
		copyright: '2024 soylentOrange',
		appName: 'ESP32 Sveltekit Lightswitch'
	};
}) satisfies LayoutLoad;
