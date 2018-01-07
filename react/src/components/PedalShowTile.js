import React from 'react';
// import {browserHistory, Link} from 'react-router';

const PedalShowTile = props => {
  return(
    <div>
      <div className='show-box'>
        <h3>{props.pedalName}</h3>
        <h3>Effect Type: {props.pedalType}</h3>
        <p id='show-box-desc'>{props.pedalDescription}</p>
        <img src={props.pedalImage}></img>
      </div>
    </div>
  );
};






export default PedalShowTile;
