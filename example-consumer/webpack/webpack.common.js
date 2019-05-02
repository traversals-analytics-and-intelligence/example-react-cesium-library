const webpack = require('webpack');
const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetPlugin = require('html-webpack-include-assets-plugin');
const commonPaths = require('./paths');

module.exports = {
	entry: commonPaths.entryPath,
	module: {
		unknownContextCritical: false,
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: commonPaths.imagesFolder,
						},
					},
				],
			},
			{
				test: /\.(woff2|ttf|woff|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: commonPaths.fontsFolder,
						},
					},
				],
			},
		],
	},
	serve: {
		add: app => {
			app.use(convert(history()));
		},
		content: commonPaths.entryPath,
		dev: {
			publicPath: commonPaths.outputPath,
		},
		open: true,
	},
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.css', '.scss'],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: commonPaths.templatePath,
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'async',
		}),
		new CopyWebpackPlugin([
			{
				from: 'node_modules/cesium-react-library/dist/Assets',
				to: 'Assets',
			},
			{
				from: 'node_modules/cesium-react-library/dist/Widgets',
				to: 'Widgets',
			},
			{
				from: 'node_modules/cesium-react-library/dist/Workers',
				to: 'Workers',
			},
		]),
		new HtmlWebpackIncludeAssetPlugin({
			append: false,
			assets: ['Widgets/widgets.css'],
		}),
	],
};
