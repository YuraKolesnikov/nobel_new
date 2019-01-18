const   path = require('path'),
        ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'build.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['@babel/preset-env'] } },
            { 
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
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