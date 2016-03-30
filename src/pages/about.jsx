import * as React from 'react';
import LeftCol from './../components/leftcol.jsx';
import MiddleCol from './../components/middlecol.jsx';
import RightCol from './../components/rightcol.jsx';

export default class AboutPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ["hallo card 1", "hallo card 2"]
    }
  }
  render() {
    return(
      <div>
        <div>
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