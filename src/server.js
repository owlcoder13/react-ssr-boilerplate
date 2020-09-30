import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import renderHtml from './renderHtml';
import path from 'path'
import apiRoutes from './api/index';
import renderApp from "./renderApp";
import { Helmet } from 'react-helmet';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function createApp({ init }) {
    const app = express()

    app.use(express.static(path.resolve('./dist/public')));

    init(app);

    app.use(apiRoutes);

    app.get('*', async function (req, res) {
        let [renderedApp, data] = await renderApp(req.url)

        const sheet = new ServerStyleSheet()

        try {
            let output = ReactDOMServer.renderToString(sheet.collectStyles(renderedApp));
            const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();

            const helmet = Helmet.renderStatic();

            let html = renderHtml({
                html: output,
                req: req,
                data: data,
                helmet: helmet,
                styles: styleTags
            });

            res.end(html);
        } catch (error) {
            res.end('500' + error.toString());
        } finally {
            sheet.seal()
        }
    })

    return app;
}