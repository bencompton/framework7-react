var path = require('path');
var webpack = require('webpack');

module.exports.getWebpackConfig = (minify) => {
    let config = {
        watch: false,
        entry: "./framework7-react/index.ts",
        resolve: {
            extensions: [".ts", ".tsx", ".js"]             
        },
        output: {
            filename: 'framework7-react.js',
            library: 'framework7-react',
            libraryTarget: 'umd'
        },    
        module: {
            rules: [
                { test: /\.tsx?$/, loader: "awesome-typescript-loader?declaration=false" },
                { test: /\.js$/, exclude: /(node_modules)/, loader: "babel-loader" }                
            ]
        },
        externals: {
            "react": "React"
        },    
        devtool: 'source-map',
        plugins: []
    };

    if (minify) {
        config.output.filename = 'framework7-react.min.js';

        config.plugins.push(
            new webpack.LoaderOptionsPlugin({ minimize: true, debug: false })
        );

        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                output: {
                    comments: false,
                }
            })
        );
    }

    return config;
};
