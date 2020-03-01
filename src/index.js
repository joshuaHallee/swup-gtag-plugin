import Plugin from '@swup/plugin';

export default class SwupGtagPlugin extends Plugin {
	name = 'SwupGtagPlugin';

	constructor(options) {
		super();

		const defaultOptions = {};

		this.options = {
			...defaultOptions,
			...options
		}
	}

	mount() {
		if(this.options.gaMeasurementId == undefined) {
			console.warn('Gtag is not configured with a GA_MEASUREMENT_ID');
		}

		this.swup.on('contentReplaced', event => {
			if (typeof window.gtag === 'function' && this.options.gaMeasurementId != undefined) {
				let title = document.title;
				let url = window.location.pathname + window.location.search;

				window.gtag("config", `${this.options.gaMeasurementId}`, {
					page_title: title,
					page_path: url
				})

				this.swup.log(`Gtag pageview (url '${url}').`);
			} else {
				console.warn("Gtag is not loaded.")
			}
		})
	}
}
