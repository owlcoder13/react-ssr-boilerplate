let baseConfig = require('./base.webpack.config');

module.exports = {
    ...baseConfig,
    entry: {
        server: "./src/server.js",
    },
    output: {
        filename: "./[name].js",
        publicPath: "/js/",
        libraryTarget: 'commonjs',
    },
    target: 'node',

}