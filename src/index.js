import Plugin from '@swup/plugin';

export default class GtagPlugin extends Plugin {
	name = 'GtagPlugin';

	constructor(options) {
		super();
		const defaultOptions = {
			gaMeasurementId: ''
		};

		this.options = {
			...defaultOptions,
			...options
		}
	}

	mount() {
		if (typeof window.gtag === 'function' && this.options.gaMeasurementId != '') {
			let title = document.title;
			let url = window.location.pathname + window.location.search;

			window.gtag("config", `${this.options.gaMeasurementId}`, {
				page_title: title,
				page_path: url
			})

			this.swup.log(`Gtag pageview (url '${url}').`);
		} else {
			console.warn('Gtag is not loaded.');
		}
	}
}
