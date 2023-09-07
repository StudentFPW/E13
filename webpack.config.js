const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    stats: "errors-only",
    devtool: 'inline-source-map',

    output: {
        filename: 'bundle.js',
    },

    devServer: {
        static: './dist',
        hot: true,
        port: 3001,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Практическая работа 13.7 (HW-03)',
        }),
        new ESLintPlugin(),
    ],
}