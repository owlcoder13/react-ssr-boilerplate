import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Html from './components/Html';
import path from 'path'
import { StaticRouter, matchPath } from 'react-router-dom';
import routes from "./routes";
import App from './components/App'

console.log('load module here')

const app = express()

app.use(express.static(path.resolve('./dist/public')));

app.get('/*', function (req, res) {

    const currentRoute = routes.find(route => matchPath(req.url, route)) || {};

    let promise;

    if (currentRoute.component.loadData) {
        promise = currentRoute.component.loadData()
    } else {
        promise = Promise.resolve(null);
    }



    promise.then(data => {

        let appRender = <StaticRouter location={req.url} context={{}}>
            <App data={data} />
        </StaticRouter>

        let html = ReactDOMServer.renderToString(
            <Html
                data={data}
                html={appRender}
                req={req}
            />
        )
        res.end(html);
    })
})

export default app;