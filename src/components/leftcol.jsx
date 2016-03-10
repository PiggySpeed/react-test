import * as React from 'react';
//import FlatButton from '../../node_modules/material-ui/lib/flat-button';
//import Paper from '../../node_modules/material-ui/lib/paper';
//import Slider from '../../node_modules/material-ui/lib/slider';
import Card from '../../node_modules/material-ui/lib/card/card';
import CardActions from '../../node_modules/material-ui/lib/card/card-actions';
import CardHeader from '../../node_modules/material-ui/lib/card/card-header';
import CardMedia from '../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../node_modules/material-ui/lib/card/card-title';
import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import CardText from '../../node_modules/material-ui/lib/card/card-text';
import RaisedButton from '../../node_modules/material-ui/lib/raised-button';
import Colors from '../../node_modules/material-ui/lib/styles/colors';
//import LeftNav from '../../node_modules/material-ui/lib/left-nav';
//import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import FloatingActionButton from '../../node_modules/material-ui/lib/floating-action-button';
import ContentAdd from '../../node_modules/material-ui/lib/svg-icons/content/add';
import Clear from '../../node_modules/material-ui/lib/svg-icons/content/clear';
import TextField from '../../node_modules/material-ui/lib/text-field';
import IconButton from '../../node_modules/material-ui/lib/icon-button';

import Radium from 'radium';

//TODO: drag and drop lists
//TODO: add item numbers to list items
//TODO: add pleasant animations to list items
//TODO: prevent event propagation --> not possible currently?
//TODO: have cursor blinking on card once your create new card
//TODO: create new card only when other cards are submitted (disabled)
//TODO: tidy up delete button
//TODO: find out why list item text is not being properly deleted
//TODO: add a way to save and clear the list items

var data = [{
  checked: "yes",
  content: "Take out trasfh"}, {
  checked: "no",
  content: "paint the carr"}
];

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
  FAB_1: {
    marginLeft: 150,
    backgroundColor: Colors.white,
    color: Colors.clear
  },
  title_bar_style: {
    backgroundColor: Colors.grey200
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
  finalizeText(e) {
    e.target.disabled = "false"
  }
  render() {
    return(
      <Card
        {...this.props}
        className="card-1"
        onClick={this.toggleCardState.bind(this)}>
          <span>
            <TextField hintText="add your item here" onEnterKeyDown={this.finalizeText}/>
            <CardActions className="card-1-delete">
              <IconButton onClick={this.props.removeCard}>
                <Clear/>
              </IconButton>
            </CardActions>
          </span>
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
  removeCard(item) {
    if (this.state.currentData.length >0) {
      console.log(item);
      this.state.currentData.splice(item, 1);
      this.setState({
        currentData: this.state.currentData
      })
    }
  }
  render() {
    return(
      <div>
        {this.state.currentData.map(
        function(object, i){
          return (
            <FancyCard key={i} removeCard={this.removeCard.bind(this, i)} />)
        }, this
      )}
      <FloatingActionButton style={styles.FAB_1} onClick={this.addCard.bind(this)}>
        <ContentAdd/>
      </FloatingActionButton>
      </div>
    );
  }
}

class TitleBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Card style={styles.title_bar_style} >
        <CardText>TODO</CardText>
      </Card>
    )
  }
}

export default class LeftCol extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <TitleBar/>
        <FancyCards/>
      </div>
    )
  }
};