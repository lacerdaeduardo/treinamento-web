import {
    HotModuleReplacementPlugin
} from 'webpack';
import {
    resolve
} from 'path';
var nodeModulesPath = resolve(__dirname, 'node_modules');
var buildPath = resolve(__dirname, 'public', 'build');
var mainPath = resolve(__dirname, 'src', 'index.js');
var cssPath = resolve(__dirname, 'src', 'css.js');

var config = {

    // Makes sure errors in console map to the correct file
    // and line number
    mode: 'development',
    devtool: 'eval',
    entry: [

        // For hot style updates
        'webpack/hot/dev-server',

        // The script refreshing the browser on none hot updates
        'webpack-dev-server/client?http://localhost:8080',

        // Our application
        mainPath
    ],
    output: {

        // We need to give Webpack a path. It does not actually need it,
        // because files are kept in memory in webpack-dev-server, but an
        // error will occur if nothing is specified. We use the buildPath
        // as that points to where the files will eventually be bundled
        // in production
        path: buildPath,
        filename: 'bundle.js',

        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: '/build/'
    },
    module: {

        rules: [

            // I highly recommend using the babel-loader as it gives you
            // ES6/7 syntax and JSX transpiling out of the box
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [nodeModulesPath]
            },

            // Let us also add the style-loader and css-loader, which you can
            // expand with less-loader etc.
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    // We have to manually add the Hot Replacement plugin when running
    // from Node
    plugins: [new HotModuleReplacementPlugin()]
};

export default config;