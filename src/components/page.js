import React from 'react';
import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import Paper from '../../node_modules/material-ui/lib/paper';
import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card'
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';


const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

const style2 = {
  height:500,
  width: 500,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block'
};


export default class Piggy extends React.Component{
  render() {
    return(
      <div>
        <Paper style = {style2}>
          <Paper style={style}>
            <FlatButton>CLICffff!</FlatButton>
          </Paper>
          <Paper style={style}>
            <RaisedButton>PiggyBoy</RaisedButton>
            <Card> TESTING </Card>
            <Slider> </Slider>
          </Paper>
        </Paper>
      </div>
    );
  }
};