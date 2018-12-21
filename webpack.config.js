const path = require('path');
module.exports = {
    entry: './src/app',

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
        contentBase: path.join(__dirname, 'public')
    },

    devtool: 'cheap-eval-source-map' // remove for build
};