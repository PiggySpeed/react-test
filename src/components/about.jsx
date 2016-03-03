import * as React from 'react';
import LeftCol from './leftcol.jsx';

export default class AboutPage extends React.Component{
  render() {
    return(
      <div>
        <div className="left-col">
          <LeftCol/>
        </div>

        <div className="middle-col">
          middlecol
        </div>

        <div className="right-col">
          rightco
        </div>
      </div>
    );
  }
};