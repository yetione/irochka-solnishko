const path = require('path');

module.exports = {
    entry: [
        './assets/js/index.js',
        './assets/less/main.scss'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/build')
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        }]
    }
};