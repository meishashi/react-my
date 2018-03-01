var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');

module.exports = {
    // context: path.join(__dirname),
    // context: __dirname + '/src',
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        app: './src/index.js'
    },
    devServer: {
        contentBase: './'
    },
    mode: debug ? "development" : "production",
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
    // plugins: debug ? [] : [
    //     new webpack.optimize.DedupePlugin(),
    //     new webpack.optimize.OccurenceOrderPlugin(),
    //     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // ]
};