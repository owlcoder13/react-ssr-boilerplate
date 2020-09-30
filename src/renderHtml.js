import React from 'react'

export default function renderHtml(props) {
    let { req, html, data, helmet, styles } = props;
    let context = {}

    return `<html>
    <head>
        <meta charset="utf-8"/>
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        
        <style>
            * {
                margin: 0;   
            }
            
            h1 {
                margin-bottom: 20px;;
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