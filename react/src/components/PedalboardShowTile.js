import React from 'react';
import { Link } from 'react-router';


const PedalboardShowTile = props => {
  return(

      <div>
          <Link to={`/pedals/${props.id}`}><img src={props.pedalImage}></img></Link>
          <p>{props.pedalName}</p>
        </div>

  );
};

export default PedalboardShowTile;
