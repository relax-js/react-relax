const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const app = require('./package.json');

const webpack = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: path.basename(app.main),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src/index.js'),
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /(\.less)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                    'less-loader',
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@relax-js/react-relax': path.resolve('dist', path.basename(app.main)),
        },
    },
    node: {
        Buffer: false,
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: true,
                compress: {
                    warnings: false,
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                },
                output: {
                    comments: false,
                },
            },
        }),
    ],
    stats: {
        builtAt: false,
        hash: false,
        modules: false,
        version: false,
        warnings: false,
    },
};

module.exports = webpack;
