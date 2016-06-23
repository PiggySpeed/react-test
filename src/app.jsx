import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AboutPage from './pages/about.jsx';
import HomePage from './pages/home.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Route>
      </Router>
    )
  }
}