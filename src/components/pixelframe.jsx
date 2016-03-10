import * as React from 'react';
import FlatButton from '../../node_modules/material-ui/lib/flat-button';
import Card from '../../node_modules/material-ui/lib/card/card';
import Colors from '../../node_modules/material-ui/lib/styles/colors';

import Radium from 'radium';

var data = {
  pixelIds: [
    "000001",
    "002003",
    "030120",
    "067010",
    "hallala"
  ]
};

const styles = {
  pixel_default: {
    color: Colors.white
  },
  pixel_success: {
    color: Colors.greenA200
  },
  pixel_fail: {
    color: Colors.red200
  }
};

class Pixel extends React.Component {
  constructor(props){
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
      e.currentTarget.style.backgroundColor = styles.pixel_default.color;
    } else if (this.state.status == 1) {
      e.currentTarget.style.backgroundColor = styles.pixel_success.color;
    } else if (this.state.status == 2) {
      e.currentTarget.style.backgroundColor = styles.pixel_fail.color;
    }
  }
  render() {
    return(
      <Card className="pixel" onClick={this.toggleCardState.bind(this)}><p>{this.props.text}</p></Card>
    )
  }
}

class GeneratePixels extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <FlatButton {...this.props}>
        <p>{this.props.namesss}</p>
      </FlatButton>
    )
  }
}

export default class PixelFrame extends React.Component {
  constructor(props){
    super(props);
  }
  displayPixels(data){
    var trees = data.map(
      function(object, i){
        return(
          <Pixel key={i} text={this.loadPixel(object)}>

          </Pixel>
        )
      }, this
    );
    return(trees)
  }
  loadPixel(pixelID){
    return("pix")
  }
  render() {
    return(
      <div className="pixelFrameSpace">
        <Card>{this.displayPixels(data.pixelIds)}</Card>
      </div>
    )
  }
}