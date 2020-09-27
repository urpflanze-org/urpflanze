const path = require('path')
module.exports = (env, argv) => ({
	entry: {
		urpflanze: './dist/index.js',
		'urpflanze-lite': './dist/index-lite.js',
	},
	output: {
		filename: argv.mode && argv.mode == 'production' ? '[name].min.js' : '[name].js',
		path: path.resolve('./build'),
		library: 'Urpflanze',
		libraryTarget: 'umd',
		globalObject: 'window',
		// libraryExport: 'default',
	},
	mode: argv.mode,
	watch: argv.watch,
})
