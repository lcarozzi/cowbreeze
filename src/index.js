import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LocationTable from './containers/LocationTable';
import LocationAirQuality from './containers/LocationAirQuality';
import Messages from './containers/Messages';
import cowBreezeApp from './reducers';

const middleware = [thunk];

ReactDOM.render(
  <Provider store={createStore(cowBreezeApp, applyMiddleware(...middleware))}>
    <div>
      <LocationAirQuality />
      <Messages />
      <LocationTable />
    </div>
  </Provider>,
  document.getElementById('root'),
);
