import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './data/configureStore'
const store = configureStore();

import App from './App'

render( (
    <Provider store={ store }>
        <div>
            <App />
            { !window.devToolsExtension ? <DevTools /> : null }
        </div>
    </Provider>
), document.getElementById( 'root' ) );
