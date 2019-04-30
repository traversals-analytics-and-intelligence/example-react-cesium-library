
const path = require('path');
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss|css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
			{
				test: /.js$/,
				enforce: "pre",
				include: path.resolve(__dirname, cesiumSource),
				use: [
					{
						loader: "strip-pragma-loader",
						options: {
							pragmas: {
								debug: false,
							},
						},
					},
				],
			}
		],
	},
	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
		alias: {
			cesium$: 'cesium/Cesium',
			cesium: 'cesium/Source'
		}
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.join(cesiumSource, cesiumWorkers),
				to: "Workers",
			},
			{
				from: path.join(cesiumSource, "Assets"),
				to: "Assets",
			},
			{
				from: path.join(cesiumSource, "Widgets"),
				to: "Widgets",
			},

		]),
		new webpack.DefinePlugin({
			CESIUM_BASE_URL: JSON.stringify(""),
		}),
	],
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: 'dfp-earth.js',
		libraryTarget: 'umd',
		sourcePrefix: ''
	},
	amd: {
		// Enable webpack-friendly use of require in Cesium
		toUrlUndefined: true
	},
	node: {
		// Resolve node module use of fs
		fs: 'empty'
	}
};
