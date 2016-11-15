var path = require('path');
var glob = require('glob');
var nodeExternals = require('webpack-node-externals');

module.exports = {    
    entry: {
        framework7: "./node_modules/framework7/dist/js/framework7.js",
        main: "./src/index.ts"  
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]             
    },
    output: {
        filename: 'src/index.js',        
        libraryTarget: 'commonjs'
    },    
    externals: [nodeExternals({
        importType: 'commonjs'
    }), 
        /.*\.less/
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }            
        ]
    },
    devtool: 'source-map'
};