import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
//import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
//import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';

var data = [{
  checked: "yes",
  content: "Take out trash"}, {
  checked: "no",
  content: "paint the car"}, {
  checked: "yes",
  content: "change light bulbs"}, {
  checked: "no",
  content: "go fishing"
}];
var cards = [];

var styles = {
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
  }
};

class FancyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      piggy: 0
    }
  }
  toggleCardState(e) {
    this.setState({
      piggy: this.state.piggy + 1
    });
    if (this.state.piggy >2) {
      this.setState({
        piggy: 0
      })
    }
    if (this.state.piggy == 0) {
      e.currentTarget.style.backgroundColor = styles.card_default.color;
    } else if (this.state.piggy == 1) {
      e.currentTarget.style.backgroundColor = styles.card_done.color;
    } else if (this.state.piggy == 2) {
      e.currentTarget.style.backgroundColor = styles.card_delay.color;
    }
  }
  render() {
    return(
      <Card
        {...this.props}
        className="card1"
        onClick={this.toggleCardState.bind(this)}
      />
    )
  }
}

class FancyCards extends React.Component {
  constructor(props) {
    super(props);
  }
  createcard(i) {
    return (<Card className="card1"><p>This is card o {i}</p></Card>);
  }
  addcard(card) {
    cards.push(card);
  }
  updatecards() {
    console.log('update feature still in progress');
  }
  render() {
    return(
      <div>{data.map(
        function(object, i){
          return (
            <FancyCard key={i}>
              <p>{object.checked} {object.content} {i}</p>
            </FancyCard>)
        }
      )}</div>
    );
  }
}

export default class LeftCol extends React.Component {
  render() {
    return(
      <div>
      <FancyCards>
      </FancyCards>
      </div>
    )
  }
};