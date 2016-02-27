// The entry file specified in webpack is where we can begin placing our screens
// main.js is the file that opens index.html, which uses the bundle.js. Remember
// that the bundle.js file is created after transpiling the entry.js and associated
// modules.
// Is it possible to have main.js become the entry point? Can we merge main.js with
// entry.js?

import React from 'react';
import render from 'react-dom';
import DisplayPage from './components/display';
import AboutPage from './components/about';
import HomePage from './components/home';
import PageTemplate from './components/pagetemplate';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={PageTemplate}>
      <IndexRoute component={HomePage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/display" component={DisplayPage}/>
    </Route>
  </Router>
  ),document.getElementById('content')
);


