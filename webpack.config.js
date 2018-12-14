const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/js'
    },
    module: {
        rules: [{
            test: /\.sass$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        overlay: true
    },

    devtool: 'cheap-eval-source-map' // remove for build
};