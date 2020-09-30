import React from 'react';
import router from "./routes";
import NotFound from "./pages/NotFound";

const renderApp = async (location, firstRender = false) => {
    let data = null;

    let component = null;

    try {
        component = await router.resolve(location);
    } catch (err) {
        component = NotFound;
    }

    if (firstRender) {
        data = window.preloadData;
    } else if (component.loadData) {
        data = await component.loadData()
    }

    return [React.createElement(component, { data }), data];
}

export default renderApp;