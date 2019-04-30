"use strict";

const path = require('path');
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = ({config, mode}) => ({
  ...config,
  externals: {
    ...config.externals,
    cesium: "Cesium",
  },
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(js|jsx)$/,
        exclude: [/bower_components/, /node_modules/, /styles/],
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../../src')
      },
      {
        test: /.(glb|pnts)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    ...config.plugins,
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    }),
    ...(mode === "PRODUCTION"
      ? []
      : [
        new CopyPlugin([
          {
            from: "node_modules/cesium/Build/Cesium",
            to: "cesium",
          },
        ]),
      ]),
  ],
  resolve: {
    ...config.resolve,
    extensions: [...config.resolve.extensions, ".js", ".jsx"],
  },
});
