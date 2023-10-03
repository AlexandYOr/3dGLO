const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            // favicon: path.resolve(__dirname, 'favicon.png'),
        }),
        new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'fonts'), to: path.resolve(__dirname, 'dist', 'fonts')},
              { from: path.resolve(__dirname, 'images'), to: path.resolve(__dirname, 'dist', 'images') },
            ],
          }),
    ],
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        watchFiles: [
            './index.html', 
            './src/*.*'
        ],
        hot: true,
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /.css$/i,
                use: ["style-loader", {
                    loader: 'css-loader',
                    options: {
                        url: false,
                    }
                }],
            },
        ],
    }
}