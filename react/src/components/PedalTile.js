import React from 'react';
import {browserHistory, Link} from 'react-router';


const PedalTile = props => {
  return(
  <div className= "grid-x">
    <div className= "small-6 large-4 columns">
      <div id= "pedalTile">
      <Link to={`/pedals/${props.id}`}>
      <p>Type of Effect: {props.pedalType}<br/>
      {props.pedalName}</p>
      <img src={props.pedalImage}></img></Link>
      </div>
    </div>
  </div>
  );
};

export default PedalTile;
