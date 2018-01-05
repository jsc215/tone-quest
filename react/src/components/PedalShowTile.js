import React from 'react';
// import {browserHistory, Link} from 'react-router';

const PedalShowTile = props => {
  return(
    <div className="grid-x" >
      <div className= "small 12 large 12 cell PedalShowImg">
        <span className='show-box'>
      <h1>{props.pedalName}</h1>
        <h2>Effect Type: {props.pedalType}</h2>
      </span>
        <img src={props.pedalImage}></img>
          <p id='show-box-desc'>Description: {props.pedalDescription}</p>

      </div>
    </div>
  );
};






export default PedalShowTile;
