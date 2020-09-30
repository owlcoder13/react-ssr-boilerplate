import React from 'react'

export default function renderHtml(props) {
    let { req, html, data, helmet, styles } = props;
    let context = {}

    return `<html>
    <head>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        <style>
            * {
              margin: 0;   
            }
        </style>
        ${styles}
    </head>
    <body>
    <div id="app">${html}</div>
    <script>var preloadData = ${JSON.stringify(data)};</script>
    <script src="/js/client.js"></script>
    </body>
    </html>`
}