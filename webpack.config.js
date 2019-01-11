var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")
var VueLoaderPlugin = require("vue-loader/lib/plugin")
var webpack = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      // eslint
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [path.resolve(__dirname, "src")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      // 加载vue
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 加载js
      {
        test: "/\.js$/",
        use: {
          loader: "babel-loader",
          query: {
            presets: ["env", "stage-0", "react"] // env转换es6 stage-0转es7 react转react
          }
        },
        exclude: /node_modules/
      },
      // 加载css
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      // 加载scss
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      // 加载图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          outputPath: "images/",
          limit: 10000
        }
      },
      // 加载字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.resolve("src")
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         NODE_ENV: '"production"'
    //     }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // })
  ],
  // 服务配置
  devServer: {
    noInfo: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
}
