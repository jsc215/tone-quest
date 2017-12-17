import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const NavBar = props => {
  return(
    <div>
      <BackButton />
      <Link to='/pedals'> HOME </Link>
      <h1 className="page-title"> Pedals</h1>
      {props.children}
    </div>
  )
}

export default NavBar;
