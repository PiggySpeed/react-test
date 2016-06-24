import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// Main Store
import store from 'mainstore/store';

// Pages
import MainPage from 'modules/main/main.jsx';
import AboutPage from 'modules/about/about.jsx';
import HomePage from 'modules/home/home.jsx';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainPage}>
        <IndexRoute component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
      </Route>
    </Router>
  </Provider>
);

export default routes;

//function connectToStores(Component, stores, getStateFromStores) {
//  const StoreConnection = React.createClass({
//    getInitialState() {
//      return getStateFromStores(this.props);
//    },
//
//    componentDidMount() {
//      stores.forEach(store =>
//        store.addChangeListener(this.handleStoresChanged)
//      );
//    },
//
//    componentWillUnmount() {
//      stores.forEach(store =>
//        store.removeChangeListener(this.handleStoresChanged)
//      );
//    },
//
//    handleStoresChanged() {
//      if (this.isMounted()) {
//        this.setState(getStateFromStores(this.props));
//      }
//    },
//
//    render() {
//      return <Component {...this.props} {...this.state} />;
//    }
//  });
//
//  return StoreConnection;
//};
//