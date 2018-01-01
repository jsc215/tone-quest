import React from 'react';
import { Link } from 'react-router';
// import BackButton from './BackButton.js';
// import UsersIndexTile from './UsersIndexTile.js';

const NavBar = props => {
  return(
    <div>
      <div>
        <Link to='/'>
        <h1 className="title">Tone Quest</h1></Link>
          <ul className= "menu align-center">
            <li><Link to='/'></Link></li>
            <li><Link to='/pedals' activeClassName='active'>See All Pedals</Link></li>
            <li><Link to={`/pedals/new`} activeClassName='active'>Add a Pedal</Link></li>
            <li><Link to={`/users`} activeClassName='active'>User Page</Link></li>
            <li><Link to={`/pedalboards`} activeClassName='active'>Pedalboards</Link></li>
            <li><Link to={`/pedalboards/new`} activeClassName='active'>Create a Pedalboard</Link></li>
          </ul>
        </div>
        {props.children}
      </div>

    )
  }

export default NavBar;
