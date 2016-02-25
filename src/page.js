import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import Paper from 'material-ui/lib/paper';
import Slider from 'material-ui/lib/slider';
import Card from 'material-ui/lib/card/card'
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

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
            <FlatButton>CLICK MEk!</FlatButton>
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