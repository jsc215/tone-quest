import React from 'react';
import { Link } from 'react-router';
// import BackButton from './BackButton.js';
// import UsersIndexTile from './UsersIndexTile.js';

const NavBar = props => {
  return(
    <div>
      <div>
        <h1 className="title">Tone Quest</h1>
          <ul className= "menu">
            <li><Link to='/'>See All Pedals</Link></li>
            <li><Link to={`/pedals/new`}>Add a Pedal</Link></li>
            <li><Link to={`/users`}>User Page</Link></li>
            <li><Link to={`/pedalboards`}>Pedalboards</Link></li>
            <li><Link to={`/pedalboards/new`}>Create a Pedalboard</Link></li>
          </ul>
        </div>
        {props.children}
      </div>

    )
  }

export default NavBar;
