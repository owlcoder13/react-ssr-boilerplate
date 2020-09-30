import { createBrowserHistory, createMemoryHistory } from 'history';
import parse from 'url-parse';
import isNode from 'is-node'
import deepEqual from 'fast-deep-equal';

let history = null;

if (isNode) {
    history = createMemoryHistory
} else {
    history = createBrowserHistory();
}

const _push = history.push;

history.push = function (path, state) {
    console.log('push', path)
    const parsedPath = parse(path);
    const location = history.location;
    if (parsedPath.pathname === location.pathname
        && parsedPath.query === location.search
        && parsedPath.hash === location.hash
        && deepEqual(state, location.state)) {
        return;
    }

    const args = Array.from(arguments);
    args.splice(0, 2);
    return _push.apply(history, [path, state, ...args]);
}

export default history;
