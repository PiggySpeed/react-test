// The entry file specified in webpack is where we can begin placing our screens
// main.js is the file that opens index.html, which uses the bundle.js. Remember
// that the bundle.js file is created after transpiling the entry.jsx and associated
// modules.
// Is it possible to have main.js become the entry point? Can we merge main.js with
// entry.js?
import * as React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(todoApp);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);

