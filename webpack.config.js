const   path = require('path'),
        autoprefixer = require('autoprefixer'),
        ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js',
        publicPath: '/public'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { 
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('build.css')
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true,
        overlay: true
    },

    devtool: 'cheap-eval-source-map' // remove for build
};