import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

require('./index.html');

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));


// Create app
const container = document.querySelector('#app-container');

console.log('store', store);

// Render app
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , container
);

// Hot module reloading
if (module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>
            , container
        );
    });
}