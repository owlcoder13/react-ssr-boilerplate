import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import routes from '../routes'

export default function App(props) {
    return <Switch>
        {
            routes.map((route, index) => {
                let Component = route.component;

                return <Route
                    key={index}
                    path={route.path}
                    render={({match}) => {
                        return <Component data={props.data} route={match} />
                    }}
                />
            })
        }
    </Switch>
}