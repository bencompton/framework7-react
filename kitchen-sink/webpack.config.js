var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    watch: true,
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
        new ExtractTextPlugin("app.css")
    ]
};