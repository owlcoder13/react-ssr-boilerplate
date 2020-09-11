module.exports = {
    mode: 'development',
    module: {
        rules: [],
    },
    module: {
        rules: [


            {
                test: /\.(eot|woff|woff2|ttf)$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // 'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    // 'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/js/dist',
                            name: '[name].[ext]'
                        },
                    },
                ],
            },
        ]
    }
}