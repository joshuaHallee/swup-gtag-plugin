

# Swup Gtag Plugin
### This plugin is still in development and has not been tested.
Have a question or want to contribute? [Open an issue](https://github.com/joshuaHallee/swup-gtag-plugin/issues).

Google Analytic plugin for Global Site Tag (gtag.js). Gtag plugin triggers pageview event on `contentReplaced` (on each page change). Note that this event is not triggered at the first load, so the first page view must be triggered elsewhere. However, it should be noted that pageview event is called when [gtag.js is installed](https://developers.google.com/analytics/devguides/collection/gtagjs#install_the_global_site_tag).

Simplified code run by this plugin on `contentReplaced` event:

```javascript
window.gtag("config", "GA_MEASUREMENT_ID", {
  page_title: pageTitle,
  page_path: pageUrl
})
```

## Installation

This plugin can be installed with npm

```bash
npm install swup-gtag-plugin
```

and included with import

```javascript
import SwupGtagPlugin from 'swup-gtag-plugin';
```

or included from the dist folder

```html
<script src="./dist/SwupGtagPlugin.js"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new SwupGtagPlugin()]
});
```

## Options

### gaMeasurementId

`gaMeasurementId` defines your GA_MEASUREMENT_ID and is required. Defaults to empty object.

```javascript
new SwupGtagPlugin({
  gaMeasurementId: "GA_MEASUREMENT_ID"
});
```
