import React from 'react';
// import {browserHistory, Link} from 'react-router';

const PedalShowTile = props => {
  return(
    // <div className="grid-x" >

      <div>
        <div className='show-box'>
          <h1>{props.pedalName}</h1>
          <h2>Effect Type: {props.pedalType}</h2>
          <p id='show-box-desc'>{props.pedalDescription}</p>
          <img src={props.pedalImage}></img>
        </div>

        </div>

    );

};






export default PedalShowTile;
