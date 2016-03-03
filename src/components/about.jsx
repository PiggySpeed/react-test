import * as React from 'react';
import LeftCol from './leftcol.jsx';
import MiddleCol from './middlecol.jsx'

export default class AboutPage extends React.Component{
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
          rightco
        </div>
      </div>
    );
  }
};