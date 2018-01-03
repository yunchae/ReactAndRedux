const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill', 'eventsource-polyfill', './src/app.js']
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use:[{loader: 'babel-loader'}],
                exclude: ['/node_modules'],
            },
            {
                test: /\.html$/,
                use: ['file-loader']
            }]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
};