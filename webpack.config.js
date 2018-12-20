const path = require('path');
module.exports = {
    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/js'
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true
    },

    devtool: 'cheap-eval-source-map' // remove for build
};