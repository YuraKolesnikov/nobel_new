const   path = require('path'),
        autoprefixer = require('autoprefixer')
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
          { test: /\.sass$/, use: [ 
              { loader: 'style-loader' }, 
              { loader: 'css-loader' }, 
              //{ loader: 'postcss-loader', options: { plugins: [ autoprefixer({ browsers:['ie >= 8', 'last 4 version'] }) ],sourceMap: true }}, 
              { loader: 'sass-loader' }] }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true,
        overlay: true
    },

    devtool: 'cheap-eval-source-map' // remove for build
};