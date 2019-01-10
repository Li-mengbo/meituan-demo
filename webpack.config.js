var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            // 加载vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 加载js
            {
                test: '/\.js$/',
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // 加载css
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            //加载scss
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 加载图片
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            // 加载字体
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'vue demo',
            template: 'index.html'
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
    devServer: {
        // contentBase: "./index.html",
        noInfo: true,
        disableHostCheck: true,
        // historyApiFallback: {
        //     rewrites: [
        //         { from: /.*/, to: path.posix.join('/index.html') },
        //     ],
        // },
    }
}