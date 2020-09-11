import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Html from './components/Html';
import path from 'path'

console.log('load module here')

const app = express()

app.use(express.static(path.resolve('./dist/public')));

app.get('/', function (req, res) {
    let ctx = {};
    let html = ReactDOMServer.renderToString(<Html ctx={ctx} />)
    res.end(html);
})

export default app;