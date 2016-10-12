//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import AppReducer from './reducers/AppReducer';
import routes from './routes';
import { Style, StyleRoot } from 'radium';
import normalize from 'radium-normalize';

// Add the reducer to your store on the `routing` key
const store = createStore(
  AppReducer
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <StyleRoot>
    <Style rules={normalize} />
    <Provider store={store}>
      <Router history={history} routes={routes(store)}></Router>
    </Provider>
  </StyleRoot>,
  document.querySelector('#app')
);
