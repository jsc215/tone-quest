import React from 'react';


const PedalShowTile = props => {
  return(
    <div>
      <h1>{props.pedalName}</h1>
      <h2>{props.pedalType}</h2>
      <img src={props.pedalImage}></img>

      <p>{props.pedalDescription}</p>
    </div>
  );
};






export default PedalShowTile;
