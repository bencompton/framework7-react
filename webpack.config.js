var path = require('path');
var glob = require('glob');
var nodeExternals = require('webpack-node-externals');

module.exports = {    
    entry: {
        main: ['./dist/temp/framework7.custom.js','./src/index.ts']
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]                 
    },
    output: {
        filename: 'src/index.js',
        libraryTarget: 'commonjs2'
    },    
    externals: [
        nodeExternals(), 
        /.*\.less/
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },   
        ]
    },
    devtool: 'source-map'
};