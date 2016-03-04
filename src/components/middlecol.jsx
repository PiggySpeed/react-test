import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
//import Card from '../../node_modules/material-ui/lib/card/card';
//import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
//import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import TextField from '../../node_modules/material-ui/lib/text-field';

class FancyNotes extends React.Component {
  render() {
    return (
      <Paper className="middle-col-text">
        <h6>Enter Your Notes Here</h6>
        <textarea className="middle-col-text-area">
        </textarea>
      </Paper>
    )
  }
}

// next steps: create right column

export default class MiddleCol extends React.Component {
  render() {
    return (
      <FancyNotes/>
    )
  }
}