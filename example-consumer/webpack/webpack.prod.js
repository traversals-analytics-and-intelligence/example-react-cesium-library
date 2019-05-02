/*
 * Copyright (c) 2019. Traversals Analytics and Intelligence GmbH
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
	mode: 'production',
	output: {
		filename: `${commonPaths.jsFolder}/[name].[hash].js`,
		path: commonPaths.outputPath,
		chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
		publicPath: commonPaths.publicPath,
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true,
				cache: true,
				sourceMap: true,
			}),
			new OptimizeCSSAssetsPlugin(),
		],
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'initial',
				},
				async: {
					test: /[\\/]node_modules[\\/]/,
					name: 'async',
					chunks: 'async',
					minChunks: 4,
				},
			},
		},
		runtimeChunk: true,
	},

	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: false,
							modules: true,
							camelCase: true,
							localIdentName: '[local]___[hash:base64:5]',
						},
					},
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `${commonPaths.cssFolder}/[name].css`,
			chunkFilename: `${commonPaths.cssFolder}/[name].css`,
		}),
	],
	devtool: 'source-map',
};
