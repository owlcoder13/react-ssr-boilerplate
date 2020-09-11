let baseConfig = require('./base.webpack.config');

module.exports = {
    ...baseConfig,
    entry: {
        server: ['@babel/polyfill', './src/server.js'],
    },
    output: {
        filename: "./[name].js",
        publicPath: "/js/",
        libraryTarget: 'commonjs',
    },
    target: 'node',

}