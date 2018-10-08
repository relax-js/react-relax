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
                exclude: ['node_modules'],
                loader: 'babel-loader',
            },
            {
                /** Globals */
                test: /(\.css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
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
    externals: {
        // Don't bundle react
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
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
