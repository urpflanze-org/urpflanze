const path = require('path')
module.exports = (env, argv) => ({
	entry: path.join(__dirname, './src/js/index.js'),
	output: {
		filename: 'index.js',
		path: path.join(__dirname, './public'),
	},
	devtool: 'source-map',
	mode: argv.mode,
	watch: argv.watch,

	devServer: {
		contentBase: path.join(__dirname, './public'),
		host: '0.0.0.0',
		port: 8080,
	},
})
