import * as React from 'react';
import LeftCol from './leftcol.jsx';
import MiddleCol from './middlecol.jsx';
import RightCol from './rightcol.jsx';

export default class AboutPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: ["hallo card 1", "hallo card 2"]
    }
  }
  render() {
    return(
      <div>
        <div className="left-col">
          <LeftCol/>
        </div>

        <div className="middle-col">
          <MiddleCol/>
        </div>

        <div className="right-col">
          <RightCol/>
        </div>
      </div>
    );
  }
};