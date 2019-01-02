const path = require('path');
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
          { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true,
        overlay: true
    },

    devtool: 'cheap-eval-source-map' // remove for build
};