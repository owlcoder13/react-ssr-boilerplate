import React from 'react';
import ReactDOM from 'react-dom'
import history from './history';
import renderApp from "./renderApp";

// push new state? reload router =)
history.listen((location, action) => {
    render(renderApp);
})

// If firs render here You may not preloadData twice. And you should hydrate
let firstRender = true;

async function render(renderApp) {
    let method = firstRender ? 'hydrate' : 'render'
    let [app, data] = await renderApp(history.location, firstRender);
    firstRender = false;

    ReactDOM[method](<>
        {app}
    </>, document.getElementById('app'))
}

render(renderApp);

if (module.hot) {
    module.hot.accept('./renderApp', function (component) {
        let renderApp = require('./renderApp').default;
        render(renderApp);
    })
}