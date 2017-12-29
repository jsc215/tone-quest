import React from 'react';
import { Link} from 'react-router';

  const PedalboardShowTile = props => {
    return(
        <div className= 'small-6 medium-4 large-3 cell pedalTile'>
            <Link to={`/pedalboards`}>
              <p>{props.pedalboardName}</p></Link>
              <p>User: {props.pedalboardUser}</p>
             </div>
    );
  };





export default PedalboardShowTile;
