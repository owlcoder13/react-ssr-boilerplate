const webpack = require('webpack');
const http = require('http');
const {
    createHttpTerminator,
} = require('http-terminator');

let server = null;
let terminator;
let serverSockets = [];

const port = 3001;

const serverConfig = require('./config/server.webpack.config');
const clientConfig = require('./config/client.webpack.config');

let handleCompilerError = (err, stats) => {
    console.log(stats.compilation.errors);
}

let serverCompiler = webpack(serverConfig);
let clientCompiler = webpack(clientConfig);

serverCompiler.watch({}, (err, stats) => {
    if (err || stats.hasErrors()) {
        handleCompilerError(err, stats);
    } else {
        clientCompiler.run((err2, stats2) => {
            if (err2 || stats2.hasErrors()) {
                handleCompilerError(err2, stats2);
            }

            // let clearPaths = `${__dirname}/dist`;
            // for (let path in require.cache) {
            //     if (path.startsWith(clearPaths)) {
            //         console.log('clear file', path)
            //         delete require.cache[path];
            //     }
            // }

            // clear cache and hot reload here
            delete require.cache[require.resolve('./dist/server')];
            let app = require('./dist/server').default;

            let startApp = () => {

                // server = app.listen(port, () => {
                //     console.log(`App listening at http://localhost:${port}`)
                // });
                server = http.createServer(app);
                terminator = createHttpTerminator({server})
                server.listen(3001, function(){
                    console.log('listen on 3001');
                });
            }

            if (server !== null) {
                console.log('server close start')

                terminator.terminate().then(() => {
                    console.log('closed')
                    startApp();
                })
                // ;
            } else {
                startApp()
            }
        });
    }
})


