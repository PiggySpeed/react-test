import * as React from 'react';
import { Link, IndexLink } from 'react-router';
import * as MenuItem from 'material-ui/lib/menus/menu-item';
import * as RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from './toolbar.jsx'


class NavLink extends React.Component {
  render(){
    return <Link {...this.props} activeClassName="active" />
  }
}
export default class PageTemplate extends React.Component {
  render() {
    return(
      <div>
        <div className="top-bar">
          <Toolbar/>
        </div>
        <div>
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
};
