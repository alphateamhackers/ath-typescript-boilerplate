const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'ath-component.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: 'less-loader'
                }]
            }, {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }, {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
            }, 
        ],
    },
    externals: {
        // shows how we can rely on browser globals instead of bundling these dependencies,
        // in case we want to access jQuery from a CDN or if we want an easy way to
        // avoid loading all moment locales: https://github.com/moment/moment/issues/1435
        jquery: '$',
        moment: 'moment'
    },
    resolve: {
        extensions: [ '*', '.ts', 'js', 'css' ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            extractComments:{
            condition: 'all',
            banner: `Alphateam Hackers GmbH. Component bootstraped from the https://github.com/alphateamhackers/ath-component-boilerplate`
        }})]
    },
};
