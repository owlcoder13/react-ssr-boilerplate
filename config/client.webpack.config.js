let baseConfig = require('./base.webpack.config');

module.exports = {
    ...baseConfig,
    entry: {
        client: ['@babel/polyfill', './src/client']
    },
    output: {
        filename: "public/js/[name].js",
        publicPath: "/js/",
    }
}