var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var typescript = require('rollup-plugin-typescript');

module.exports = {
    entry: "./index.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]             
    },
    output: {
        filename: 'index.js',
    },    
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },            
            { test: /\.less$/, loader: ExtractTextPlugin.extract({ fallbackLoader: "style-loader", loader: "css-loader!less-loader" }) },
            { test: /\.(png|svg)$/, loader: 'url-loader?limit=100000' }                                 
        ]
    },
    devtool: 'source-map',
    plugins: [        
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            }
        }),
        new ExtractTextPlugin("app.css")
    ]
};