import * as React from 'react';
import { Link, IndexLink } from 'react-router';
import * as LeftNav from 'material-ui/lib/left-nav';
import * as MenuItem from 'material-ui/lib/menus/menu-item';
import * as RaisedButton from 'material-ui/lib/raised-button';

class NavLink extends React.Component {
  render(){
    return <Link {...this.props} activeClassName="active" />
  }
}

//possibly due to imports?
export default class PageTemplate extends React.Component {
  render() {
    return(
      <div>
        <div className="top-bar">
          <h1>REACTRON</h1>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/display">Display</NavLink>
        </div>
        <div>
            {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
};
