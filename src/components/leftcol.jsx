import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
//import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
//import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import FloatingActionButton from '../../node_modules/material-ui/lib/floating-action-button';
import ContentAdd from '../../node_modules/material-ui/lib/svg-icons/content/add';

import Radium from 'radium';

//TODO: drag and drop lists

var data = [{
  checked: "yes",
  content: "Take out trash"}, {
  checked: "no",
  content: "paint the car"}
];
var cards = [];

const styles = {
  card_default: {
    color: Colors.white
  },
  card_done: {
    color: Colors.lightGreenA100
  },
  card_delay: {
    color: Colors.yellow200
  },
  card_delete: {
    color: Colors.redA100
  },
  FAB_1: {
    marginLeft: 150
  }
};

@Radium
class FancyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0
    }
  }
  toggleCardState(e) {
    this.setState({
      status: this.state.status + 1
    });
    if (this.state.status >=2) {
      this.setState({
        status: 0
      })
    }
    if (this.state.status == 0) {
      e.currentTarget.style.backgroundColor = styles.card_default.color;
    } else if (this.state.status == 1) {
      e.currentTarget.style.backgroundColor = styles.card_done.color;
    } else if (this.state.status == 2) {
      e.currentTarget.style.backgroundColor = styles.card_delay.color;
    }
  }
  render() {
    return(
      <Card
        {...this.props}
        className="card-1"
        onClick={this.toggleCardState.bind(this)}>
          <h5 className="card-1-content">{this.props.text}</h5>
      </Card>
    )
  }
}
class FancyCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: data
    }
  }
  addCard() {
    if (this.state.currentData.length < 7) {
      this.state.currentData.push(
        {
          checked: "Yes",
          content: "build a death star"
        });
      this.setState({
        currentData: this.state.currentData
      })
    }
  }
  removeCard() {
    if (this.state.currentData.length >1) {
      this.state.curentData.pop();
      this.setState({
        currentData: this.state.currentData
      })
    }
  } // TODO: get removecard working
  static updateCards() {
    console.log('update feature still in progress');
  }
  render() {
    return(
      <div>{this.state.currentData.map(
        function(object, i){
          return (
            <FancyCard key={i} text={object.content}/> )
        }
      )}
      <FloatingActionButton style={styles.FAB_1} onClick={this.addCard.bind(this)}>
        <ContentAdd/>
      </FloatingActionButton>
      <FloatingActionButton style={styles.FAB_1} onClick={this.removeCard.bind(this)}>
        <ContentAdd/>
      </FloatingActionButton>
      </div>
    );
  }
}
export default class LeftCol extends React.Component {
  render() {
    return(
      <FancyCards/>
    )
  }
};