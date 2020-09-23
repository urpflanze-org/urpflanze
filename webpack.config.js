const path = require('path')
module.exports = (env, argv) => ({
	entry: './dist/index.js',
	output: {
		filename: argv.mode && argv.mode == 'production' ? 'urpflanze.min.js' : 'urpflanze.js',
		path: path.resolve('./build'),
		library: 'Urpflanze',
		libraryTarget: 'window',
		libraryExport: 'default',
	},
	mode: argv.mode,
	watch: argv.watch,
})
