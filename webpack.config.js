//include path and html-webpack-plugin
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development", // use the development when updated, not the prod
    // add __dirname because Windows does not work very well using only path!
    entry: path.resolve(__dirname + "/src/js/index.js"),//this is the path that will make the bundle 
    output: {
        path: path.resolve(__dirname + "/build"), // bundle will be created on this path
        filename: "bundle.js" // bundle name
    },
    module:{
        rules:[
            {
                test: /\.js$/, //js
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',// this is the loader
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // create new plugin using the template
        })
    ],
    devtool: 'source-map'
}