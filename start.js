const webpack = require('webpack');
const http = require('http');
const path = require('path');
const fs = require('fs');

let app = null;
let server = null;

const PORT = 3001;

const serverConfig = require('./config/server.webpack.config');
const clientConfig = require('./config/client.webpack.config');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// server config
clientConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
];

clientConfig.entry.client.unshift('webpack-hot-middleware/client');

let handleCompilerError = (err, stats) => {
    console.log(stats.compilation.errors);
}

let serverCompiler = webpack(serverConfig);
let clientCompiler = webpack(clientConfig);

clientCompiler.outputFileSystem = require('fs')

let devMiddleware = webpackDevMiddleware(clientCompiler, {
    noInfo: false,
    publicPath: clientConfig.output.publicPath,
    writeToDisk: true,

});

devMiddleware.fs = fs;

let hotMiddleware = webpackHotMiddleware(clientCompiler, {
    // 'log': console.log,
    // 'path': '/__webpack_hmr',
    // 'heartbeat': 10 * 1000,
});

function initApp(app) {
    app.use(devMiddleware)
    app.use(hotMiddleware)
}

serverCompiler.run(() => {
    let createApp = require('./dist/server').default;

    app = createApp({ init: initApp })
    let currentApp = app
    server = http.createServer(app);
    server.listen(3000);

    serverCompiler.watch({}, (err, stats) => {

        if (err || stats.hasErrors()) {
            handleCompilerError(err, stats);
        }

        delete require.cache[require.resolve('./dist/server')];
        createApp = require('./dist/server').default;

        app = createApp({ init: initApp })

        server.removeListener('request', currentApp)
        server.on('request', app)
        currentApp = app
    })

    return app;
})


// serverCompiler.watch({}, (err, stats) => {
//     if (err || stats.hasErrors()) {
//         handleCompilerError(err, stats);
//     } else {
//         clientCompiler.run((err2, stats2) => {
//             if (err2 || stats2.hasErrors()) {
//                 handleCompilerError(err2, stats2);
//             }
//
//             // clear cache and hot reload here
//             delete require.cache[require.resolve('./dist/server')];
//             let app = require('./dist/server').default;
//
//             let startApp = () => {
//
//                 // server = app.listen(port, () => {
//                 //     console.log(`App listening at http://localhost:${port}`)
//                 // });
//                 server = http.createServer(app);
//                 terminator = createHttpTerminator({ server })
//                 server.listen(3001, function () {
//                     console.log('listen on 3001');
//                 });
//             }
//
//             if (server !== null) {
//                 console.log('server close start')
//
//                 terminator.terminate().then(() => {
//                     console.log('closed')
//                     startApp();
//                 })
//                 // ;
//             } else {
//                 startApp()
//             }
//         });
//     }
// })


