import React from 'react';
import {browserHistory, Link} from 'react-router';


const PedalTile = props => {
  return(
  <div className= "pedalTile">
    <Link to={`/pedals/${props.id}`}>
      <h1>{props.pedalName}</h1>
        <p>Type of Effect:{props.pedalType}</p>
      <img src={props.pedalImage}></img></Link>
  </div>
  )
}

export default PedalTile;
