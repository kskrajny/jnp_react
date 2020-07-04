import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import App from './containers/App';

let store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

serviceWorker.unregister();
