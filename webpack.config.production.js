import {
    HotModuleReplacementPlugin
} from 'webpack';
import {
    resolve
} from 'path';
var nodeModulesPath = resolve(__dirname, 'node_modules');
var buildPath = resolve(__dirname, 'public', 'build');
var mainPath = resolve(__dirname, 'src', 'index.js');

var config = {

    // Makes sure errors in console map to the correct file
    // and line number
    mode: 'production',
    devtool: 'eval',
    entry: [
        mainPath
    ],
    output: {
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
                loader: 'css-loader'
            }

        ]
    },

    // We have to manually add the Hot Replacement plugin when running
    // from Node
    plugins: [new HotModuleReplacementPlugin()]
};

export default config;