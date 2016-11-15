var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./index.ts",
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]             
    },
    output: {
        filename: 'index.js',
    },    
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },            
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.(png|svg)$/, loader: 'url-loader?limit=100000' }                                 
        ]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
};