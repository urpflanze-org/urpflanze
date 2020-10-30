const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
	const bProduction = argv.mode
	return {
		entry: path.join(__dirname, './docs/src/js/index.js'),
		output: {
			filename: 'index.js',
			path: path.join(__dirname, './docs/public'),
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, './docs/src/index.html'),
				filename: path.join(__dirname, './docs/public/index.html'),
				baseUrl: bProduction ? '/urpflanze/public/' : '/docs/public/',
			}),

			new HtmlWebpackPlugin({
				template: path.join(__dirname, './docs/src/redirect.html'),
				filename: path.join(__dirname, './docs/index.html'),
				baseUrl: bProduction ? '/urpflanze/public/' : '/docs/public/',
			}),

			new webpack.DefinePlugin({
				VERSION: JSON.stringify(require('./package.json').version),
			}),
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								url: false,
							},
						},
						'sass-loader',
					],
				},
			],
		},
		watchOptions: {
			ignored: /node_modules/,
		},
		devtool: 'source-map',
		mode: argv.mode,
		watch: argv.watch,

		devServer: {
			openPage: '/docs/public',
			contentBase: path.join(__dirname, '.'),
			publicPath: '/docs/public',
			watchContentBase: true,
			host: '0.0.0.0',
			hot: true,
			hotOnly: true,
			port: 8888,
		},
	}
}
