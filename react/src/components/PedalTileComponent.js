import React from 'react';
import { Link, browserHistory } from 'react-router';


const PedalTileComponent = props => {
  return(
  <div>
  <img src= {props.pedalImage}></img>
  <li> {props.pedalName}</li>
  <h1>{props.pedalType}</h1>

  </div>
  )
}

export default PedalTileComponent;
