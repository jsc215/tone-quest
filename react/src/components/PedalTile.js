import React from 'react';
import {browserHistory, Link} from 'react-router';


const PedalTile = props => {
  return(
  <div>
    <h1>{props.pedalName}</h1>
    <p>Type of Effect:{props.pedalType}</p>
    <img src={props.pedalImage}></img>
  </div>
  )
}

export default PedalTile;
