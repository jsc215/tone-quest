import React from 'react';
import { Link } from 'react-router';
// import BackButton from './BackButton.js';

const NavBar = props => {
  return(
    <div>
      <div>
        <h1 className="title">Tone Quest</h1>
          <ul className= "menu">
            <li><Link to='/'>See All Pedals</Link></li>
            <li><Link to={`/pedals/new`}>Add a Pedal</Link></li>
          </ul>
        </div>
        {props.children}
      </div>

    )
  }

export default NavBar;
