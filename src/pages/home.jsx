import * as React from 'react'

export default class HomePage extends React.Component{
  render() {
    return(
      <div>
        <h1>HOME PAGE</h1>
        <p>PiggyBoy</p>
        <button onClick={()=>console.log("tree")}>Click Me</button>
      </div>
    );
  }
};