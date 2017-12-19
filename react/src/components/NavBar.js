import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const NavBar = props => {
  return(
    <div>
      <BackButton />
      <Link to='/'>All Pedals</Link>
      {props.children}
    </div>
  )
}

export default NavBar;
