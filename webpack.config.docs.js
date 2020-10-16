const webpack = require('webpack')
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
			new webpack.DefinePlugin({
				BASE_PAGE_URL: bProduction ? '"https://raw.githubusercontent.com/genbs/urpflanze/dev/docs/"' : '"/docs/"',
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
			contentBase: path.join(__dirname, './docs/public'),
			host: '0.0.0.0',
			port: 8080,
		},
	}
}
