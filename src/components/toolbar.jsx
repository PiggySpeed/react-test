import * as React from 'react';
import { Link, IndexLink } from 'react-router';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
//import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import DropDownMenu from '../../node_modules/material-ui/lib/DropDownMenu';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import PixelFrame from './pixelframe.jsx';

import Radium from 'radium';

//dropdown menu won't work unless you add the following two lines:
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var styles = {
  base: {
    color: "#79e5ff"
  },
  active: {
    backgroundColor: "Green"
  },
  success: {
    background: "Yellow"
  }
};

@Radium
class Logo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <span className="logoSpace">
        <p>logo</p>
      </span>
    )
  }
}
@Radium
class ToolbarMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 1
    };
  }
  handleChange(event, index, value) {
    this.setState({
      value: value
    });
  }
  render() {
    return(
      <span className="toolbarMenuSpace">
        <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
          <MenuItem value={1} primaryText="Home"/>
          <MenuItem value={2} primaryText="About"/>
          <MenuItem value={3} primaryText="Display"/>
        </DropDownMenu>
      </span>
    )
  }
}

class NavLink extends React.Component {
  render(){
    return <Link {...this.props} activeClassName="active" />
  }
}
export default class Toolbar extends React.Component {
  constructor(props){
    super(props);
  }
  displayRoute(){
    console.log("it works")
  }
  render() {
    return(
      <span>
        <Logo/>
        <span>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <NavLink to="/about">About</NavLink>t
          <NavLink to="/display">Display</NavLink>
        </span>
        <PixelFrame/>
        <ToolbarMenu returnRoute={this.displayRoute.bind(this)}/>
      </span>

    )
  }
}
//<IndexLink to="/" activeClassName="active"/>
//<NavLink to="/about"/>
//<NavLink to="/display"/>
///