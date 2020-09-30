import React from 'react';
import history from '../history'

export default function Link(props) {
    let onClick = (e) => {
        e.preventDefault();
        history.push(props.href, {})
    }

    return React.createElement('a', Object.assign({}, props, {
        onClick
    }))
}