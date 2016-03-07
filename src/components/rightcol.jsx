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
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

import Radium from 'radium';

@Radium
class WeeklyList extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps() {
    return {
      data: []
    }
  }
  render() {
    return (
      <Table
        multiSelectable={true}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow>
            <TableRowColumn>
              {this.props.data.title}
            </TableRowColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}>
          {this.props.data.goals.map(function(item, i){
            return (
              <TableRow key={i}>
                <TableRowColumn>
                  {item}
                </TableRowColumn>
              </TableRow>
            )})}
        </TableBody>
      </Table>
    )
  }
}

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

class MonthlyList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Table
        multiSelectable={true}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}>
          <TableRow>
            <TableRowColumn>
              {this.props.data.title}
            </TableRowColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={false}>
          {this.props.data.goals.map(function(item, i){
            return (
              <TableRow key={i}>
                <TableRowColumn>
                  {item}
                </TableRowColumn>
              </TableRow>
            )})}
        </TableBody>
      </Table>
    )
  }
}

export default class RightCol extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <WeeklyList data={data.weeklyData}/>
        <br/>
        <MonthlyList data={data.monthlyData}/>
      </div>
    )
  }
}

var data = {
  weeklyData: {
    title: "Weekly Goals",
    goals: [
      "Cut down a tree",
      "Build an evil headquarters",
      "Purchase a BattleCruiser"
    ]
  },
  monthlyData: {
    title: "Monthly Goals",
    goals: [
      "Fire the Death Cannon",
      "Dominate East Asia"
    ]
  }
};