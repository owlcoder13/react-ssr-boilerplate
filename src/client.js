import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

function init(Component) {
    ReactDOM.hydrate(<BrowserRouter>
        <Component data={preloadData} />
    </BrowserRouter>, document.getElementById('app'))
}

init(App);

if (module.hot) {
    module.hot.accept('./components/App', function (component) {
        let NewApp = require('./components/App').default;
        init(NewApp);
    })
}