import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './containers/App'
import cowBreezeApp from './reducers'

const middleware = [ thunk ];

ReactDOM.render(
  <Provider store={createStore(cowBreezeApp, applyMiddleware(...middleware))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
