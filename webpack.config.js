const webpack = require('webpack')
const path = require('path')

const package = require('./package.json')
const version = JSON.stringify(package.version)

module.exports = (env, argv) => {
	const bProduction = argv.mode && argv.mode === 'production'

	return {
		entry: {
			urpflanze: './dist/index.js',
		},
		output: {
			filename: bProduction ? '[name].min.js' : '[name].js',
			path: path.resolve('./build'),
			library: 'Urpflanze',
			libraryTarget: 'umd',
			globalObject: 'window',
		},
		plugins: [
			new webpack.DefinePlugin({
				VERSION: version,
			}),
		],
		resolve: {
			fallback: {
				stream: false,
			},
		},
		devtool: argv.mode == 'production' ? undefined : 'source-map',
		mode: argv.mode,
		watch: argv.watch,
	}
}
