import React from 'react'
import { renderToString } from 'react-dom';

import { StaticRouter, matchPath } from 'react-router-dom';
import routes from '../routes';

export default function Html(props) {
    let { req, html, data } = props;
    let context = {}

    return <html>
    <head>

    </head>
    <body>
    <div id="app">
        {html}
    </div>
    <script dangerouslySetInnerHTML={{ __html: "var preloadData = " + JSON.stringify(data) }} />
    <script src="/js/client.js"></script>
    </body>
    </html>
}