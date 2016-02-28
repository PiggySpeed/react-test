// This module serves as a common template for all
// pages. It includes things that don't change when
// switching between pages, such as the navigation.
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
class LeftNavSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };
  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
export default class PageTemplate extends React.Component{
  render() {
    return(
      <div>
        <h1 className="boxit1">REACTRON</h1>
        <LeftNavSimpleExample />
        <ul className="boxit3" role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/display">Display</NavLink></li>
        </ul>
        <div className="row">
          <div className="boxit2">
            {this.props.children || <Home/>}
          </div>
        </div>
      </div>
    )
  }
}
