import React from 'react';
import {browserHistory, Link} from 'react-router';


const PedalTile = props => {
  return(
  <div>
    {props.pedalName}
    <img src={props.pedalImage}></img>
  </div>
  )
}

export default PedalTile;
