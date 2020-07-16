module.exports = {
	// Deploy on GitHub pages
	// https://cli.vuejs.org/guide/deployment.html#github-pages
	publicPath: process.env.NODE_ENV === 'production' ? '/portto-interview/' : '/',

	// Access SCSS variables in all components
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/styles/_variables.scss";',
			},
		},
	},
}
