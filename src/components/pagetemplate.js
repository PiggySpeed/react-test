import * as React from 'react';
import { Link, IndexLink } from 'react-router';

class NavLink extends React.Component{
  render(){
    return <Link {...this.props} activeClassName="active" />
  }
}

export default class PageTemplate extends React.Component{
  render() {
    return(
      <div>
        <h1>REACTRON</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/display">Display</NavLink></li>
        </ul>
          {this.props.children || <Home/>}
      </div>
    )
  }
}
