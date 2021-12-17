const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    resolve: {
        extensions: ['*', '.js']
    },
    module: {
        rules: [
           { test: /\.css$/, use: ['style-loader', 'css-loader'] },
           { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/, },

        ]
    }
}