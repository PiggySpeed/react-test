import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.component{
  render(){
    return <Link {...this.props} activeClassName="active" />
  }
}

export default class PageTemplate extends React.component{
  render() {
    return(
      <div>
        <h1>TESTING</h1>
        <ul role="nav">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/display">Display</NavLink></li>
        </ul>
      </div>
    )
  }
}
