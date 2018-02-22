const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './assets/index.js',
        // about: './assets/about.js'
    },
    
    output: {
        path:  path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    // перевод из es2015 в es5
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins:[
        /*new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        }),*/

        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            /*minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },*/
        })
    ]
};