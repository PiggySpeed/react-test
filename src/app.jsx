import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DisplayPage from './pages/display.jsx';
import AboutPage from './pages/about.jsx';
import HomePage from './pages/home.jsx';
import PageTemplate from './pages/pagetemplate.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={PageTemplate}>
          <IndexRoute component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/display" component={DisplayPage}/>
        </Route>
      </Router>
    )
  }
}