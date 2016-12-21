var path = require('path');
var webpack = require('webpack');
var config = require("./webpack.config.js");


// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板 将创建出来的js类型全部添加到新创建的页面里面
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 获取启动文件的绝对路径
var node_modules = path.resolve(__dirname, 'node_modules');
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devSever: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080,
        header: { "Access-Control-Allow-Origin": "*" },
        proxy: {
          '/api/*': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              secure: false
          }
        }
      },

        devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080,
        header: { "Access-Control-Allow-Origin": "*" },
        proxy: {
          '/api/*': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              secure: false
          }
        }
      },

    entry: {
        index: [
            /**
             * //devServer{hot} 需要
             */
            'webpack/hot/dev-server',
            /**
             * There is no inline: true flag in the webpack-dev-server configuration, because the webpack-dev-server module has no access to the webpack configuration. Instead, the user must add the webpack-dev-server client entry point to the webpack configuration.
                To do this, simply add the following to all entry points: webpack-dev-server/client?http://«path»:«port»/
             */
            'webpack-dev-server/client?http://127.0.0.1:8080',
            path.resolve(__dirname, 'app/index.js')
        ],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        // 提高webpack搜索的速度
        alias: {}
    },
    devtool: 'source-map',
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
        loaders: [
            {
                // 匹配，.js .jsx
                test: /\.js[x]?$/,
                loaders: ['react-hot', 'babel'],
                // 排除模块中
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: "url?limit=10000"
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        //devServer{hot} 需要
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new HtmlWebpackPlugin({
            title: 'React Webpack',
            template: './app/index.html',
        }),
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080' }),
        new ExtractTextPlugin("main.css", {
            allChunks: true,
            disable: false
        }),
    ]
}