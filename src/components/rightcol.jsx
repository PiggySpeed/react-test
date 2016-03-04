import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
//import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import TextField from '../../node_modules/material-ui/lib/text-field';

var data = [
  {card1: "THIS IS CARD1"},
  {card2: "THIS IS CARD2!"}
];

class ShortPaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 375,
        height: 50,
        position: "relative",
        top: -24,
        margin: 6
      },
      data: {
        input: ""
      }
    };
  };
  displayContents() {
    return (
      this.state.data.input
    )
  };
  render() {
    return (
      <Paper onClick={this.props.onPiggy} style={this.state.style}>
        {this.props.results}
      </Paper>
   )
  };
}

export default class RightCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      text: "its working now"
    };
    this.generateList();
  };
  generateList() {
    for (var i=0; i<data.length; i++) {
      this.state.cards.push(data[i]);
    }
  }
  piggyTest(){
    this.setState({
      text: "I CHANGED THE STATE"
    })
  }
  piggyTest2() {
    this.setState({
      text: "BACK TO NORMAL!!"
    })
  }
  render() {
    return (
      <div>
        <RaisedButton onClick={this.piggyTest.bind(this)}>ClickMe</RaisedButton>
        <ShortPaper onPiggy={this.piggyTest2.bind(this)} results={this.state.text}/>
      </div>
    )
  }
}