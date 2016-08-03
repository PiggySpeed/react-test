import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
//import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
//import Card from '../../node_modules/material-ui/lib/card/card'
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
//import Colors from '../../node_modules/material-ui/lib/styles/colors';
import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';

class LeftNavSimple extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <LeftNav>
        <MenuItem>Hello0</MenuItem>
        <MenuItem>Hello1</MenuItem>
        <MenuItem>Hello2</MenuItem>
      </LeftNav>
    )
  }
}

export default class AboutPage extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="column-12--hand
            column-8--lap
            column-6--desk
            column-4--wall">
          <div className="box">Responsivee</div>
        </div>
      </div>
    );
  }
};