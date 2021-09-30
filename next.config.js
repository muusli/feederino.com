const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const webpack = require('webpack');
const path = require('path');
// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([ '@fullcalendar/core' ]);

module.exports = withFonts(
	withCSS(
		withImages(
			withSass(
				withTM({
					webpack(config, options) {
						config.module.rules.push({
							test        : /\.(eot|ttf|woff|woff2)$/,
							// options : { images: { domains: [ 'firebasestorage.googleapis.com' ] } },
							use         : {
								// images : { domains: [ 'firebasestorage.googleapis.com' ] },s
								loader : 'url-loader'

								// <----- in prod defaults to true if left blank
							},
							sideEffects : false
						});
						config.resolve.modules.push(path.resolve('./'));
						return config;
					}
				})
			)
		)
	)
);
