var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
    devtool: 'source-map',
    // devtool: 'eval-source-map',
    // devtool: 'cheap-module-eval-source-map',
    // devtool: 'eval-cheap-module-source-map',
    // devtool: 'eval-cheap-source-map',
    // devtool: 'eval',
    // resolve: {
    //     extensions: [ '', '.js' ]
    // },
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join( __dirname, 'dist' ),
        pathinfo: path.join( __dirname, 'src' ),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                // exclude: /node_modules/,
                include: path.join( __dirname, 'src' )
            }
        ]
    }
};
