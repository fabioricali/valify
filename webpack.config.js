const webpack = require('webpack');
const unminifiedWebpackPlugin = require('unminified-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');
const pkg = require('./package.json');

module.exports = {
    entry: './index.js',
    output: {
        filename: './dist/valify.min.js',
        library: 'valify',
        umdNamedDefine: true,
        libraryTarget: 'umd'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js'],
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
            },
        }],
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            comments: false,
            compress: {
                warnings: false
            }, include: /\.min\.js$/
        }),
        new WebpackAutoInject({
            PACKAGE_JSON_PATH: './package.json',
            components: {
                InjectAsComment: true,
                InjectByTag: true,
            },
            componentsOptions: {
                InjectAsComment: {
                    tag: 'Valify Build version: {version}'
                }
            }
        }),
        new unminifiedWebpackPlugin()
    ]
};
