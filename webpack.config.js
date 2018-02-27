const path = require("path")

const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	mode: "production",
	entry: {
		app: ['./index.js']
	},
	output: {
		filename: '[name].js',
		path: path.resolve('dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader'],
				allChunks: true
			})
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					css: ExtractTextPlugin.extract({
						use: ['css-loader'],
						fallback: 'vue-style-loader'
					})
				}
			}
		}]
	},
	resolve: {
		modules: [
			path.resolve('node_modules')
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "[name].css"
		})
	]
}