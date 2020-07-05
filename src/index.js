import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import * as serviceWorker from './serviceWorker';
import rootEpic from './epics';
import rootReducer from './reducers';
import App from './containers+selectors/App';

const epicMiddleware = createEpicMiddleware();

let store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(rootEpic);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

serviceWorker.unregister();
