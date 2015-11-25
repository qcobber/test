
var path = require('path');
var webpack = require('webpack');
var config = {
    devtool: 'source-map',
    entry  : [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/main'
    ],
    output: {
        //path: path.resolve(__dirname, 'build'),
        path    : path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test   : /\.jsx?$/,
                loaders: [
                    'react-hot',
                    'babel'
                ],
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src')
            }
            /*,{
                test   : /\.css$/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer'
                ]
            },
            {
                test   : /\.sass/,
                loaders: [
                    'style',
                    'css?sourceMap',
                    'sass?sourceMap'
                ]
            }*/
    ]
  }
};

module.exports = config;