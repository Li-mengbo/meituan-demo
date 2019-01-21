"use strict"

// const path = require("path")
// const merge = require("webpack-merge")
// const baseWebpackConfig = require("./webpack.config")
// const nodeExternals = require("webpack-node-externals")

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

// module.exports = merge(baseWebpackConfig, {
//   target: "node",
//   devtool: false,
//   entry: {
//     app: resolve("../src/entry-skeleton.js")
//   },
//   output: Object.assign({}, baseWebpackConfig.output, {
//     libraryTarget: "commonjs2"
//   }),
//   externals: nodeExternals({
//     whitelist: /\.css$/
//   }),
//   plugins: []
// })

const path = require("path")
// const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
  target: "node",
  entry: {
    skeleton: "./src/skeleton.entry.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin({
      filename: "skeleton.json"
    })
  ]
}
