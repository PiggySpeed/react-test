import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import TextField from '../../node_modules/material-ui/lib/text-field';


class WeeklyList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="weeklyListCard"><p>{this.props.foogle}</p></Card>
    )
  }
}
class MonthlyList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="monthlyListCard"><p>{this.props.addItem}</p></Card>
    )
  }
}

export default class RightCol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: ["cow", "pig"]
    };
  }
  render() {
    return (
      <div className="right-col-container">
        <WeeklyList className="weeklyList" foogle="fecgffly"/>
        <MonthlyList addItem="piggly"/>
      </div>
    )
  }
}

var styles = {
  background: {
    backgroundColor: "#00ee00"}
};