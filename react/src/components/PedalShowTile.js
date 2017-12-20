import React from 'react';
// import {browserHistory, Link} from 'react-router';

const PedalShowTile = props => {
  return(
    <div>
      <h1>{props.pedalName}</h1>
      <h2>Effect Type: {props.pedalType}</h2>
      <img src={props.pedalImage}></img>

      <p>{props.pedalDescription}</p>
    </div>
  );
};






export default PedalShowTile;
