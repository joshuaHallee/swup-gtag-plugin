import Plugin from '@swup/plugin';

export default class GtagPlugin extends Plugin {
	name = 'GtagPlugin';

	mount() {
		if (typeof window.gtag === 'function') {
			let title = document.title;
			let url = window.location.pathname + window.location.search;

			window.gtag("config", "", {
				page_title: title,
				page_path: url
			})

			this.swup.log(`Gtag pageview (url '${url}').`);
		} else {
			console.warn('Gtag is not loaded.');
		}
	}
}
