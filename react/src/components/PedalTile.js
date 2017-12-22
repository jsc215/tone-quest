import React from 'react';
import { Link} from 'react-router';


const PedalTile = props => {
  return(
      <div className='small-6 medium-4 large-3 cell pedalTile'>
          <Link to={`/pedals/${props.id}`}>
            <p>{props.pedalName}<br/>Type of Effect: {props.pedalType}</p>
            <img src={props.pedalImage}></img></Link>
      </div>
  );
};

export default PedalTile;
