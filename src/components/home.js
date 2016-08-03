import * as React from 'react'

export default class HomePage extends React.Component{
  render() {
    return(
      <div>
        <h1>HOME PAGE</h1>
      </div>
    );
  }
};



//export default class LeftNavSimpleExample extends React.Component {
//
//  constructor(props) {
//    super(props);
//    this.state = {open: false};
//  }
//
//  handleToggle = () => this.setState({open: !this.state.open});
//
//  render() {
//    return (
//      <div>
//        <RaisedButton
//          label="Toggle LeftNav"
//          onTouchTap={this.handleToggle}
//        />
//        <LeftNav open={this.state.open}>
//          <MenuItem>Menu Item</MenuItem>
//          <MenuItem>Menu Item 2</MenuItem>
//        </LeftNav>
//      </div>
//    );
//  }
//}