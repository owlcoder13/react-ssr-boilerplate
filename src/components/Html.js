import React from 'react'
import { renderToString } from 'react-dom';
import App from './App'

export default function Html(props) {

    let app = <App />

    return <html>
    <head>

    </head>
    <body>
    <div id="app">
        {app}
    </div>
    <script src="/js/client.js"></script>
    </body>
    </html>
}