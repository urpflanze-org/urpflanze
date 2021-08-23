const webpack = require('webpack')
const path = require('path')

const package = require('./package.json')
const version = JSON.stringify(package.version)

const dependencies = package.dependencies
const coreVersion = dependencies['@urpflanze/core']
const drawerVersion = dependencies['@urpflanze/drawer-canvas']

const plugins = bProduction => [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(bProduction ? 'production' : 'development'),
	}),
	new webpack.BannerPlugin({
		banner:
			`@license UrpflanzeJS v${version}` +
			`\n[file]` +
			`\n\nGithub: https://github.com/urpflanze-org/urpflanze` +
			`\n\nThis source code is licensed under the MIT license found in the\nLICENSE file in the root directory of this source tree.` +
			`\n\nCore: ${coreVersion} | DrawerCanvas: ${drawerVersion}`,
	}),
]

const umd = (bProduction, bLight) => ({
	entry: bLight ? './dist/cjs/index-light.js' : './dist/cjs/index.js',
	output: {
		filename: 'urpflanze' + (bLight ? '-light' : '') + (bProduction ? '.min' : '') + '.js',
		path: path.resolve('./build/umd'),
		library: {
			name: 'Urpflanze',
			type: 'umd',
		},
		globalObject: 'window',
	},
	plugins: plugins(bProduction),
	devtool: bProduction ? undefined : 'source-map',
	mode: bProduction ? 'production' : 'none',
})

const esm = (bProduction, bLight) => ({
	entry: bLight ? './dist/esm/index-light.js' : './dist/esm/index.js',
	output: {
		filename: 'urpflanze' + (bLight ? '-light' : '') + (bProduction ? '.min' : '') + '.js',
		path: path.resolve('./build/esm'),
		library: {
			type: 'module',
		},
	},
	plugins: plugins(bProduction),
	devtool: bProduction ? undefined : 'source-map',
	mode: bProduction ? 'production' : 'none',
	experiments: {
		outputModule: true,
	},
})

module.exports = [
	umd(false, false), // urpflanze.js
	umd(true, false), // urpflanze.min.js
	umd(false, true), // urpflanze-light.js
	umd(true, true), // urpflanze-light.minjs
	esm(false, false),
	esm(true, false),
	esm(false, true),
	esm(true, true),
]
