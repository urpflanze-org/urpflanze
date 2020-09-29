const path = require('path')
module.exports = (env, argv) => ({
	entry: {
		urpflanze: './dist/index.js',
		'urpflanze-light': './dist/index-light.js',
	},
	output: {
		filename: argv.mode && argv.mode == 'production' ? '[name].min.js' : '[name].js',
		path: path.resolve('./build'),
		library: 'Urpflanze',
		libraryTarget: 'umd',
		globalObject: 'window',
		// libraryExport: 'default',
	},
	devtool: 'source-map',
	mode: argv.mode,
	watch: argv.watch,
})
